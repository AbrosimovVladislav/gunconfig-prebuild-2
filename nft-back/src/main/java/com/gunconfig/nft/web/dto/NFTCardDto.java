package com.gunconfig.nft.web.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class NFTCardDto {

    private Long nftCardId;
    private String name;
    private List<ProductDto> properties;
    private Long buildId;
    private String nftImageUrl;
    private String collection;
    private Double mintingPrice;
    private String rarity;
    private String mintingDate;
    private String firstOwner;
    private String gunDescription;
    private String buildLink;

}
