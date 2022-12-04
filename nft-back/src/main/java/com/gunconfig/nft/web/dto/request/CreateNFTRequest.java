package com.gunconfig.nft.web.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateNFTRequest {
    private String buildImage;
    private String base64Code;
    private String collection;
    private String firstOwner;
    private String name;
    private Double mintingPrice;
}
