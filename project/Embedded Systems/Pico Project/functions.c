/**
 * Capstone 770 Project
 * Team 10
 *
 * functions.c
 * helper functions for the FSM
 */

#include "functions.h"
#include "adc.h"

double weight_mean_average = 0.0; // contains offset calculation
// double weight_value_array[25] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,};     // used to store weight readings
double weight_value_array[25] = {0};
double weight_value_array_raw[25] = {0};
int array_full_flag = 0;                            // set to 1 once array full
double tare_offset = 0.0;
bool tare_status = false;
double average = 0.0;

// function to enable the RegEn pin
void init_reg() {
    gpio_init(REGEN_PIN);
    gpio_set_dir(REGEN_PIN, GPIO_OUT); 
    gpio_put(REGEN_PIN, 1); 
}

void disable_reg() {
    gpio_init(REGEN_PIN);
    gpio_set_dir(REGEN_PIN, GPIO_OUT); 
    gpio_put(REGEN_PIN, 0); 
}

bool get_tare_status() {
    return tare_status;
}

void update_tare(bool status) {
    tare_status = status;
}

void init_tare() {
    tare_status = false;
}

// getter for the weight mean average value
double get_weight_mean_average() {
    return weight_mean_average;
}

double average_2_weights(double x, double y) {
    double output = 0.0;
    output = (x + y)/2.0f;
    return output;
}

void update_tare_offset(double x) {
    // if (x < tare_offset) {
    //     tare_offset = tare_offset + x;
    // } else {
    //     tare_offset = x;
    // }
    // tare_offset = tare_offset + x;
    tare_offset = x;
}

double get_true_average() {
    return average;
}

double get_tare_offset() {
    return tare_offset;
}

double *save_weight_to_array() {
    double weightReading = 0.0;
    double weightReading_raw = 0.0;
    for (int counter = 0; counter < 25; counter++) {
        double weightReading_raw = adcConvert();
        // double weightReading = voltage_to_weight(weightReading_raw);
        double weightReading = adcConvert();
        weight_value_array[counter] = weightReading;

        weight_value_array_raw[counter] = weightReading_raw;
        // weight_value_array[counter] = weightReading
        printf("Weight reading: %f\n", weightReading);
        sleep_ms(4); // take a reading every 4 ms
    }
    array_full_flag = 1;
    printf("\nArray full\n");
    sleep_ms(1000);      // for testing purposes
    return weight_value_array;
}


// function to check if weight readings are stable
double check_weights(double * weight_value_array) {
    int stable_flag = 0;
    double first_index = 0;
    double last_index = 0;
    double sum = 0.0;
    // double average = 0.0;

    double adc_average = 0.0;

    // calculation to check here
    // update the stable_flag based on calculation
    first_index = weight_value_array[0];
    last_index = weight_value_array[24];

    // stability check
    // if (last_index*0.90 < first_index < last_index*1.10) {
    if (1) {
        stable_flag = 1;

        // sum all values in array
        for (int i = 0; i < 25; i++) {
            sum = sum + weight_value_array[i];
        }
        average = (double)sum/25.0f;
        weight_mean_average = average - get_tare_offset();
        if (weight_mean_average < 0.0) {    // ensure weight is never negative
            weight_mean_average = 0.0;
        }
    } else {
        stable_flag = 0;
    }

    // reset array so it can filled with new values
    if (array_full_flag == 1) {
        memset(weight_value_array, 0, sizeof(weight_value_array));
        array_full_flag = 0;
    }

    printf("\nfirst index: %f", first_index);
    printf("\nlast index: %f", last_index);
    printf("\nsum: %f", sum);
    printf("\nTare offset: %f", get_tare_offset());
    printf("\naverage: %f\n", weight_mean_average);
    // printf("\naverage converted: %f\n", voltage_to_weight(weight_mean_average));
    sleep_ms(3000);  // for testing purposes

    // if (stable_flag == 1) {
    //     // stable
    //     return 1;
    // } else if (stable_flag = 0) {
    //     // not stable
    //     return 0;
    // } else {
    //     return 0;
    // }
    return weight_mean_average;

}

double check_weights_true(double * weight_value_array) {
    int stable_flag = 0;
    double first_index = 0;
    double last_index = 0;
    double sum = 0.0;
    double true_average = 0.0;

    // sum all values in array
    for (int i = 0; i < 25; i++) {
        sum = sum + weight_value_array[i];
    }
    true_average = (double)sum/25.0f;
    if (true_average < 0.0) {    // ensure weight is never negative
        true_average = 0.0;
    }
    
    // reset array so it can filled with new values
    if (array_full_flag == 1) {
        memset(weight_value_array, 0, sizeof(weight_value_array));
        array_full_flag = 0;
    }

    printf("\nsum: %f", sum);
    printf("\nTare offset: %f", get_tare_offset());
    printf("\naverage: %f\n", average);
    // printf("\naverage converted: %f\n", voltage_to_weight(weight_mean_average));
    sleep_ms(3000);  // for testing purposes

    return true_average;

}
