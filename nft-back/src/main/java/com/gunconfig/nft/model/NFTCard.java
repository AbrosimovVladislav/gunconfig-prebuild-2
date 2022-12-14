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
    private String rootGunCaliber;

    public enum Status {
        DRAFT, MINTED
    }

    public enum Rarity {
        USUAL, UNUSUAL, RARE, EPIC, LEGENDARY
    }

}
