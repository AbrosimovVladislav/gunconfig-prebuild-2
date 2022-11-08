package com.gunconfig.configurator.web.mapper;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.web.dto.BuildDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BuildMapper {

  private final GunPartMapper gunPartMapper;

  public BuildDto buildToDto(Build build) {
    return BuildDto.builder()
        .rootGun(gunPartMapper.gunPartToDto(build.getRootGunPart()))
        .gunParts(gunPartMapper.gunPartsToDtos(build.getGunParts()))
        .build();
  }
}
