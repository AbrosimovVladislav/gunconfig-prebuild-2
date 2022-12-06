package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.Build;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BuildRepo extends JpaRepository<Build, Long> {

    @Query(
            value = "SELECT b.build_id FROM build b ORDER BY build_id DESC LIMIT 1",
            nativeQuery = true)
    Long getMaxBuildId();

}
