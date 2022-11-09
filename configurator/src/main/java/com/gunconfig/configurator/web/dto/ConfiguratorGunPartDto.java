package com.gunconfig.configurator.web.dto;

import com.gunconfig.configurator.model.GunPart;
import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ConfiguratorGunPartDto {

  private Long gunPartId;
  private String name;
  private String image;
  private String type;
  private List<GunPart> children;
}
