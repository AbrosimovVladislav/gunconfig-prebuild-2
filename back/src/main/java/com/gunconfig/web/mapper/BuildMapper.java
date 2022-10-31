package com.gunconfig.web.mapper;

import com.gunconfig.model.Build;
import com.gunconfig.web.dto.catalog.dto.BuildDto;
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
