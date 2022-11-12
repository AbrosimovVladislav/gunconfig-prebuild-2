package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.GunPart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GunPartRepo extends JpaRepository<GunPart, Long> {

    //ToDo refactor this to return GunPart without children (https://app.clickup.com/t/33dx15r)
    GunPart findByGunPartId(Long gunPartId);
}
