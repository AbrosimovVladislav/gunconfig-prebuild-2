package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.GunForChoose;
import com.gunconfig.configurator.repo.GunForChooseRepo;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GunForChooseService {

  private final GunForChooseRepo gunForChooseRepo;

  public List<GunForChoose> findALl() {
    return gunForChooseRepo.findAll().stream()
        .sorted(Comparator.comparingLong(GunForChoose::getGunForChooseId))
        .collect(Collectors.toList());
  }

}
