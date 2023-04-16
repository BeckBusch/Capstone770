#include <stdio.h>
#include "pico/stdlib.h"
#include "lwip/apps/sntp.h"
#include "lwip/err.h"
#include "lwip/sockets.h"
#include "lwip/sys.h"
#include "lwip/netdb.h"
#include "mbedtls/ssl.h"
#include "mbedtls/entropy.h"
#include "mbedtls/ctr_drbg.h"
#include "mbedtls/certs.h"

// Change these values as needed
const char* server_name = "example.com";
const char* server_port = "443";
const char* post_path = "/api/v1/data";
const char* request_body = "{\"key\":\"value\"}";

// Root CA certificate
const char* root_ca = "-----BEGIN CERTIFICATE-----\n"
"...YOUR ROOT CA CERTIFICATE HERE...\n"
"-----END CERTIFICATE-----\n";

static void https_post_request(void) {
    int ret;
    mbedtls_net_context server_fd;
    mbedtls_entropy_context entropy;
    mbedtls_ctr_drbg_context ctr_drbg;
    mbedtls_ssl_context ssl;
    mbedtls_ssl_config conf;
    mbedtls_x509_crt cacert;

    // Initialize mbedtls objects
    mbedtls_net_init(&server_fd);
    mbedtls_ssl_init(&ssl);
    mbedtls_ssl_config_init(&conf);
    mbedtls_x509_crt_init(&cacert);
    mbedtls_ctr_drbg_init(&ctr_drbg);
    mbedtls_entropy_init(&entropy);

    ret = mbedtls_ctr_drbg_seed(&ctr_drbg, mbedtls_entropy_func, &entropy, NULL, 0);
    if (ret != 0) {
        printf("mbedtls_ctr_drbg_seed returned %d\n", ret);
        goto exit;
    }

    // Load the CA root certificate
    ret = mbedtls_x509_crt_parse(&cacert, (const unsigned char*)root_ca, strlen(root_ca) + 1);
    if (ret != 0) {
        printf("mbedtls_x509_crt_parse returned %d\n", ret);
        goto exit;
    }

    // Configure SSL/TLS
    ret = mbedtls_ssl_config_defaults(&conf, MBEDTLS_SSL_IS_CLIENT, MBEDTLS_SSL_TRANSPORT_STREAM, MBEDTLS_SSL_PRESET_DEFAULT);
    if (ret != 0) {
        printf("mbedtls_ssl_config_defaults returned %d\n", ret);
        goto exit;
    }

    mbedtls_ssl_conf_authmode(&conf, MBEDTLS_SSL_VERIFY_REQUIRED);
    mbedtls_ssl_conf_ca_chain(&conf, &cacert, NULL);
    mbedtls_ssl_conf_rng(&conf, mbedtls_ctr_drbg_random, &ctr_drbg);
    mbedtls_ssl_conf_min_version(&conf, MBEDTLS_SSL_MAJOR_VERSION_3, MBEDTLS_SSL_MINOR_VERSION_3); // TLS 1.2

    ret = mbedtls_ssl_setup(&ssl, &conf);
    if (ret != 0) {
        printf("mbedtls_ssl_setup returned %d\n", ret);
        goto exit;
    }

    ret = mbedtls_ssl_set_hostname(&ssl, server_name);
    if (ret != 0) {
        printf("mbedtls_ssl_set_hostname returned %d\n", ret);
        goto exit;
    }

    ret = mbedtls_net_connect(&server_fd, server_name, server_port, MBEDTLS_NET_PROTO_TCP);
    if (ret != 0) {
        printf("mbedtls_net_connect returned %d\n", ret);
        goto exit;
    }

    mbedtls_ssl_set_bio(&ssl, &server_fd, mbedtls_net_send, mbedtls_net_recv, NULL);

    // Perform the SSL/TLS handshake
    while ((ret = mbedtls_ssl_handshake(&ssl)) != 0) {
        if (ret != MBEDTLS_ERR_SSL_WANT_READ && ret != MBEDTLS_ERR_SSL_WANT_WRITE) {
            printf("mbedtls_ssl_handshake returned %d\n", ret);
            goto exit;
        }
    }

    // Prepare the POST request
    char post_request[1024];
    snprintf(post_request, sizeof(post_request),
        "POST %s HTTP/1.1\r\n"
        "Host: %s\r\n"
        "Content-Type: application/json\r\n"
        "Content-Length: %zu\r\n\r\n%s",
        post_path, server_name, strlen(request_body), request_body);

    // Send the POST request
    size_t len = strlen(post_request);
    while ((ret = mbedtls_ssl_write(&ssl, (const unsigned char*)post_request, len)) <= 0) {
        if (ret != MBEDTLS_ERR_SSL_WANT_READ && ret != MBEDTLS_ERR_SSL_WANT_WRITE) {
            printf("mbedtls_ssl_write returned %d\n", ret);
            goto exit;
        }
    }

    // Read the HTTP response
    char response[1024];
    do {
        len = sizeof(response) - 1;
        memset(response, 0, sizeof(response));
        ret = mbedtls_ssl_read(&ssl, (unsigned char*)response, len);

        if (ret == MBEDTLS_ERR_SSL_WANT_READ || ret == MBEDTLS_ERR_SSL_WANT_WRITE) {
            continue;
        }

        if (ret <= 0) {
            printf("mbedtls_ssl_read returned %d\n", ret);
            break;
        }

        printf("HTTP response:\n%s\n", response);
    } while (1);
exit:
    // Clean up and close the connection
    mbedtls_ssl_close_notify(&ssl);
    mbedtls_net_free(&server_fd);
    mbedtls_x509_crt_free(&cacert);
    mbedtls_ssl_free(&ssl);
    mbedtls_ssl_config_free(&conf);
    mbedtls_ctr_drbg_free(&ctr_drbg);
    mbedtls_entropy_free(&entropy);
}

int main() {
    // Initialize the Raspberry Pi Pico
    stdio_init_all();
    // Connect to Wi-Fi and initialize the network stack

// Synchronize the device's time using SNTP (optional, but recommended for certificate validation)

    https_post_request();

    return 0;
}
/*

This code provides an example of how to send an HTTPS POST request using the `mbedtls` library on a Raspberry Pi Pico W. Please note that you'll need to add your Wi-Fi connection details and initialize the network stack accordingly. Additionally, synchronizing the device's time using SNTP is recommended for certificate validation.

You'll need to replace the `server_name`, `server_port`, `post_path`, `request_body`, and `root_ca` variables with the appropriate values for your use case.

*/