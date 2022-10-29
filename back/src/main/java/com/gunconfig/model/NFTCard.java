package com.gunconfig.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class NFTCard {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long nftCardId;

  @ManyToOne
  @JoinColumn(name = "product_id")
  private Product rootGun;
  private String nftName;
  private String nftImageUrl;
  @OneToOne
  @JoinColumn(name = "build_id")
  private Build build;

}
