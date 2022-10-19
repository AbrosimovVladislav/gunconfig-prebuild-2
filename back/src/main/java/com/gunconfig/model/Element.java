package com.gunconfig.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
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

  @OneToOne
  @JoinColumn(name = "product_id")
  private Product product;

  private String image;

  private Integer x;
  private Integer y;
  private Integer width;

  @ManyToMany
  @JoinColumn(name = "target_element_id")
  private List<Element> target;

}
