package com.gunconfig.nft.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Product {

    private Long productId;
    private String name;
    private String productImageUrl;
    private String description;
    private String type;
}
