package com.gunconfig.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
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
  @JoinColumn(name = "element_id")
  private Element rootElement;
  @ManyToMany
  @JoinColumn(name = "element_id")
  private List<Element> elements;
  private String buildImageUrl;

}
