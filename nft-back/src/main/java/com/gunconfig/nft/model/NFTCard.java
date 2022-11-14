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
    private String collection;
    private Double mintingPrice;
    @Enumerated(EnumType.STRING)
    private Rarity rarity;
    private Long buildId;
    @ManyToOne
    @JoinColumn(name = "root_gun_product_id")
    private Product rootGun;
    @ManyToMany
    @JoinColumn(name = "product_id")
    private List<Product> products;
    private String nftImageUrl;
    private String mintingDate;
    private String firstOwner;

    public enum Rarity {
        USUAL, RARE, LEGENDARY
    }

}
