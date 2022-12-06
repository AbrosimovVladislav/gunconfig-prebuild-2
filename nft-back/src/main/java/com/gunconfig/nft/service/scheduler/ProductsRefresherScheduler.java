package com.gunconfig.nft.service.scheduler;

import com.gunconfig.nft.model.Product;
import com.gunconfig.nft.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ProductsRefresherScheduler {

  private final ProductService productService;

  @Scheduled(cron = "0 0 */24 * * *") // every 24 hours
  public List<Product> refreshProducts() {
    List<Product> refreshed = productService.refreshProducts();
    return refreshed;
  }

}
