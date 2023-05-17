/**
 * Capstone 770 Project
 * Team 10
 *
 * functions.c
 * helper functions for the FSM
 */

#include "functions.h"
#include "adc.h"

double weight_mean_average = 0.0;
double weight_value_array[5] = {0, 0, 0, 0, 0};     // used to store weight readings
int array_full_flag = 0;                            // set to 1 once array full
double tare_offset = 0.0;

// getter for the weight mean average value
double get_weight_mean_average() {
    return weight_mean_average;
}

void update_tare_offset() {
    tare_offset = weight_mean_average;
}

double get_tare_offset() {
    return tare_offset;
}

double *save_weight_to_array() {
    for (int counter = 0; counter < 5; counter++) {
        double weightReading = adcConvert();
        weight_value_array[counter] = weightReading;
        // weight_value_array[counter] = weightReading
        printf("Weight reading: %f\n", weightReading);
        sleep_ms(500); // take a reading every 0.5 second
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
        weight_mean_average = average - tare_offset;
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
