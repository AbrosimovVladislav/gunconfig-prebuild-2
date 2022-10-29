package com.gunconfig.service;

import com.gunconfig.model.Product;
import com.gunconfig.repo.ProductRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepo productRepo;

    public Product findById(Long id) {
        return productRepo.findById(id).orElseThrow(() ->
                new RuntimeException("There is no product with such id: " + id));
    }

}
