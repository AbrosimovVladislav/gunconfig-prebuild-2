package com.gunconfig.configurator.web;

import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.service.ProductService;
import com.gunconfig.configurator.web.dto.ProductDto;
import com.gunconfig.configurator.web.dto.request.CreateProductRequest;
import com.gunconfig.configurator.web.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/product")
public class ProductController {

    private final ProductService productService;
    private final ProductMapper productMapper;

    @CrossOrigin
    @PostMapping
    public ProductDto create(@RequestBody CreateProductRequest request) {
        Product savedProduct = productService.save(request);
        return productMapper.toDto(savedProduct);
    }

    @GetMapping(value = "/{productId}")
    public ProductDto getProductById(@PathVariable Long productId) {
        Product product = productService.getById(productId);
        ProductDto dto = productMapper.toDto(product);
        return dto;
    }

    @GetMapping(value = "/batch/{productsIds}")
    public List<ProductDto> getProductsByIds(@PathVariable String productsIds) {
        List<Product> products = productService.getByIds(productsIds);
        List<ProductDto> dtos = productMapper.toDtos(products);
        return dtos;
    }

}
