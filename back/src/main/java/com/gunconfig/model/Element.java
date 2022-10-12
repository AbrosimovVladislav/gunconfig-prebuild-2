package com.gunconfig.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Element {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long elementId;

  private String name;
  private String image;
  @Enumerated(EnumType.STRING)
  private Type type;

  @ManyToMany
  @JoinColumn(name = "target_element_id")
  private List<Element> target;

  public enum Type {
    GUN, PISTOL_GRIP, HANDGUARD, GAS_BLOCK, MUZZLE_BREAK,
    MAGAZINE, CHARGING_HANDLE, SCOPE, STOCK_TUBE, STOCK
  }

}
