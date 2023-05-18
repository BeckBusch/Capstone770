/**
 * Capstone 770 Project
 * Team 10
 * 
 * pico_c.c
 * Main code, FSM Implementation and its helper functions
 */

#include "pico_c.h"
#include "network.h"
#include "adc.h"
#include "led.h"
#include "functions.h"

char request_body[256];
int tare_flag = 0;
int check = 0;
enum states {idle, not_ready, ready, tare_initialized, receive_data, send_data};    // initialize states for the FSM

#define REGEN_PIN 28


void init_reg();

void init_reg() {
    gpio_init(REGEN_PIN);
    gpio_set_dir(REGEN_PIN, GPIO_OUT); 
    gpio_put(REGEN_PIN, 1); 
}

// ISR for tare button GP20 -> tare switch
void tare_ISR(unsigned int gpio, uint32_t events) {
    // write code for ISR for tare button press
    tare_flag = 1;
    enable_tare_LED();
    printf("Tare interrupt occurred at PIN %d with event %d\n", gpio, events);
}

void init_button() {
    gpio_init(TARE_BUTTON);
    gpio_set_dir(TARE_BUTTON, GPIO_IN); // bit 2 is set falling edge, edge low so == 4 and bit 3 set for rising edge == 8
    gpio_pull_up(TARE_BUTTON);
    gpio_set_irq_enabled_with_callback(TARE_BUTTON, 0x04, 1, tare_ISR);  // attach interrupt to tare button pin
}


int main() {
    // initialize everything
    stdio_init_all();   
    adc_init();
    adc_select_input(ADC_CHANNEL);
    init_button();  // initialize button ISR
    init_reg();

    if (cyw43_arch_init()) {
        printf("Wi-Fi init failed");
        return 1;
    }

    cyw43_arch_enable_sta_mode();
    enum states FSM = not_ready;    // set intial FSM state

    //sprintf(request_body, "{\"%s\":\"%d\"}", "Weight", 15);
    //sendRequest("/Measurements/Dog1.json", request_body);

    sleep_ms(2000);
    
    while(1) {
        // FSM switch cases
        switch(FSM) {

            // idle state - pico w is waiting for user input
            case idle:
                printf("========== Current state: idle ==========\n");
                sleep_ms(1000);
                // polling until set amount of weight is reached or other inputs
                while(1) {
                    int check = 0;

                    if (tare_flag == 1) {   // ISR will set tare_flag to 1
                        FSM = tare_initialized;
                        break;
                    }

                    check = check_weights(save_weight_to_array());           // take 5 readings and save to global array and ensure weight readings are stable
                    printf("Check value: %d\n", check);

                    if (check == 1) {   // stable reading reached
                        FSM = receive_data; // once steady amount of data is received
                        break;
                    } 

                }
                break;


            // not ready state - power is on but WiFi is disconnected
            case not_ready:
                printf("========== Current state: not_ready ==========\n");
                sleep_ms(1000);
                enable_power_LED();
                if (wifi_connect()) {
                //if (1) {    // for testing only
                    // once connection is succesful
                    FSM = ready;
                    break;
                }


            // ready state - both power and WiFi is on
            case ready:
                printf("========== Current state: ready ==========\n");
                sleep_ms(1000);
                enable_wifi_LED();
                FSM = idle; // poll for inputs
                break;


            // tare_initialized state - tare button press detected, enable tare LED
            case tare_initialized:
                printf("========== Current state: tare_initialized ==========\n");
                sleep_ms(1000);
                // update tare weight calculation here
                check = check_weights(save_weight_to_array());           // take 5 readings and save to global array and ensure weight readings are stable
                if (check == 1) {   // stable reading reached
                    update_tare_offset();   // update tare_offset value -> tare_offset = weight_mean_average;
                } 

                printf("\nTARE OFFSET VALUE = %f\n", get_tare_offset());
                disable_tare_LED();
                tare_flag = 0;      // reset tare flag
                FSM = receive_data; // go back to receive_data state to keep receiving data
                break;


            // receive data state - wait until set amount of data reached, enable steady weight LED
            case receive_data:
                printf("========== Current state: receive_data ==========\n");
                enable_stable_LED();
                sleep_ms(1000);
                // add code
                // weight_mean_average contains the average of the last 5 (stable) readings
                // add code to prepare data to send to server

                // ensure the data received here is not faulty or zero (i.e. no weight on scale)
                if (get_weight_mean_average() < 1.0) {
                    FSM = idle;
                    break;
                } else {
                FSM = send_data;
                break;
                }


            // send data state - send data packet to server 
            case send_data:
                printf("========== Current state: send_data ==========\n");
                sleep_ms(1000);
                disable_stable_LED();

                

                sprintf(request_body, "{\"location\":\"Auckland\", \"gender\":\"Male\", \"age\":4, \"breed\":\"breedTest\", \"name\":\"nameTest\"}");
                sendRequest("unused argument :)", request_body);

                // add code
                FSM = idle;
                break;
        }
    }
    cyw43_arch_deinit();
    return 0;
}

// original code
// int main() {
//     // Code Init
//     stdio_init_all();
//     if (cyw43_arch_init()) {
//         printf("Wi-Fi init failed");
//         return 1;
//     }

//     adc_init();
//     adc_select_input(ADC_CHANNEL);

//     cyw43_arch_enable_sta_mode();

//     //wifi_connect();
    
//     //sprintf(request_body, "{\"%s\":\"%d\"}", "Weight", 15);
//     //sendRequest("/Measurements/Dog1.json", request_body);

//     sleep_ms(100);

//     // Code Main 
//     while (1) {
//         /*
//         //Wait Function conditions//
//         1.  flag to check if weight measurement is needed
//         2.  Sample until adc reading becomes stable, every .5s
//         /////*/

//         double weightReading = adcConvert();
//         printf("Weight reading: %f\n", weightReading);

//         cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 1);
//         printf("LED ON!\n");
//         sleep_ms(1000); // 0.5s delay

//         cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 0);
//         printf("LED OFF!\n");
//         sleep_ms(1000); // 0.5s delay

//     }
//     cyw43_arch_deinit();
//     return 0; // test
// }
