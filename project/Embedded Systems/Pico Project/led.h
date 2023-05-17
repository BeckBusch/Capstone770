/** @file led.h
* 
* @brief header file for led functions. All includes in pico_c.h 
*
*/

#ifndef LED_H
#define LED_H

#include "pico_c.h"

#define POWER_LED 16
#define WIFI_LED 17
#define STABLE_LED 18
#define TARE_LED 19
#define TARE_BUTTON 20

void enable_tare_LED();
void enable_wifi_LED();
void enable_power_LED();
void enable_stable_LED();
void disable_tare_LED();
void disable_wifi_LED();
void disable_power_LED();
void disable_stable_LED();


#endif /* LED_H */
/*** end of file ***/