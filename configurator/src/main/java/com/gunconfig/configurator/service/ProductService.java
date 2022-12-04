package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.repo.ProductRepo;
import com.gunconfig.configurator.web.dto.request.CreateProductRequest;
import com.gunconfig.configurator.web.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepo productRepo;
    private final ProductMapper productMapper;

    public Product getById(Long productId) {
        return productRepo.getById(productId);
    }

    public List<Product> getByIds(String productsIds) {
        List<Long> ids = Arrays.stream(productsIds.split(",")).map(Long::valueOf).toList();
        return productRepo.findAllById(ids);
    }

    public Product save(CreateProductRequest request) {
        Optional<Product> productOpt = productRepo.findByName(request.getName());
        if (productOpt.isEmpty()) {
            Product product = productMapper.fromRequestToEntity(request);
            Product savedProduct = save(product);
            return savedProduct;
        } else {
            return productOpt.get();
        }
    }

    public Product save(Product product) {
        Optional<Product> productOpt = productRepo.findByName(product.getName());
        if (productOpt.isEmpty()) {
            Long newProductId = productRepo.getMaxProductId() + 1L;
            product.setProductId(newProductId);
            return productRepo.save(product);
        } else {
            return productOpt.get();
        }
    }
}
