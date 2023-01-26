package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.repo.GunPartRepo;
import com.gunconfig.configurator.repo.ProductRepo;
import com.gunconfig.configurator.web.dto.request.GetGunPartsByParentAndTypeRequest;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class GunPartService {

  private final GunPartRepo gunPartRepo;
  private final ProductRepo productRepo;

  public List<GunPart> findAll() {
    return gunPartRepo.findAll();
  }

  public GunPart save(GunPart gunPart) {
    Optional<GunPart> gunPartOpt = gunPartRepo.findByProduct(gunPart.getProduct());
    if (gunPartOpt.isPresent()) {
      return gunPartOpt.get();
    } else {
      Long newGunPartId = gunPartRepo.getMaxGunPartId() + 1L;
      gunPart.setGunPartId(newGunPartId);
      return gunPartRepo.save(gunPart);
    }
  }

  public GunPart saveOrUpdate(GunPart gunPart) {
    Optional<GunPart> gunPartOpt = gunPartRepo.findByProduct(gunPart.getProduct());
    if (gunPartOpt.isPresent()) {
      return gunPartRepo.save(gunPartOpt.get());
    } else {
      Long newGunPartId = gunPartRepo.getMaxGunPartId() + 1L;
      gunPart.setGunPartId(newGunPartId);
      return gunPartRepo.save(gunPart);
    }
  }

  /**
   * Get gun part by product id
   */
  public GunPart findByProductId(Long productId) {
    Product product = productRepo.findById(productId)
        .orElseThrow(() -> new RuntimeException(String.format(
            "There is no product with id %s", productId
        )));
    return gunPartRepo.findByProduct(product)
        .orElseThrow(() -> new RuntimeException(String.format(
            "There is no gun part with product %s", product
        )));
  }

  //ToDo refactor basic repo method for returning needed children, not full tree (https://app.clickup.com/t/33dx6te)
  public List<GunPart> getGunPartsByParentAndType(GetGunPartsByParentAndTypeRequest request) {
    GunPart parent = gunPartRepo.findById(request.getParentId())
        .orElseThrow(
            () -> new RuntimeException("There is no gun part with id: " + request.getParentId()));
    List<GunPart> children = parent.getChildren();
    List<GunPart> childrenOfNeededType = children.stream()
        .filter(child -> request.getProductType().equals(child.getProduct().getType()))
        .toList();
    return childrenOfNeededType;
  }
}
