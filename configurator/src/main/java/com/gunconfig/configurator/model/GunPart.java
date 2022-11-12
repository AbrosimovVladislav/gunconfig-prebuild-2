package com.gunconfig.configurator.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class GunPart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gunPartId;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private String thumbnailImage;
    private String gunPartImageUrl;

    private Integer x;
    private Integer y;
    private Integer width;

    @ManyToMany
    @JoinColumn(name = "children_gun_part_id")
    private List<GunPart> children;

    @JsonIgnore
    @ManyToMany
    @JoinColumn(name = "incompatibles_gun_part_id")
    private List<GunPart> incompatibles;

}