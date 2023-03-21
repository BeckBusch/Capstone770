/**
 * Capstone 770 Project
 * Team 10
 *
 * Editors: Beck Busch
 */

// Includes
#include <stdio.h>
#include "pico/stdlib.h"
#include "pico/cyw43_arch.h"

// Code
int main(){
    // Code Init
    stdio_init_all(); 

    if (cyw43_arch_init()) {
        printf("Wi-Fi init failed");
        return -1;
    }

    // Code Main 
    while(1){
        cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 1);
        printf("LED ON!\n");
        sleep_ms(1000); // 0.5s delay

        cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 0);
        printf("LED OFF!\n");
        sleep_ms(1000); // 0.5s delay
    }

    return 0;
}