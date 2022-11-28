package com.gunconfig.configurator.web.mapper;

import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.service.CoordinatesService;
import com.gunconfig.configurator.web.dto.RenderingGunPartDto;
import com.gunconfig.configurator.web.dto.ShortGunPartDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class GunPartMapper {

    private final CoordinatesService coordinatesService;

    public RenderingGunPartDto toRenderingDto(GunPart gunPart, Long parentId) {
        Pair<Integer, Integer> coordinates = coordinatesService.getCoordinatesByParentIdAndChildId(parentId, gunPart.getGunPartId());
        return RenderingGunPartDto.builder()
                .gunPartId(gunPart.getGunPartId())
                .productId(gunPart.getProduct().getProductId())
                .productName(gunPart.getProduct().getName())
                .productType(gunPart.getProduct().getType().toString())
                .gunPartImageUrl(gunPart.getGunPartImageUrl())
                .x(coordinates.getFirst())
                .y(coordinates.getSecond())
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
