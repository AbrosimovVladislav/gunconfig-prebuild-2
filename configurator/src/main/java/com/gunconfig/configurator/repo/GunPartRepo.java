package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.GunPart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface GunPartRepo extends JpaRepository<GunPart, Long> {

    //ToDo refactor this to return GunPart without children (https://app.clickup.com/t/33dx15r)
    @Query(value =
            "SELECT gp.gun_part_id, gp.gun_part_image_url, gp.width, gp.x, gp.y, gp.product_id, p.name, p.product_image_url, p.type FROM gun_part as gp JOIN product p on p.product_id = gp.product_id WHERE gun_part_id = ?1"
    , nativeQuery = true)
    GunPart findByGunPartIdWithoutChildren(Long gunPartId);

}
