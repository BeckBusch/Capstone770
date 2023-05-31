/** @file functions.h
* 
* @brief header file for helper functions used in FSM. All includes in pico_c.h 
*
*/

#ifndef FUNCTIONS_H
#define FUNCTIONS_H

#include "pico_c.h"
#define REGEN_PIN 28

double check_weights(double * weight_value_array);
double *save_weight_to_array();
double get_weight_mean_average();
void update_tare_offset(double x);
double get_tare_offset();
double average_2_weights(double x, double y);
double check_weights_true(double * weight_value_array);

bool get_tare_status();
void update_tare(bool status);
void init_tare();

void init_reg();
void disable_reg();

#endif /* FUNCTIONS_H */
/*** end of file ***/