package com.gunconfig.configurator.web.dto;

import com.gunconfig.configurator.model.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class GetGunPartsByParentAndTypeRequest {

    private Long parentId;
    private Product.Type typeOfProduct;
    private List<Long> currentBuildIds;

}
