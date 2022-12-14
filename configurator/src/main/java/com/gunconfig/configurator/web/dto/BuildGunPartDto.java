package com.gunconfig.configurator.web.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class BuildGunPartDto {
    private Long id;

    private Long productId;
    private String name;
    private String productImageUrl;
    private String description;
    private String brand;
    private String type;

    private Double x;
    private Double y;

    private String thumbnailImage;
    private String image;
    private Integer width;
    private List<BuildGunPartDto> children;
}
