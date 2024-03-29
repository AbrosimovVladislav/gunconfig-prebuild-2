package com.gunconfig.configurator.web.mapper;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.SchemaNode;
import com.gunconfig.configurator.service.ProductService;
import com.gunconfig.configurator.service.converter.SchemaNodeConverter;
import com.gunconfig.configurator.web.dto.BuildWithProductsDto;
import com.gunconfig.configurator.web.dto.request.BuildCreateRequest;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BuildMapper {

  private final ProductService productService;
  private final SchemaNodeConverter converter;

  /**
   * Convert base64code to schema node in string view
   **/
  public String fromBase64ToSchemaNode(String base64Code) {
    String codedSchema = new String(Base64.getDecoder().decode(base64Code));
    return codedSchema;
  }

  /**
   * Map request (SchemaNode and image) to Build
   **/
  public Build fromRequestToBuild(BuildCreateRequest request) {
    return new Build()
        .setSchema(request.getSchemaNode())
        .setBuildImageUrl(request.getBuildImageUrl());
  }

  /**
   * Map Build to BuildWithProductsDto response
   **/
  public BuildWithProductsDto fromEntityToBuildWithProductsDto(Build savedBuild) {
    List<Long> productIds = new ArrayList<>();
    SchemaNode schemaNode = converter.convertToEntityAttribute(savedBuild.getSchema());
    fromSchemaNodeToProductIds(schemaNode, productIds);

    return BuildWithProductsDto.builder()
        .buildId(savedBuild.getBuildId())
        .productIds(productIds)
        .schema(schemaNode)
        .buildImageUrl(savedBuild.getBuildImageUrl())
        .build();
  }

  private void fromSchemaNodeToProductIds(SchemaNode schema, List<Long> productIds) {
    productIds.add(productService.getProductIdByGunPartIds(schema.getId()));

    if (schema.getChildren() != null && !schema.getChildren().isEmpty()) {
      schema.getChildren().forEach(e -> fromSchemaNodeToProductIds(e, productIds));
    }
  }
}
