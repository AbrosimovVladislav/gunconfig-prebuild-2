package com.gunconfig.nft.model;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Product {

    @Id
    private Long productId;

    private String name;
    private String productImageUrl;
    private String description;
    //ToDo create as table
    private String brand;

    @Enumerated(EnumType.STRING)
    private Type type;

    public enum Type {
        ROOT, GUN, PISTOL_GRIP, HANDGUARD, GAS_BLOCK, MUZZLE_BREAK,
        MAGAZINE, CHARGING_HANDLE, SCOPE, STOCK_TUBE, STOCK, TRIGGER, TRIGGER_GUARD, TACTICAL_GRIP
    }
}
