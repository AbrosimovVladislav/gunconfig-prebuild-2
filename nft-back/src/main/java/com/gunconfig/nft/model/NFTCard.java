package com.gunconfig.nft.model;

import com.gunconfig.querybuilder.BasicEntity;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class NFTCard implements BasicEntity {

  public static final String MINTING_PRICE = "mintingPrice";

  @Id
  private Long nftCardId;
  private String name;
  private String collection;
  private Double mintingPrice;
  private String nftImageUrl;
  private String mintingDate;
  private String firstOwner;
  private String rarity;

  @Enumerated(EnumType.STRING)
  private Status status;

  @ManyToMany
  @JoinColumn(name = "product_id")
  private List<Product> products;

  private Long buildId;
  private Long rootGunId;
  private String rootGunDescription;
  private String rootGunBrand;

  @ManyToOne
  @JoinColumn(name = "background_id")
  private Background background;

  public enum Status {
    DRAFT, MINTED
  }

}
