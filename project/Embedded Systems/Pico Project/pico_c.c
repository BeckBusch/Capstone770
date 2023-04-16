/**
 * Capstone 770 Project
 * Team 10
 *
 * Editors: Beck Busch
 */

#include "network.h"

 // Includes
#include <stdio.h>
#include "pico/stdlib.h"
#include "pico/cyw43_arch.h"

// Code
int main() {
    // Code Init
    stdio_init_all();

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

