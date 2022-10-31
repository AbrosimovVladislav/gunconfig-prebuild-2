package com.gunconfig.web.dto.configurator;

import com.gunconfig.model.GunPart;
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
  private List<GunPart> target;
  private List<GunPart> children;
}
