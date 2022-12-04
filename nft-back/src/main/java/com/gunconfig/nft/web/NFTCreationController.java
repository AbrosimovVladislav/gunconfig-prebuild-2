package com.gunconfig.nft.web;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.service.NFTCardService;
import com.gunconfig.nft.service.client.ConfiguratorClient;
import com.gunconfig.nft.service.client.response.BuildCreationResponse;
import com.gunconfig.nft.web.dto.NFTCardDto;
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

    @CrossOrigin
    @PostMapping
    public NFTCardDto createNftCard(@RequestBody CreateNFTRequest request) {
        //create build and save to db
        BuildCreationResponse response = configuratorClient.createBuild(request.getBuildImage(), request.getBase64Code());

        //create nft and save it
        NFTCard nftCard = nftCardService.create(response.getBuildId(),
                response.getProductIds(),
                request.getBuildImage(),
                request.getCollection(),
                request.getFirstOwner(),
                request.getName(),
                request.getMintingPrice());
        return nftCardMapper.toDto(nftCard);

    }

}
