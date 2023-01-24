package com.gunconfig.nft.service.client;

import com.gunconfig.nft.model.Product;
import com.gunconfig.nft.web.dto.BuildWithProductsDto;
import com.gunconfig.nft.web.dto.request.BuildCreateRequest;
import java.util.List;
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
  public String CONFIGURATOR_SERVICE;

  @Value("${configurator.build-controller.build-by-base-64-code}")
  public String BUILD_ID_BY_BASE_64_CODE;

  @Value("${configurator.create-build}")
  public String CREATE_BUILD_PATH;
  @Value("${configurator.products}")
  public String PRODUCTS_PATH;
  @Value("${configurator.products-ids}")
  public String PRODUCTS_IDS_PATH;
  @Value("${configurator.base64code-by-build-id}")
  public String BASE64CODE_BY_BUILD_ID;

  private final RestTemplate restTemplate;

  public Long getBuildIdByBase64Code(String base64Code) {
    String url = CONFIGURATOR_SERVICE + BUILD_ID_BY_BASE_64_CODE + base64Code;
    ResponseEntity<Long> response = restTemplate.exchange(
        url,
        HttpMethod.GET,
        new HttpEntity<>(null),
        new ParameterizedTypeReference<Long>() {
        }
    );
    return response.getBody();
  }

  public BuildWithProductsDto createBuild(BuildCreateRequest request) {
    String url = CONFIGURATOR_SERVICE + CREATE_BUILD_PATH;
    ResponseEntity<BuildWithProductsDto> response = restTemplate.exchange(
        url,
        HttpMethod.POST,
        new HttpEntity<>(request),
        new ParameterizedTypeReference<>() {
        }
    );
    return response.getBody();
  }

  public List<Product> getProductsByIds(List<Long> propertiesIds) {
    String url = CONFIGURATOR_SERVICE + PRODUCTS_PATH + "/" + propertiesIds;
    ResponseEntity<List<Product>> response = restTemplate.exchange(
        url,
        HttpMethod.GET,
        new HttpEntity<>(null),
        new ParameterizedTypeReference<List<Product>>() {
        }
    );
    return response.getBody();
  }

  public List<Long> getAllProductsIds() {
    String url = CONFIGURATOR_SERVICE + PRODUCTS_IDS_PATH;
    ResponseEntity<List<Long>> response = restTemplate.exchange(
        url,
        HttpMethod.GET,
        new HttpEntity<>(null),
        new ParameterizedTypeReference<List<Long>>() {
        }
    );
    return response.getBody();
  }

  public String getBase64CodeByBuildId(Long buildId) {
    String url = CONFIGURATOR_SERVICE + BASE64CODE_BY_BUILD_ID + buildId;
    ResponseEntity<String> response = restTemplate.exchange(
        url,
        HttpMethod.GET,
        new HttpEntity<>(null),
        new ParameterizedTypeReference<String>() {
        }
    );
    return response.getBody();
  }
}
