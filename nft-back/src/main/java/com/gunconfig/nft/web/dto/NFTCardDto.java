package com.gunconfig.nft.web.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NFTCardDto {

    private Long id;
    private String nftName;
    private Long productId;
    private String productName;
    private String nftImageUrl;
    private BuildDto buildDto;

}
