package com.gunconfig.configurator.service.converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gunconfig.configurator.model.SchemaNode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Component
@Converter
@RequiredArgsConstructor
public class SchemaNodeConverter implements AttributeConverter<SchemaNode, String> {

    private final ObjectMapper objectMapper;

    @Override
    public String convertToDatabaseColumn(SchemaNode schemaNode) {
        try {
            return objectMapper.writeValueAsString(schemaNode);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public SchemaNode convertToEntityAttribute(String s) {
        try {
            return objectMapper.readValue(s, SchemaNode.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
