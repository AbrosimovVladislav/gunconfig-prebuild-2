package com.gunconfig.configurator.web.dto.request;

import com.gunconfig.configurator.model.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class GetGunPartsByParentAndTypeRequest {

    private Long parentId;
    private Product.Type productType;
    private List<Long> currentBuildIds;

}
