package com.gunconfig.configurator.web.dto;

import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductDto {
    private Long productId;
    private String name;
    private String productImageUrl;
    private String description;
    private String type;
    private boolean incompatible;
    private List<Long> incompatibleIds;

}
