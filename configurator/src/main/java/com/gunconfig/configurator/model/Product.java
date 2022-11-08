package com.gunconfig.configurator.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long productId;

  private String name;

  @Enumerated(EnumType.STRING)
  private Type type;

  public enum Type {
    ROOT, GUN, PISTOL_GRIP, HANDGUARD, GAS_BLOCK, MUZZLE_BREAK,
    MAGAZINE, CHARGING_HANDLE, SCOPE, STOCK_TUBE, STOCK, TRIGGER, TRIGGER_GUARD
  }
}
