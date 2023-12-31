/**
 * Capstone 770 Project
 * Team 10
 *
 * adc.c
 * ADC and data analysis functions
 * Improved version with a linear equation to calculate the weights from converted ADC data
 */

#include "adc.h"

float voltage_to_weight(double x) {
    float y = 0.0;
    // y = (1.66213 - x) / 0.0554958f;     // linear equation based on observed relationship between voltage and weight
    y = (1.6 - x) / 0.055086f;      // accounts for 1-1.6kg offset 
    return y;
}

// float voltage_to_weight(double x) {
//     float y = 0.0;

// }


double adcConvert() {
     /*
        Round 3 Notes
        ADC range is 0-3.3V, 12 bit.
        This means that each count is 8.0566404625e-4V

        Because our range is from 1.65v to 0.24v(0-25kg) this limits our adc count from
        2048-298,           Voltage/voltage per count = count.
        ADC range is now 1750 counts and thus, 70 counts per kg

        2048 = 0kg, 1978 = 1kg, 1908 = 2kg
        Given that the voltage does not exceed the lower or upper bounds
        1930 -210
    */
    // double conversion=0;
    // double reading = adc_read(); // read ADC value
   
    // if (reading>1930){    // lowest seen is 210 for 25kg; highest vlaue seen is 1916
    //     printf("Hit maximum allocated weight");
    //     conversion = 0.0;
    // }
    // else if(reading<210){
    //     printf("Hit minimum allocated weight");
    //     conversion = 25.0;
    // }


    // else{
    //     conversion = abs(reading - 2048) / 70.0f;     // old values
    //     // conversion = abs(reading - 1930) / 68.8f;
    // }


    uint32_t adc_raw;
    double converted_adc;
    double output_result;

    adc_raw = adc_read();   // read the raw voltage from ADC
    converted_adc = adc_raw * ADC_CONVERT;
    printf("%.2f\n", adc_raw * ADC_CONVERT);    // print to terminal


    // conversion = abs(reading - 2048) / 70.0f; 
    // printf("adc reading check: %f\n", reading); //PRINTER

    output_result = voltage_to_weight(converted_adc);
    // output_result = converted_adc;


    return output_result;
}