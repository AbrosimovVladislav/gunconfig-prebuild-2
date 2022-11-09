package com.gunconfig.nft.model;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Product {

  private Long productId;
  private String name;
  private String type;
}
