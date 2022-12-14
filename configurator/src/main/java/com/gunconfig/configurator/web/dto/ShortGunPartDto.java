package com.gunconfig.configurator.web.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ShortGunPartDto {

    private Long id;
    private String name;
    private String image;
    private String type;

    private Double x;
    private Double y;
    private Integer width;

    private String brand;
    private String description;
    private String thumbnailImage;

    private boolean incompatible;
    private List<Long> incompatibleIds;

}
