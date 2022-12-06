package com.gunconfig.nft.service;

import com.gunconfig.nft.model.Product;
import com.gunconfig.nft.repo.ProductRepo;
import com.gunconfig.nft.service.client.ConfiguratorClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepo productRepo;
    private final ConfiguratorClient configuratorClient;

    public Product findById(Long id) {
        return productRepo.findById(id).orElseThrow(
                () -> new RuntimeException("There is no product with id: " + id)
        );
    }

    //ToDo to refactor, make batch read here, do not make so many calls
    public List<Product> findByIds(List<Long> productIds) {
        return productIds.stream()
                .map(productRepo::findById)
                .filter(Optional::isPresent)
                .map(Optional::get)
                .toList();
    }

    public List<Product> refreshProducts() {
        List<Long> products = configuratorClient.getAllProductsIds();
        List<Long> missingProductsIds = products.stream()
                .filter(id -> productRepo.findById(id).isEmpty())
                .toList();
        if (missingProductsIds.size() <= 0) {
            return Collections.emptyList();
        }
        List<Product> missingProducts = configuratorClient.getProductsByIds(missingProductsIds);
        return productRepo.saveAll(missingProducts);
    }
}
