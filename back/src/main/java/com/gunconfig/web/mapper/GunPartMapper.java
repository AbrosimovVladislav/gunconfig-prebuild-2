package com.gunconfig.web.mapper;

import com.gunconfig.model.GunPart;
import com.gunconfig.service.GunPartService;
import com.gunconfig.web.dto.catalog.dto.GunPartDto;
import com.gunconfig.web.dto.configurator.ConfiguratorGunPartDto;

import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class GunPartMapper {

    private final GunPartService gunPartService;

    public ConfiguratorGunPartDto gunPartToConfiguratorGunPartDto(GunPart gunPart) {
        List<GunPart> target = gunPart.getTarget();
        List<GunPart> children = gunPartService.getChildrenOfGunPartById(
                gunPart.getGunPartId());
        return ConfiguratorGunPartDto.builder()
                .gunPartId(gunPart.getGunPartId())
                .name(gunPart.getProduct().getName())
                .image(gunPart.getImage())
                .type(gunPart.getProduct().getType().toString())
                .target(target.isEmpty() ? null : target)
                .children(children.isEmpty() ? null : children)
                .build();
    }

    public List<GunPartDto> gunPartsToDtos(List<GunPart> gunParts) {
        return gunParts.stream().map(this::gunPartToDto).collect(Collectors.toList());
    }

    public GunPartDto gunPartToDto(GunPart gunPart) {
        return GunPartDto.builder()
                .gunPartId(gunPart.getGunPartId())
                .productId(gunPart.getProduct().getProductId())
                .productName(gunPart.getProduct().getName())
                .productType(gunPart.getProduct().getType().toString())
                .imageUrl(gunPart.getImage())
                .build();
    }

}
