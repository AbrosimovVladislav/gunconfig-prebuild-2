package com.gunconfig.nft.model.filtration;

import com.gunconfig.querybuilder.BasicEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class FilterItem implements BasicEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 8, nullable = false)
    private Long filterItemId;
    private String name;
    @ManyToOne
    @JoinColumn(nullable = false)
    private KeyPath keyPath;
    @Enumerated(EnumType.STRING)
    private FilterType type;
    private int rank;

    /**
     * For different filter types :
     * range -> min and max
     * checkbox -> list of values
     */
    @Transient
    List<String> values;

    public enum FilterType {
        RANGE, CHECKBOX
    }

}
