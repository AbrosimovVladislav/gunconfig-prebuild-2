package com.gunconfig.nft.service;

import com.gunconfig.nft.model.Product;
import com.gunconfig.nft.repo.ProductRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepo productRepo;

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
}
