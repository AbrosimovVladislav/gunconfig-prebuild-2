package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Long> {

}
