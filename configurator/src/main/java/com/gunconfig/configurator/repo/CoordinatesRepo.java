package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.GunPartChildren;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CoordinatesRepo extends CrudRepository<GunPartChildren, Long> {

    @Query(
            value = "SELECT * FROM gun_part_children gpc WHERE gpc.parent_id = :parentId AND gpc.children_id = :childId",
            nativeQuery = true)
    Object[] findCoordinatesByParentAndChildIds(@Param("parentId") Long parentId, @Param("childId") Long childId);

    @Query(
            value = "INSERT INTO gun_part_children AS gpc (parent_id, parent_gun_part_id, children_id, children_gun_part_id, x, y) VALUES (:parentId,:parentId,:childId,:childId,:x,:y)",
            nativeQuery = true)
    @Modifying
    void createCoordinates(@Param("parentId") Long parentId,
                           @Param("childId") Long childId,
                           @Param("x") Double x,
                           @Param("y") Double y);

    @Query(
            value = "UPDATE gun_part_children SET x=:x, y=:y WHERE (parent_id=:parentId AND children_id=:childId)",
            nativeQuery = true)
    @Modifying
    void updateCoordinates(@Param("parentId") Long parentId,
                           @Param("childId") Long childId,
                           @Param("x") Double x,
                           @Param("y") Double y);
}
