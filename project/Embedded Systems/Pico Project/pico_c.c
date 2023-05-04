/**
 * Capstone 770 Project
 * Team 10
 * 
 * pico_c.c
 * Main code, fsm
 */

#include "pico_c.h"
#include "network.h"
#include "adc.h"

char request_body[64];

// Code
int main() {
    // Code Init
    stdio_init_all();
    if (cyw43_arch_init()) {
        printf("Wi-Fi init failed");
        return 1;
    }

    adc_init();
    adc_select_input(ADC_CHANNEL);

    cyw43_arch_enable_sta_mode();

    //wifi_connect();
    
    //sprintf(request_body, "{\"%s\":\"%d\"}", "Weight", 15);
    //sendRequest("/Measurements/Dog1.json", request_body);

    sleep_ms(100);

    // Code Main 
    while (1) {
        /*
        //Wait Function conditions//
        1.  flag to check if weight measurement is needed
        2.  Sample until adc reading becomes stable, every .5s
        /////*/

        double weightReading = adcConvert();
        printf("Weight reading: %f\n", weightReading);

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

