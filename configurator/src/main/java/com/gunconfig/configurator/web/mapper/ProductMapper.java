package com.gunconfig.configurator.web.mapper;

import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.web.dto.ProductDto;
import com.gunconfig.configurator.web.dto.request.CreateProductRequest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductMapper {

    public List<ProductDto> toDtos(List<Product> products) {
        return products.stream().map(this::toDto).toList();
    }

    public ProductDto toDto(Product product) {
        return ProductDto.builder()
                .productId(product.getProductId())
                .name(product.getName())
                .productImageUrl(product.getProductImageUrl())
                .description(product.getDescription())
                .type(product.getType().name())
                .build();
    }

    public Product fromRequestToEntity(CreateProductRequest request) {
        return new Product()
                .setName(request.getName())
                .setBrand(request.getBrand())
                .setType(Product.Type.valueOf(request.getType()))
                .setProductImageUrl(request.getProductImageUrl())
                .setDescription(request.getDescription());
    }
}
