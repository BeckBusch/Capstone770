cmake_minimum_required(VERSION 3.13)

include(pico_sdk_import.cmake)

project(capstone)

pico_sdk_init()

add_executable(capstonepico pico_c.c)

pico_enable_stdio_usb(capstonepico 1)
pico_enable_stdio_uart(capstonepico 0)

pico_add_extra_outputs(capstonepico)

target_link_libraries(capstonepico 
                        pico_stdlib 
                        pico_cyw43_arch_none
                        pico_cyw43_arch_lwip_threadsafe_background
                        )

target_include_directories(capstonepico PRIVATE ${CMAKE_CURRENT_LIST_DIR} )