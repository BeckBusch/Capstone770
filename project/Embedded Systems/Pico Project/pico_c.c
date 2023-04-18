/**
 * Capstone 770 Project
 * Team 10
 *
 * Editors: Beck Busch
 */

#include "network.h"

 // Includes
#include <stdio.h>
#include "hardware/adc.h"
#include "pico/stdlib.h"
#include "pico/cyw43_arch.h"


#define ADC_CHANNEL 0

// Code
int main() {
    // Code Init
    stdio_init_all();
    //ADC
    adc_init();
    adc_select_input(ADC_CHANNEL);
    // Wifi Init
    // Capstone wifi: "UoA-Capstone", "cap5Ton3"    Mobile wifi: "picoTestPrivate", "PicoT3st"
    if (cyw43_arch_init()) {
        printf("Wi-Fi init failed");
        return 1;
    }
    cyw43_arch_enable_sta_mode();

    while (cyw43_arch_wifi_connect_timeout_ms("UoA-Capstone", "cap5Ton3", CYW43_AUTH_WPA2_AES_PSK, 30000)) {
        printf("connection failed, retrying\n");
    }

    run_tls_client_test();
    sleep_ms(100);

    

    // Code Main 
    while (1) {

        /*
        //Wait Function conditions//
        1.  flag to check if weight measurement is needed
        2.  Sample until adc reading becomes stable, every .5s
        /////*/
        
        int weightReading = adcConvert();
        printf("Weight reading: %d\n", weightReading);



        ///////////////////////////
        cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 1);
        printf("LED ON!\n");
        sleep_ms(1000); // 0.5s delay

        cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 0);
        printf("LED OFF!\n");
        sleep_ms(1000); // 0.5s delay

    }
    cyw43_arch_deinit();
    return 0;
}

int adcConvert(){
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


    uint16_t reading = adc_read(); // read ADC value
    int scaleFactor = 163.84;
    
    int conversion= reading/scaleFactor; //which equates to 5kg

}