package com.gunconfig.configurator.web.mapper;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.SchemaNode;
import com.gunconfig.configurator.service.ProductService;
import com.gunconfig.configurator.web.dto.BuildWithProductsDto;
import com.gunconfig.configurator.web.dto.request.BuildCreateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Component
@RequiredArgsConstructor
public class BuildMapper {

    private final ObjectMapper objectMapper;
    private final ProductService productService;

    public SchemaNode fromBase64ToSchemaNode(String base64Code) {
        try {
            String codedSchema = new String(Base64.getDecoder().decode(base64Code));
            SchemaNode schema = objectMapper.readValue(codedSchema, SchemaNode.class);
            return schema;
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    public Build fromRequestToBuild(BuildCreateRequest request) {
        return new Build()
                .setSchema(request.getSchemaNode())
                .setBuildImageUrl(request.getBuildImageUrl());
    }

    public Build fromImageAndCodeToBuild(String image, String code) {
        return new Build()
                .setSchema(fromBase64ToSchemaNode(code))
                .setBuildImageUrl(image);
    }

    public BuildWithProductsDto fromEntityToBuildWithProductsDto(Build savedBuild) {
        List<Long> productIds = new ArrayList<>();
        fromSchemaNodeToProductIds(savedBuild.getSchema(), productIds);

        return BuildWithProductsDto.builder()
                .buildId(savedBuild.getBuildId())
                .productIds(productIds)
                .schema(savedBuild.getSchema())
                .buildImageUrl(savedBuild.getBuildImageUrl())
                .build();
    }

    private void fromSchemaNodeToProductIds(SchemaNode schema, List<Long> productIds) {
        productIds.add(productService.getProductIdByGunPartIds(schema.getId()));

        if (schema.getChildren() != null && !schema.getChildren().isEmpty()) {
            schema.getChildren().forEach(e -> fromSchemaNodeToProductIds(e,productIds));
        }
    }
}