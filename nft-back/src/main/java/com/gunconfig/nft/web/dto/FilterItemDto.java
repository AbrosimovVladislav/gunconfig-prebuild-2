package com.gunconfig.nft.web.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Setter
@Getter
@Accessors(chain = true)
public class FilterItemDto {
    private String showName;
    private String filterKey;
    private String filterType;
    private int rank;
    private List<String> value;
}
