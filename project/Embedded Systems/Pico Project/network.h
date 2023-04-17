#ifndef NETWORK_H
#define NETWORK_H

#include "pico/stdlib.h"

#include "lwip/pbuf.h"
#include "lwip/altcp_tcp.h"
#include "lwip/altcp_tls.h"
#include "lwip/dns.h"

#include <string.h>
#include <time.h>

//https://capstone770-team-10-default-rtdb.firebaseio.com/

#define TLS_CLIENT_TIMEOUT_SECS  15
#define TLS_CLIENT_SERVER "capstone770-team-10-default-rtdb.firebaseio.com"


void run_tls_client_test(void);

#endif /* NETWORK_H */
/*** end of file ***/

