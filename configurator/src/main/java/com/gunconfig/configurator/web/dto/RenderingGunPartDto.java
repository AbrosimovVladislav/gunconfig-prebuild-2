package com.gunconfig.configurator.web.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RenderingGunPartDto {

    private Long gunPartId;
    private Long productId;
    private String productName;
    private String productType;
    private String gunPartImageUrl;
    private Double x;
    private Double y;
    private Integer width;

}
