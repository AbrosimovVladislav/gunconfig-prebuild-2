package com.gunconfig.configurator.web.dto;

import com.gunconfig.configurator.model.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ShortGunPartDto {

    private Long gunPartId;
    private Product product;
    private String thumbnailImage;
    private String image;
    private Integer width;
    private boolean incompatible;
    private List<Long> incompatibleIds;

}
