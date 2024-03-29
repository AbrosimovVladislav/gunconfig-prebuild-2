package com.gunconfig.configurator.web.dto.request;

import com.gunconfig.configurator.model.SchemaNode;
import lombok.Data;

@Data
public class BuildCreateRequest {

    private String schemaNode;
    private String buildImageUrl;
    private String base64Code;

}
