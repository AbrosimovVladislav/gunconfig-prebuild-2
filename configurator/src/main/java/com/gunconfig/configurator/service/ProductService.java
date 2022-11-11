package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.repo.ProductRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepo productRepo;

    public Product getById(Long productId) {
        return productRepo.getById(productId);
    }

    public List<Product> getByIds(String productsIds) {
        List<Long> ids = Arrays.stream(productsIds.split(",")).map(Long::valueOf).toList();
        return productRepo.findAllById(ids);
    }
}
