package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.repo.ProductRepo;
import com.gunconfig.configurator.web.dto.ProductDto;
import com.gunconfig.configurator.web.dto.request.CreateProductRequest;
import com.gunconfig.configurator.web.mapper.ProductMapper;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

  private final ProductRepo productRepo;
  private final ProductMapper productMapper;

  public List<ProductDto> checkOnIncompatible(List<ProductDto> productDtos,
      List<Long> currentBuildIds) {
    productDtos.forEach(productDto -> {
      List<Long> incompatibleIds = productDto.getIncompatibleIds();
      currentBuildIds.stream()
          .filter(incompatibleIds::contains)
          .findAny().ifPresent(e -> productDto.setIncompatible(true));
    });

    return productDtos;
  }

  public Product getById(Long productId) {
    return productRepo.getById(productId);
  }

  public List<Product> getByIds(String productsIds) {
    productsIds = productsIds.replaceAll("\\[", "");
    productsIds = productsIds.replaceAll("]", "");
    productsIds = productsIds.replaceAll(" ", "");
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

  public Long getProductIdByGunPartIds(Long gunPartId) {
    return productRepo.getProductIdByGunPartId(gunPartId);
  }

  public List<Long> getProductsIds() {
    List<Long> productsIds = productRepo.getProductsIds();
    return productsIds;
  }
}
