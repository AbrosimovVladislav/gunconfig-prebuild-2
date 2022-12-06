package com.gunconfig.configurator.web.dto;

import com.gunconfig.configurator.model.SchemaNode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BuildWithProductsDto {
    private Long buildId;
    private List<Long> productIds;
    private SchemaNode schema;
    private String buildImageUrl;
}
