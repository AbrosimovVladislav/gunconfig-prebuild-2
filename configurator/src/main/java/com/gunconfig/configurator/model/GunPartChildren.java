package com.gunconfig.configurator.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "gun_part_children")
@Getter
@Setter
@Accessors(chain = true)
public class GunPartChildren {
    @EmbeddedId
    private GunPartChildrenId id;

    @ManyToOne
    @MapsId("parentId")
    private GunPart parent;

    @ManyToOne
    @MapsId("childId")
    private GunPart children;

    private Integer x;
    private Integer y;
}

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
class GunPartChildrenId implements Serializable {
    private Long parentId;
    private Long childId;
}
