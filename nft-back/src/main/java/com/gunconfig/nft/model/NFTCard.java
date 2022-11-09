package com.gunconfig.nft.model;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class NFTCard {
  private Long nftCardId;
  private Product product;
  private String nftImageUrl;
  private Build build;
}
