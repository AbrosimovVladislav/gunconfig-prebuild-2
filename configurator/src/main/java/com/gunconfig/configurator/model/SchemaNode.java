package com.gunconfig.configurator.model;

import lombok.Data;

import java.util.List;

@Data
public class SchemaNode {
    private Long id;
    private List<SchemaNode> children;
}
