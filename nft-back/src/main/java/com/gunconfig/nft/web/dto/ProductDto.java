package com.gunconfig.nft.web.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductDto {

    private Long productId;
    private String name;
    private String productImageUrl;
    private String description;
    private String brand;
    private String type;
}
