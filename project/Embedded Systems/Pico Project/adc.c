/**
 * Capstone 770 Project
 * Team 10
 *
 * adc.c
 * ADC and data analysis functions
 */

#include "adc.h"



double adcConvert() {
    //Notes 
    //ADC accepts voltages from 0 -3.3, and is 12 bit, 2^12 = 4096
    //Each voltage count =3.3/2^12, vCount = 8.05e-4 V per adc count.

    //In practices we want 0-25kg with steps of 0.25 kg as per project proposal,100 counts
    //
    //scale factor = 4096/100 = 40.96 counts per 0.25kg or 163.84 counts per 1kg.


    //eg 4.25kg dog,
    // 0.033V vs per 0.25kg 
    // 0.033 * (4.25/0.25)= 0.561 V sent from analogue to pin
    //  0.561/ vCount=696 adc count.
    // 696/scalefactor = 4.248kg = close enough?


    int reading = adc_read(); // read ADC value
    double scaleFactor = 163.84;
    printf("check: %d", reading); //PRINTER

    double conversion = (double)reading / scaleFactor; //which equates to 5kg

    return conversion;
}