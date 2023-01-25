package com.gunconfig.nft.web.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShortNFTCardDto {
    private Long nftCardId;
    private String name;
    private String nftImageUrl;
    private String collection;
    private Double mintingPrice;
    private String rarity;
    private String firstOwner;
}
