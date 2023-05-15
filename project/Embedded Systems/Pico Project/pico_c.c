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

char request_body[64];

// extract to relevant header folders later
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include "hardware/gpio.h"
#include "pico/stdlib.h"

#define POWER_LED 16
#define WIFI_LED 17
#define STABLE_LED 18
#define TARE_LED 19
#define TARE_BUTTON 20

int tare_flag = 0;
double weight_mean_average = 0.0;


double weight_value_array[5] = {0, 0, 0, 0, 0};     // used to store weight readings
int array_full_flag = 0;                // set to 1 once array full

// declare functions
void enable_tare_LED();
void enable_wifi_LED();
void enable_power_LED();
void enable_stable_LED();

void disable_tare_LED();
void disable_wifi_LED();
void disable_power_LED();
void disable_stable_LED();

// initialize states for the FSM
enum states {idle, not_ready, ready, tare_initialized, receive_data, send_data};

// define FSM functions here, can extract to a separate functions.c file later
void enable_power_LED() {
    // GP16
    gpio_init(POWER_LED);               // initialize pin
    gpio_set_dir(POWER_LED, GPIO_OUT);  // set pin to output
    gpio_put(POWER_LED, 1);     // set LED to on
    printf("Power LED toggled\n");

}

void enable_wifi_LED() {
    // GP17
    gpio_init(WIFI_LED);               // initialize pin
    gpio_set_dir(WIFI_LED, GPIO_OUT);  // set pin to output
    gpio_put(WIFI_LED, 1);     // set LED to on
    printf("Wi-Fi LED toggled\n");
}

void enable_tare_LED() {
    // GP19
    gpio_init(TARE_LED);               // initialize pin
    gpio_set_dir(TARE_LED, GPIO_OUT);  // set pin to output
    gpio_put(TARE_LED, 1);     // set LED to on
    printf("Tare LED toggled\n");
}

void enable_steady_LED() {
    // GP18
    gpio_init(STABLE_LED);               // initialize pin
    gpio_set_dir(STABLE_LED, GPIO_OUT);  // set pin to output
    gpio_put(STABLE_LED, 1);     // set LED to on
    printf("Stable LED toggled\n");
}


void disable_power_LED() {
    gpio_put(POWER_LED, 0);     // set LED to on
    printf("Power LED disabled\n");
}

void disable_wifi_LED() {
    gpio_put(WIFI_LED, 0);      // set LED to on
    printf("Wi-Fi LED disabled\n");
}

void disable_tare_LED() {
    gpio_put(TARE_LED, 0);     // set LED to off
    printf("Tare LED disabled\n");
}

void disable_stable_LED() {
    gpio_put(STABLE_LED, 0);    // set LED to off
    printf("Tare LED disabled\n");
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



int connect_wifi() {
    if (cyw43_arch_init()) {
        printf("Wi-Fi init failed");
        return -1;
    } else {
        return 1;   // connection successful
    }
}


double *save_weight_to_array() {
    for (int counter = 0; counter < 5; counter++) {
        double weightReading = adcConvert();
        weight_value_array[counter] = weightReading + 5; // +5 added for testing purposes only
        // weight_value_array[counter] = weightReading
        printf("Weight reading: %f\n", weightReading);
        sleep_ms(250); // take a reading every 0.25 second
    }
    array_full_flag = 1;
    printf("\nArray full\n");
    sleep_ms(500);
    return weight_value_array;
}


// function to check if weight readings are stable
int check_weights(double * weight_value_array) {
    int stable_flag = 0;
    double first_index = 0;
    double last_index = 0;
    double sum = 0.0;
    double average = 0.0;

    // calculation to check here
    // update the stable_flag based on calculation
    first_index = weight_value_array[0];
    last_index = weight_value_array[4];

    // stability check
    if (last_index*0.90 < first_index < last_index*1.10) {
        stable_flag = 1;
        for (int i = 0; i < 5; i++) {
            sum = sum + weight_value_array[i];
        }
        average = (double)sum/5;
        weight_mean_average = average;  // update global variable
    } else {
        stable_flag = 0;
    }

    // reset array so it can filled with new values
    if (array_full_flag == 1) {
        memset(weight_value_array, 0, sizeof(weight_value_array));
        array_full_flag = 0;
    }

    printf("\nfirst index: %f\n", first_index);
    printf("\nlast index: %f", last_index);
    printf("\nsum: %f", sum);
    printf("\naverage: %f\n", weight_mean_average);

    if (stable_flag == 1) {
        // stable
        return 1;
    } else if (stable_flag = 0) {
        // not stable
        return 0;
    } else {
        return 0;
    }

}



// // Code
int main() {
    // initialize everything
    stdio_init_all();   
    adc_init();
    adc_select_input(ADC_CHANNEL);
    init_button();  // initialize button ISR

    enum states FSM = not_ready;    // set intial FSM state

    if (cyw43_arch_init()) {
        printf("Wi-Fi init failed");
        return 1;
    }

    cyw43_arch_enable_sta_mode();

    FSM = not_ready;    // set intial FSM state


    // adc_init();
    // adc_select_input(ADC_CHANNEL);

    // cyw43_arch_enable_sta_mode();

    //wifi_connect();
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

                    check = check_weights(save_weight_to_array());           // take 5 readings and save to global array and ensure weight readings are stable

                    printf("Check value: %d\n", check);

                    if (check == 1) {   // stable reading reached
                        FSM = receive_data; // once steady amount of data is received
                        break;
                    } 

                    if (tare_flag == 1) {   // ISR will set tare_flag to 1
                        FSM = tare_initialized;
                        break;
                    }
                }
                break;


            // not ready state - power is on but WiFi is disconnected
            case not_ready:
                printf("========== Current state: not_ready ==========\n");
                sleep_ms(1000);
                enable_power_LED();
                // attempt to connect to WiFi
                // if (connect_wifi()) {
                //     // once connection is succesful
                //     FSM = ready;
                // }
                FSM = ready;
                break;


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
                tare_flag = 0; // reset tare flag
                FSM = receive_data; // go back to receive_data state to keep receiving data
                // disable_tare_LED();
                break;


            // receive data state - wait until set amount of data reached, enable steady weight LED
            case receive_data:
                printf("========== Current state: receive_data ==========\n");
                disable_tare_LED();
                sleep_ms(1000);
                // add code
                enable_steady_LED();
                // weight_mean_average contains the average of the last 5 (stable) readings
                // add code to prepare data to send to server
                FSM = send_data;
                break;


            // send data state - send data packet to server 
            case send_data:
                printf("========== Current state: send_data ==========\n");
                sleep_ms(1000);

                disable_stable_LED();
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
