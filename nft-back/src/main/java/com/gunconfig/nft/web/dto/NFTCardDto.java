package com.gunconfig.nft.web.dto;

import com.gunconfig.nft.model.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class NFTCardDto {

    private Long nftCardId;
    private String name;
    private Product rootGunProduct;
    private List<Product> properties;
    private String nftImageUrl;

}
