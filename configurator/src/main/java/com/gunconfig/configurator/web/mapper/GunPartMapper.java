package com.gunconfig.configurator.web.mapper;

import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.web.dto.RenderingGunPartDto;
import com.gunconfig.configurator.web.dto.ShortGunPartDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class GunPartMapper {
    public RenderingGunPartDto toRenderingDto(GunPart gunPart) {
        return RenderingGunPartDto.builder()
                .gunPartId(gunPart.getGunPartId())
                .productId(gunPart.getProduct().getProductId())
                .productName(gunPart.getProduct().getName())
                .productType(gunPart.getProduct().getType().toString())
                .gunPartImageUrl(gunPart.getGunPartImageUrl())
                .x(gunPart.getX())
                .y(gunPart.getY())
                .width(gunPart.getWidth())
                .build();
    }

    public List<ShortGunPartDto> toShortDtos(List<GunPart> gunParts) {
        return gunParts.stream().map(this::toShortDto).toList();
    }

    public ShortGunPartDto toShortDto(GunPart gunPart) {
        return ShortGunPartDto.builder()
                .gunPartId(gunPart.getGunPartId())
                .productId(gunPart.getProduct().getProductId())
                .name(gunPart.getProduct().getName())
                .type(gunPart.getProduct().getType())
                .thumbnailImage(gunPart.getThumbnailImage())
                .incompatibleIds(gunPart.getIncompatibles().stream().map(GunPart::getGunPartId).toList())
                .build();
    }
}
