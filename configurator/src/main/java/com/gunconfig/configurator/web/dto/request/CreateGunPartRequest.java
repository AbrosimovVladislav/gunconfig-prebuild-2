package com.gunconfig.configurator.web.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateGunPartRequest {

    private String name;
    private String brand;
    private String type;
    private String description;
    private Integer width;
    private String thumbnailImage;
    private String gunPartImageUrl;
    private String productImageUrl;

}
