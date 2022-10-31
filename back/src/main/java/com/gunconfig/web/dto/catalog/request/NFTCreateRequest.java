package com.gunconfig.web.dto.catalog.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NFTCreateRequest {

    private Long productId;
    private String nftImageUrl;
    private Long rootGunId;
    private List<Long> gunPartsIds;
    private String buildImageUrl;

}