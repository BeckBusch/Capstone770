#ifndef NETWORK_H
#define NETWORK_H

#include "pico/stdlib.h"
#include "pico/cyw43_arch.h"
#include "lwip/pbuf.h"
#include "lwip/altcp_tcp.h"
#include "lwip/altcp_tls.h"
#include "lwip/dns.h"

#include <string.h>
#include <time.h>


#define TLS_CLIENT_SERVER        "worldtimeapi.org"
#define TLS_CLIENT_HTTP_REQUEST  "GET /api/ip HTTP/1.1\r\n" \
                                 "Host: " TLS_CLIENT_SERVER "\r\n" \
                                 "Connection: close\r\n" \
                                 "\r\n"
#define TLS_CLIENT_TIMEOUT_SECS  15


void run_tls_client_test(void);

#endif /* NETWORK_H */

/*** end of file ***/