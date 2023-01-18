package com.gunconfig.configurator.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class GunForChoose {

  @Id
  private Long gunForChooseId;
  private String name;
  private String gunImageUrl;
  @Column(length = 240000)
  private String buildSchemaCode;
}
