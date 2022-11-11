package com.gunconfig.configurator.web.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GunPartDto {

    private Long gunPartId;
    private Long productId;
    private String productName;
    private String productType;
    private String gunPartImageUrl;
    private Integer x;
    private Integer y;
    private Integer width;

}
