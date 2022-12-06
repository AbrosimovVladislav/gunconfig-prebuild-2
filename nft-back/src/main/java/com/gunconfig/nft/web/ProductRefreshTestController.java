package com.gunconfig.nft.web;

import com.gunconfig.nft.model.Product;
import com.gunconfig.nft.service.scheduler.ProductsRefresherScheduler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/product-refresh")
public class ProductRefreshTestController {

    private final ProductsRefresherScheduler productsRefresherScheduler;

    @GetMapping
    public List<Product> refreshProducts() {
        List<Product> products = productsRefresherScheduler.refreshProducts();
        return products;
    }

}
