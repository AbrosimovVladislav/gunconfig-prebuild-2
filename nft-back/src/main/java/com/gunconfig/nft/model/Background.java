package com.gunconfig.nft.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Background {

  @Id
  private Long backgroundId;

  private String backgroundUrl;
  private String collection;
  @Enumerated(EnumType.STRING)
  private Rarity rarity;
  private Integer gunPlaceholderXCoordinate;
  private Integer gunPlaceholderYCoordinate;
  private Integer gunWidth;
  private Integer gunHeight;

}
