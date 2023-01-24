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
    private Long buildId;

    @Column(length = 240000)
    private String schema;

    private String buildImageUrl;

}
