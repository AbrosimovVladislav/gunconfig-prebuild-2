package com.gunconfig.configurator.web.preparer;

import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.web.dto.GetGunPartsByParentAndTypeRequest;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class Preparer {

    public GetGunPartsByParentAndTypeRequest prepareRequest(Map<String, String> params) {
        String parentIdLine = params.get("parentId");
        Long parentId = null;
        if (parentIdLine != null) {
            parentId = Long.valueOf(params.get("parentId"));
        } else {
            throw new RuntimeException("There is no parentId param!!!");
        }

        String typeOfProductLine = params.get("typeOfProduct");
        Product.Type type = null;
        if (typeOfProductLine != null) {
            type = Product.Type.valueOf(typeOfProductLine);
        } else {
            throw new RuntimeException("There is no typeOfProduct param!!!");
        }

        String currentBuildIdsLine = params.get("currentBuildIds");
        List<Long> currentBuildIds = new ArrayList<>();
        if (currentBuildIdsLine != null) {
            currentBuildIds = Arrays.stream(currentBuildIdsLine.split(","))
                    .map(Long::valueOf).collect(Collectors.toList());
        } else {
            throw new RuntimeException("There is no currentBuildIds param!!!");
        }

        return GetGunPartsByParentAndTypeRequest.builder()
                .parentId(parentId)
                .typeOfProduct(type)
                .currentBuildIds(currentBuildIds)
                .build();
    }

}
