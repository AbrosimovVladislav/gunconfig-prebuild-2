package com.gunconfig.web.dto.catalog;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ShortElementDto {

    private Long elementId;
    private Long productId;
    private String productName;
    private String productType;
    private String imageUrl;


}
