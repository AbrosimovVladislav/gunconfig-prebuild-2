package com.gunconfig.configurator.model;

import com.gunconfig.configurator.service.converter.SchemaNodeConverter;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Build {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long buildId;

    @Convert(converter = SchemaNodeConverter.class)
    private SchemaNode schema;

    private String buildImageUrl;

}
