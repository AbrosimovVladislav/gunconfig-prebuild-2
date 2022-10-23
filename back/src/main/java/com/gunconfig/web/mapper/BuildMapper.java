package com.gunconfig.web.mapper;

import com.gunconfig.model.Build;
import com.gunconfig.web.dto.catalog.BuildDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BuildMapper {

    private final ElementMapper elementMapper;

    public BuildDto buildToDto(Build build) {
        return BuildDto.builder()
                .rootElement(elementMapper.elementToShortElementDto(build.getRootElement()))
                .elements(elementMapper.elementsToShortElementDtos(build.getElements()))
                .build();
    }
}
