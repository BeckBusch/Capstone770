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

double weight1 = 0.0;
double weight2 = 0.0;
double compare_ratio = 0.0;
double lower_bound = 0.97;  // constant
double upper_bound = 1.03;  // constant
double weight_to_server = 0.0;

// for initial calibration
double cal_weight1 = 0.0;
double cal_weight2 = 0.0;
double cal_weight_avg = 0.0;

void state_sleep();

void state_sleep(){
    sleep_ms(1000);
}


// ISR for tare button GP20 -> tare switch
void tare_ISR(unsigned int gpio, uint32_t events) {
    // if (get_tare_status()) {    // this is so tare led is not enabled at start up
    //     enable_tare_LED();
    // }
    // enable_tare_LED();
    // update_tare(true);
    tare_flag = 1;
    printf("\nTare interrupt occurred at PIN %d with event %d\n", gpio, events);  // print to terminal
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
    init_reg();     // initialize RegEn pin

    if (cyw43_arch_init()) {
        printf("Wi-Fi init failed");
        return 1;
    }

    cyw43_arch_enable_sta_mode();
    enum states FSM = not_ready;    // set intial FSM state

    update_tare(false);
    sleep_ms(2000);
    tare_flag = 0;
    
    while(1) {
        // FSM switch cases
        switch(FSM) {

            // idle state - pico w is waiting for user input
            case idle:
                init_reg();
                printf("========== Current state: idle ==========\n");
                printf("CURRENT TARE STATUS: %d\n", get_tare_status());
                state_sleep();
                // disable_stable_LED();   // incase it is still on
                // polling until set amount of weight is reached or other inputs
                while(1) {
                    check = 0;

                    // if (get_tare_status()) {
                    if (tare_flag == 1) {
                        printf("CURRENT TARE STATUS inside the idle check: %d\n", get_tare_status());
                        cal_weight_avg = 0.0;
                        FSM = tare_initialized;
                        // enable_tare_LED();
                        break;
                    } else {
                        // check = check_weights(save_weight_to_array());           // take 25 readings and save to global array and ensure weight readings are stable
                        weight1 = check_weights(save_weight_to_array());
                        if (tare_flag == 1) {
                            sleep_ms(100);
                            cal_weight_avg = 0.0;
                            FSM = tare_initialized;
                            break;
                        }
                        weight2 = check_weights(save_weight_to_array());
                        if (tare_flag == 1) {
                            sleep_ms(100);
                            cal_weight_avg = 0.0;
                            FSM = tare_initialized;
                            break;
                        }

                        compare_ratio = weight1/weight2;
                        weight_to_server = average_2_weights(weight1, weight2) - cal_weight_avg;

                        if ((lower_bound < compare_ratio) || (compare_ratio > upper_bound)) {
                            // printf("Check value: %d\n", check);
                            printf("\nWeight1 value: %f", weight1);
                            printf("\nWeight2 value: %f", weight2);
                            printf("\nWeight to send to server: %f\n", weight_to_server);
                            printf("\nCOMPARE VALUE = %f\n", compare_ratio);
                            sleep_ms(2000);
                            FSM = receive_data; // once steady amount of data is received
                            break;
                        } else {
                            FSM = idle; // signal not stable, poll for more inputs
                            break;
                        }

                        
                        if (tare_flag == 1) {
                            sleep_ms(100);
                            cal_weight_avg = 0.0;
                            FSM = tare_initialized;
                            break;
                        } 
                        
                        // if (check == 1) {       // stable reading reached
                        //     FSM = receive_data; // once steady amount of data is received
                        //     break;
                        // } 
                    }

                }
                break;


            // not ready state - power is on but WiFi is disconnected
            case not_ready:
                printf("========== Current state: not_ready ==========\n");
                printf("CURRENT TARE STATUS: %d\n", get_tare_status());
                state_sleep();
                enable_power_LED();
                if (wifi_connect()) {
                // if (1) {    // for testing only
                    // once connection is succesful
                    FSM = ready;
                    break;
                }


            // ready state - both power and WiFi is on
            case ready:
                printf("========== Current state: ready ==========\n");
                printf("CURRENT TARE STATUS: %d\n", get_tare_status());
                state_sleep();

                // calibration
                cal_weight1 = check_weights(save_weight_to_array());
                cal_weight2 = check_weights(save_weight_to_array());
                cal_weight_avg = average_2_weights(cal_weight1, cal_weight2);
                printf("CALIBRATION WEIGHT: %f\n", cal_weight_avg);
                sleep_ms(250);
                enable_wifi_LED();
                FSM = idle; // poll for inputs
                break;


            // tare_initialized state - tare button press detected, enable tare LED
            case tare_initialized:
                printf("========== Current state: tare_initialized ==========\n");
                printf("CURRENT TARE STATUS: %d\n", get_tare_status());
                state_sleep();
                enable_tare_LED();
                // update tare weight calculation here
                check = check_weights(save_weight_to_array());           // take 25 readings and save to global array and ensure weight readings are stable
                
                weight1 = check_weights_true(save_weight_to_array());   // excludes offset calculation
                weight2 = check_weights_true(save_weight_to_array());
                // printf("Check value: %d\n", check);
                printf("\nWeight1 value: %f", weight1);
                printf("\nWeight2 value: %f\n", weight2);
                sleep_ms(2000);

                compare_ratio = weight1/weight2;

                if ((lower_bound < compare_ratio) || (compare_ratio > upper_bound)) {
                    update_tare_offset(average_2_weights(weight1, weight2));
                } 
                        
                printf("\nTARE OFFSET VALUE = %f\n", get_tare_offset());
                printf("\nCOMPARE VALUE = %f\n", compare_ratio);
                disable_tare_LED();
                tare_flag = 0;  // once everything is complete
                
                // update_tare(false);
                FSM = idle; // go back to receive_data state to keep receiving data
                break;


            // receive data state - wait until set amount of data reached, enable steady weight LED
            case receive_data:
                printf("========== Current state: receive_data ==========\n");
                state_sleep();
                // ensure the data received here is not faulty or zero (i.e. no weight on scale)
                if (weight_to_server < 0.30) {
                    tare_flag = 0; // in case the tare
                    FSM = idle;
                    break;
                // } else if (get_tare_status()) {     // don't send weight measurement for tare
                } /*else if (tare_flag == 1) {
                    tare_flag = 0;      // reset tare flag
                    update_tare(false);
                    FSM = idle;
                    break;**/
                else {
                    enable_stable_LED();
                    FSM = send_data;
                    break;
                }


            // send data state - send data packet to server 
            case send_data:
                printf("========== Current state: send_data ==========\n");
                state_sleep();
                // disable_stable_LED();
                void disable_reg();
                // printf("\nSIMULATING SENDING DATA - REG PIN DISABLED");
                // sleep_ms(5000);
                disable_stable_LED();

                // sprintf(request_body, "{\"location\":\"Auckland\", \"gender\":\"Male\", \"age\":4, \"breed\":\"breedTest\", \"name\":\"nameTest\"}");
                // sendRequest("unused argument :)", request_body);

                // arguments are the weight value to be sent, and the constant scale ID
                // sprintf(request_body, "{\"weight\":%f,\"scaleId\": %d}", get_weight_mean_average(), 1);
                sprintf(request_body, "{\"weight\":%f,\"scaleId\": %d}", weight_to_server, 1);
                sendRequest("unused argument :)", request_body);
                // sleep_ms(50);
                disable_stable_LED();

                FSM = idle;
                break;
        }
    }
    cyw43_arch_deinit();
    return 0;
}
