/**
 * Capstone 770 Project
 * Team 10
 *
 * adc.c
 * ADC and data analysis functions
 */

#include "adc.h"



double adcConvert() {

  /*
        Round 2 Notes
        ADC range is 0-3.3V, 12 bit.
        This means that each count is 8.0566404625e-4V

        Because our range is from 0.2-1.89 this limits our adc count from
        248-2345,           Voltage/voltage per count = count.
        ADC range is now 2097 counts and thus, 83.88 counts per kg

        Scalefactor is then 83.88 but you need to take in the initial 248 counts which would mean that
        248/83.88= 2.956 is the offset.
        the equation would then become 
        conversion = reading/scalefactor - offset.

        Given that the voltage does not exceed 1.89V
    
    */

     /*
        Round 3 Notes
        ADC range is 0-3.3V, 12 bit.
        This means that each count is 8.0566404625e-4V

        Because our range is from 1.65v to 0.24v(0-25kg) this limits our adc count from
        2048-298,           Voltage/voltage per count = count.
        ADC range is now 1750 counts and thus, 70 counts per kg

        2048 = 0kg, 1978 = 1kg, 1908 = 2kg
        Given that the voltage does not exceed the lower or upper bounds

    
    */
    double conversion=0;
    double reading = adc_read(); // read ADC value
    

    if ((reading>2048) || (reading<298))
    {
        printf("Faulty reading\n");
    }

    else{
        // equation  = abs(x-2048)/70 = weight
        conversion = abs(reading - 2048) / 70  ;


    }
    
    printf("adc reading check: %f\n", reading); //PRINTER

    return conversion;
}