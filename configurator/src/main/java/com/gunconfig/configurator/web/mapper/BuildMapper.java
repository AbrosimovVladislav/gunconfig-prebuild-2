package com.gunconfig.configurator.web.mapper;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.SchemaNode;
import com.gunconfig.configurator.web.dto.request.BuildCreateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
@RequiredArgsConstructor
public class BuildMapper {

    private final ObjectMapper objectMapper;

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
}
