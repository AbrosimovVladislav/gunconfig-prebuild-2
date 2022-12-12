package com.gunconfig.configurator.web.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SetCoordinatesRequest {

    private Long parentId;
    private Long childId;
    private Double x;
    private Double y;

}
