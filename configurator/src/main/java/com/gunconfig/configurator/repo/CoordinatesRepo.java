package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.GunPart;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CoordinatesRepo extends CrudRepository<GunPart, Long> {

    @Query(
            value = "SELECT * FROM gun_part_children gpc WHERE gpc.gun_part_gun_part_id = :parentId AND gpc.children_gun_part_id = :childId",
            nativeQuery = true)
    Object[] findCoordinatesByParentAndChildIds(@Param("parentId") Long parentId, @Param("childId") Long childId);

}
