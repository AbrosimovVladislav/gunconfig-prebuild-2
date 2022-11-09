package com.gunconfig.nft.service.client;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
@RequiredArgsConstructor
public class ConfiguratorClient {

  @Value("http://CONFIGURATOR")
  public String CONFIGURATOR_BASE_PATH;
  @Value("${configurator.test}")
  public String CONFIGURATOR_TEST_PATH;

  private final RestTemplate restTemplate;

  public String test(String testMessage) {
    String url = CONFIGURATOR_BASE_PATH + CONFIGURATOR_TEST_PATH + "/" + testMessage;
    ResponseEntity<String> response = restTemplate.exchange(
        url,
        HttpMethod.GET,
        new HttpEntity<>(null),
        new ParameterizedTypeReference<>() {
        }
    );
    return response.getBody();
  }

}
