/** @file adc.h
* 
* @brief header file for adc functions. All includes in pico_c.h 
*
*/

#ifndef ADC_H
#define ADC_H

#include "pico_c.h"

#define ADC_CHANNEL 0
#define ADC_RANGE (1 << 12)
#define ADC_CONVERT (3.3 / (ADC_RANGE - 1))  // convert ADC value to voltage

float voltage_to_weight(double x);
double adcConvert();



#endif /* ADC_H */
/*** end of file ***/
