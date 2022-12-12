package com.gunconfig.configurator.web.dto;

import com.gunconfig.configurator.model.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ShortGunPartDto {

    private Long id;
    private String name;
    private String type;
    private String image;
    private Integer width;

    private Double x;
    private Double y;

    private String thumbnailImage;
    private boolean incompatible;
    private List<Long> incompatibleIds;

}
