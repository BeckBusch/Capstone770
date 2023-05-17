/**
 * Capstone 770 Project
 * Team 10
 *
 * led.c
 * led functions
 */

#include "led.h"

// functions to enable LEDs
void enable_power_LED() {
    // POWER_LED -> GP16
    gpio_init(POWER_LED);               // initialize pin
    gpio_set_dir(POWER_LED, GPIO_OUT);  // set pin to output
    gpio_put(POWER_LED, 1);             // set LED to on
    printf("Power LED toggled\n");

}

void enable_wifi_LED() {
    // WIFI_LED -> GP17
    gpio_init(WIFI_LED);
    gpio_set_dir(WIFI_LED, GPIO_OUT);
    gpio_put(WIFI_LED, 1);     
    printf("Wi-Fi LED toggled\n");
}

void enable_tare_LED() {
    // TARE_LED -> GP19
    gpio_init(TARE_LED);
    gpio_set_dir(TARE_LED, GPIO_OUT);
    gpio_put(TARE_LED, 1);
    printf("Tare LED toggled\n");
}

void enable_stable_LED() {
    // STABLE_LED -> GP18
    gpio_init(STABLE_LED);
    gpio_set_dir(STABLE_LED, GPIO_OUT);
    gpio_put(STABLE_LED, 1);
    printf("Stable LED toggled\n");
}


// functions to disable LEDs
void disable_power_LED() {
    gpio_put(POWER_LED, 0);
    printf("Power LED disabled\n");
}

void disable_wifi_LED() {
    gpio_put(WIFI_LED, 0);
    printf("Wi-Fi LED disabled\n");
}

void disable_tare_LED() {
    gpio_put(TARE_LED, 0);
    printf("Tare LED disabled\n");
}

void disable_stable_LED() {
    gpio_put(STABLE_LED, 0);
    printf("Stable LED disabled\n");
}