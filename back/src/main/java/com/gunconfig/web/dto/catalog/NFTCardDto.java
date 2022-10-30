package com.gunconfig.web.dto.catalog;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NFTCardDto {

    private Long id;
    private Long productId;
    private String productName;
    private String nftName;
    private String nftImageUrl;
    private BuildDto buildDto;

}
