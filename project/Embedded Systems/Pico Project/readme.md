# Template project for C code on PICO W
## File Descriptions

**pico_c.c**<br>
This is the main c code file that runs on our board.

**CMakeLists.txt**<br>
This tells cmake how to structure the build and what needs to be included. This file needs to be edited when adding different libraries and functionality.

**generateBuild.sh**<br>
This is a bash file that rebuilds the sdk, builds the c code, and programs the board by copying the file over. Make sure that the board has been plugged in with the button held to put it in programming mode before running this file.

**lwipopts.h & picp_sdk_import.cmake**<br>
These are required files for compiliation and can't be changed.