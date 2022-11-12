package com.gunconfig.configurator.web.dto;

import com.gunconfig.configurator.model.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ShortGunPartDto {

    private Long gunPartId;
    private Long productId;
    private String name;
    private Product.Type type;
    private String thumbnailImage;
    private boolean incompatible;
    private List<Long> incompatibleIds;

}
