package com.gunconfig.configurator.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
public class Build {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long buildId;

  @ManyToOne
  @JoinColumn(name = "root_gun_id")
  private GunPart rootGunPart;
  @ManyToMany
  @JoinColumn(name = "gun_part_id")
  private List<GunPart> gunParts;
  private String buildImageUrl;

}
