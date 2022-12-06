package com.gunconfig.nft.web.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BuildCreateRequest {

    private String base64Code;
    private String buildImageUrl;

}
