package com.gunconfig.nft.service.client;

import com.gunconfig.nft.model.Product;
import com.gunconfig.nft.web.dto.BuildWithProductsDto;
import com.gunconfig.nft.web.dto.request.BuildCreateRequest;
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
    @Value("${configurator.create-build}")
    public String CREATE_BUILD_PATH;
    @Value("${configurator.build-by-schema}")
    public String BUILD_BY_SCHEMA_PATH;
    @Value("${configurator.products}")
    public String PRODUCTS_PATH;
    @Value("${configurator.products-ids}")
    public String PRODUCTS_IDS_PATH;

    private final RestTemplate restTemplate;

    public Long getBuildIdBySchema(String base64CodeSchema) {
        String url = CONFIGURATOR_BASE_PATH + BUILD_BY_SCHEMA_PATH + "/" + base64CodeSchema;
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
        String url = CONFIGURATOR_BASE_PATH + CREATE_BUILD_PATH;
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

    public List<Long> getAllProductsIds() {
        String url = CONFIGURATOR_BASE_PATH + PRODUCTS_IDS_PATH;
        ResponseEntity<List<Long>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                new HttpEntity<>(null),
                new ParameterizedTypeReference<List<Long>>() {
                }
        );
        return response.getBody();
    }
}
