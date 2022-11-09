package com.gunconfig.nft.model;

import java.util.List;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Build {

  private Long buildId;
  private GunPart rootGunPart;
  private List<GunPart> gunParts;
  private String buildImageUrl;
}
