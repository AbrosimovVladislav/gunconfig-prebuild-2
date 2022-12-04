package com.gunconfig.nft.model;

import com.gunconfig.querybuilder.BasicEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class NFTCard implements BasicEntity {

    public static final String MINTING_PRICE = "mintingPrice";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long nftCardId;
    private String name;
    private String collection;
    private Double mintingPrice;
    private String nftImageUrl;
    private String mintingDate;
    private String firstOwner;

    @Enumerated(EnumType.STRING)
    private Rarity rarity;

    @ManyToMany
    @JoinColumn(name = "product_id")
    private List<Product> products;

    private Long buildId;
    private Long rootGunId;
    private String rootGunDescription;
    private String rootGunBrand;
    private String rootGunCaliber;

    public enum Rarity {
        USUAL, UNUSUAL, RARE, EPIC, LEGENDARY
    }

}
