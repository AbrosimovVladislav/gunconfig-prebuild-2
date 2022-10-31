package com.gunconfig.web.dto.catalog.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class BuildDto {

    private GunPartDto rootGun;
    private List<GunPartDto> gunParts;

}
