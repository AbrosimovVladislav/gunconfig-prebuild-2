package com.gunconfig.nft.model.filtration;

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
public class KeyPath {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 8, nullable = false)
    private Long keyPathId;
    private String source;
    private String targetEntity;
    private String targetParam;
    @Column(unique = true)
    private String value;

    @JsonIgnore
    @OneToMany(mappedBy = "keyPath")
    private List<FilterItem> filterItem;

}
