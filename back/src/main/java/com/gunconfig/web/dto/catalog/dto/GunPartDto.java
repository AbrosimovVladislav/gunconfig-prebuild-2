package com.gunconfig.web.dto.catalog.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GunPartDto {

    private Long gunPartId;
    private Long productId;
    private String productName;
    private String productType;
    private String imageUrl;

}
