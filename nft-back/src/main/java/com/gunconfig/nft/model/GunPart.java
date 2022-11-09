package com.gunconfig.nft.model;

import java.util.List;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class GunPart {

  private Long gunPartId;
  private Product product;
  private String image;
  private List<GunPart> children;

}
