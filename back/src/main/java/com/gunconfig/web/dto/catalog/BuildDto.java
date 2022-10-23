package com.gunconfig.web.dto.catalog;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class BuildDto {

    private ShortElementDto rootElement;
    private List<ShortElementDto> elements;

}
