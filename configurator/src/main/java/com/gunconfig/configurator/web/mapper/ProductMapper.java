package com.gunconfig.configurator.web.mapper;

import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.web.dto.ProductDto;
import com.gunconfig.configurator.web.dto.request.CreateProductRequest;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

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

  public List<ProductDto> fromGunPartsToProductDtos(List<GunPart> gunParts) {
    return gunParts.stream().map(this::fromGunPartToProductDto).toList();
  }

  public ProductDto fromGunPartToProductDto(GunPart gunPart) {
    List<Long> incompatibleIds = new ArrayList<>();
    List<GunPart> incompatibles = gunPart.getIncompatibles();
    if (incompatibles != null && !incompatibles.isEmpty()) {
      incompatibleIds = gunPart.getIncompatibles().stream().map(GunPart::getGunPartId).toList();
    }

    return ProductDto.builder()
        .productId(gunPart.getProduct().getProductId())
        .name(gunPart.getProduct().getName())
        .productImageUrl(gunPart.getProduct().getProductImageUrl())
        .description(gunPart.getProduct().getDescription())
        .type(gunPart.getProduct().getType().toString())
        .incompatibleIds(incompatibleIds)
        .build();
  }
}
