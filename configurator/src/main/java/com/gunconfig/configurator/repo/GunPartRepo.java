package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.GunPart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GunPartRepo extends JpaRepository<GunPart, Long> {


    GunPart findByGunPartId(Long gunPartId);

}
