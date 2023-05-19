/** @file functions.h
* 
* @brief header file for helper functions used in FSM. All includes in pico_c.h 
*
*/

#ifndef FUNCTIONS_H
#define FUNCTIONS_H

#include "pico_c.h"
#define REGEN_PIN 28

int check_weights(double * weight_value_array);
double *save_weight_to_array();
double get_weight_mean_average();
void update_tare_offset();
double get_tare_offset();

bool get_tare_status();
void update_tare(bool status);
void init_tare();

void init_reg();

#endif /* FUNCTIONS_H */
/*** end of file ***/