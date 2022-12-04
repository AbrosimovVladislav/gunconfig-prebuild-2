package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface GunPartRepo extends JpaRepository<GunPart, Long> {

    //ToDo refactor this to return GunPart without children (https://app.clickup.com/t/33dx15r)
    GunPart findByGunPartId(Long gunPartId);

    @Query(
            value = "SELECT gp.gun_part_id FROM gun_part gp ORDER BY gun_part_id DESC LIMIT 1",
            nativeQuery = true)
    Long getMaxGunPartId();

    Optional<GunPart> findByProduct(Product product);
}
