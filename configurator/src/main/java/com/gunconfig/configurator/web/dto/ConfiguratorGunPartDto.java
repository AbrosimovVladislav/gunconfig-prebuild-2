package com.gunconfig.configurator.web.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ConfiguratorGunPartDto {

  private Long gunPartId;
  private String name;
  private String image;
  private String type;
}
