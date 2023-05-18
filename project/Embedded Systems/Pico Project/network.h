/** @file network.h
* 
* @brief headers for network functions. all includes in pico_c.h 
*
*/

#ifndef NETWORK_H
#define NETWORK_H

#include "pico_c.h"

#define TLS_CLIENT_TIMEOUT_SECS  15
//#define TLS_CLIENT_SERVER "capstone770-team-10-default-rtdb.firebaseio.com"
//#define SERVER_URI "/api/pico/new/"
#define TLS_CLIENT_SERVER "capstone-spca-10.uk"
#define SERVER_URI "/api/dogs/"

int wifi_connect();
void sendRequest(char* uri, char* body);

#endif /* NETWORK_H */
/*** end of file ***/
