package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product, Long> {

    @Query(
            value = "SELECT p.product_id FROM product p ORDER BY product_id DESC LIMIT 1",
            nativeQuery = true)
    Long getMaxProductId();

    Optional<Product> findByName(String name);

}
