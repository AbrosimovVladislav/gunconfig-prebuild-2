package com.gunconfig.repo;

import com.gunconfig.model.Build;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuildRepo extends JpaRepository<Build, Long> {
}
