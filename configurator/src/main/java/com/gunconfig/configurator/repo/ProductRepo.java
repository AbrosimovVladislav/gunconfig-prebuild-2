package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product, Long> {

    @Query(
            value = "SELECT p.product_id FROM product p ORDER BY product_id DESC LIMIT 1",
            nativeQuery = true)
    Long getMaxProductId();

    Optional<Product> findByName(String name);

    @Query(
            value = "SELECT gp.product_id FROM gun_part gp WHERE gp.gun_part_id = :gunPartId",
            nativeQuery = true)
    Long getProductIdByGunPartId(@Param("gunPartId") Long gunPartId);

}
