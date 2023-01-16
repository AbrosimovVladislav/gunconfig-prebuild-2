package com.gunconfig.nft.web;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.service.ImageService;
import com.gunconfig.nft.service.NFTCardService;
import com.gunconfig.nft.service.client.ConfiguratorClient;
import com.gunconfig.nft.web.dto.BuildWithProductsDto;
import com.gunconfig.nft.web.dto.NFTCardDto;
import com.gunconfig.nft.web.dto.request.BuildCreateRequest;
import com.gunconfig.nft.web.dto.request.CreateNFTRequest;
import com.gunconfig.nft.web.mapper.NFTCardMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/nft-creation")
public class NFTCreationController {

    private final ConfiguratorClient configuratorClient;
    private final NFTCardService nftCardService;
    private final NFTCardMapper nftCardMapper;
    private final ImageService imageService;

    @CrossOrigin
    @PostMapping
    public NFTCardDto createNftCard(@RequestBody CreateNFTRequest request) {
        String imageUrl = imageService.saveImageToStore(request.getName(), request.getBuildImage());

        BuildWithProductsDto response = configuratorClient.createBuild(
                BuildCreateRequest.builder()
                        .base64Code(request.getBase64Code())
                        .buildImageUrl(imageUrl)
                        .build());

        NFTCard nftCard = nftCardService.create(response.getBuildId(),
                response.getProductIds(),
                imageUrl,
                request.getCollection(),
                request.getFirstOwner(),
                request.getName(),
                request.getMintingPrice());
        return nftCardMapper.toDto(nftCard);

    }

}
