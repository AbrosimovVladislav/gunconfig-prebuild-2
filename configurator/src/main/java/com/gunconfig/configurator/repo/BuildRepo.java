package com.gunconfig.configurator.repo;

import com.gunconfig.configurator.model.Build;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuildRepo extends JpaRepository<Build, Long> {

}
