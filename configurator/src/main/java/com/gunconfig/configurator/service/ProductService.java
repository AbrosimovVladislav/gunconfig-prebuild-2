package com.gunconfig.configurator.service;

import com.gunconfig.configurator.repo.ProductRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

  private final ProductRepo productRepo;

}
