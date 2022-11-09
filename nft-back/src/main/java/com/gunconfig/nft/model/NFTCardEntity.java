package com.gunconfig.nft.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class NFTCardEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long nftCardId;
  private Long rootGunId;
  private String nftImageUrl;
  private Long buildId;

}
