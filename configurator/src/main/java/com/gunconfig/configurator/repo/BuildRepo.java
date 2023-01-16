package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.SchemaNode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface BuildRepo extends JpaRepository<Build, Long> {

    @Query(
            value = "SELECT b.build_id FROM build b ORDER BY build_id DESC LIMIT 1",
            nativeQuery = true)
    Long getMaxBuildId();

    @Query(
            value = "SELECT b FROM build b WHERE b.schema = :schema",
            nativeQuery = true
    )
    Build findBySchema(@Param("schema") String schema);
}
