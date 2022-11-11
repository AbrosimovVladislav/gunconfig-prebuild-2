package com.gunconfig.configurator.web.mapper;

import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.web.dto.GunPartDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class GunPartMapper {
    public GunPartDto gunPartToDto(GunPart gunPart) {
        return GunPartDto.builder()
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

}
