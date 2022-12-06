package com.gunconfig.nft.web.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BuildWithProductsDto {
    private Long buildId;
    private List<Long> productIds;
}
