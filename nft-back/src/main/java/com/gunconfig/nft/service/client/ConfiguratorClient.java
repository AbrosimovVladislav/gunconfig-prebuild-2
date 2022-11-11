package com.gunconfig.nft.service.client;

import com.gunconfig.nft.model.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ConfiguratorClient {

  @Value("http://CONFIGURATOR")
  public String CONFIGURATOR_BASE_PATH;
  @Value("${configurator.product}")
  public String PRODUCT_PATH;
  @Value("${configurator.products}")
  public String PRODUCTS_PATH;

  private final RestTemplate restTemplate;

  public Product getProductById(Long rootGunProductId) {
    String url = CONFIGURATOR_BASE_PATH + PRODUCT_PATH + "/" + rootGunProductId;
    ResponseEntity<Product> response = restTemplate.exchange(
            url,
            HttpMethod.GET,
            new HttpEntity<>(null),
            new ParameterizedTypeReference<Product>() {
            }
    );
    return response.getBody();
  }

  public List<Product> getProductsByIds(List<Long> propertiesIds) {
    String url = CONFIGURATOR_BASE_PATH + PRODUCTS_PATH + "/" + propertiesIds;
    ResponseEntity<List<Product>> response = restTemplate.exchange(
            url,
            HttpMethod.GET,
            new HttpEntity<>(null),
            new ParameterizedTypeReference<List<Product>>() {
            }
    );
    return response.getBody();
  }
}
