package com.gunconfig.nft.repo;

import com.gunconfig.nft.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Long> {
}
