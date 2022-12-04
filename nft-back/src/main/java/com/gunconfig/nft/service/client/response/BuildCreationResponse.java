package com.gunconfig.nft.service.client.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BuildCreationResponse {

    private Long buildId;
    private List<Long> productIds;

}
