package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.repo.BuildRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BuildService {

  private final BuildRepo buildRepo;

  public Build save(Build build) {
    return buildRepo.save(build);
  }

}
