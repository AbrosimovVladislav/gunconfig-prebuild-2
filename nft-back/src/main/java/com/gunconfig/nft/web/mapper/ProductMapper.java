package com.gunconfig.nft.web.mapper;

import com.gunconfig.nft.model.Product;
import com.gunconfig.nft.web.dto.ProductDto;
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
                .brand(product.getBrand())
                .type(product.getType().name())
                .build();
    }

}
