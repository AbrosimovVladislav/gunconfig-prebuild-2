package com.gunconfig.nft.model;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class NFTCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long nftCardId;
    private String name;
    private Long rootGunProductId;
    @ElementCollection
    private List<Long> propertiesIds;
    private String nftImageUrl;

}
