package com.gunconfig.configurator.service.converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gunconfig.configurator.model.SchemaNode;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Converter
@RequiredArgsConstructor
public class SchemaNodeConverter implements AttributeConverter<SchemaNode, String> {

  private final ObjectMapper objectMapper;

  /**
   * Convert SchemaNode to string view of Schema
   **/
  @Override
  public String convertToDatabaseColumn(SchemaNode schemaNode) {
    try {
      return objectMapper.writeValueAsString(schemaNode);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
  }

  /**
   * Convert string view of Schema to SchemaNode
   **/
  @Override
  public SchemaNode convertToEntityAttribute(String s) {
    try {
      return objectMapper.readValue(s, SchemaNode.class);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
  }
}
