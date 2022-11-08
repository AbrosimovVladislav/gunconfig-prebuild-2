package com.gunconfig.configurator.web.dto;

import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BuildDto {

    private GunPartDto rootGun;
    private List<GunPartDto> gunParts;

}
