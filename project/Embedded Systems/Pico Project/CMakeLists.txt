cmake_minimum_required(VERSION 3.13)

include(pico_sdk_import.cmake)
set(PICO_BOARD pico_w)
project(capstone)

pico_sdk_init()

add_executable(capstonepico 
    pico_c.c
    pico_c.h
    network.c
    network.h
    adc.c
    adc.h
    led.c
    led.h
    functions.c
    functions.h
    )

pico_enable_stdio_usb(capstonepico 1)
pico_enable_stdio_uart(capstonepico 0)

target_compile_definitions(capstonepico PRIVATE
    WIFI_SSID=\"picoTestPrivate\"
    WIFI_PASSWORD=\"PicoT3st\"
    )


target_include_directories(capstonepico PRIVATE 
    ${CMAKE_CURRENT_LIST_DIR} 
    ${CMAKE_CURRENT_LIST_DIR}/.. # for our common lwipopts
    )

target_link_libraries(capstonepico 
    # pico_cyw43_arch_lwip_threadsafe_background
    pico_cyw43_arch_lwip_poll
    pico_lwip_mbedtls
    pico_mbedtls
    pico_stdlib
    hardware_adc
    )

pico_add_extra_outputs(capstonepico)

# Ignore warnings from lwip code
set_source_files_properties(
        ${PICO_LWIP_PATH}/src/apps/altcp_tls/altcp_tls_mbedtls.c
        PROPERTIES
        COMPILE_OPTIONS "-Wno-unused-result"
        )