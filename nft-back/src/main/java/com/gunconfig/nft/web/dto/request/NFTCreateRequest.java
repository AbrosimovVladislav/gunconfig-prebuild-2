package com.gunconfig.nft.web.dto.request;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
