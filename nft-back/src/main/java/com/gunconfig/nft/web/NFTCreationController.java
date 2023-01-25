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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/nft-create")
public class NFTCreationController {

  private final ConfiguratorClient configuratorClient;
  private final NFTCardService nftCardService;
  private final NFTCardMapper nftCardMapper;
  private final ImageService imageService;

  /**
   * Create new nft card with data from request
   **/
  @CrossOrigin
  @PostMapping
  public ResponseEntity<NFTCardDto> createNftCard(@RequestBody CreateNFTRequest request) {
    log.info("Start CreateNftCard. Params: request:<{}>", request.getName());

    String buildImageUrl = imageService.saveImageToStore(request.getName(),
        request.getBuildImage());
    BuildWithProductsDto response = configuratorClient.createBuild(
        BuildCreateRequest.builder()
            .base64Code(request.getBase64Code())
            .buildImageUrl(buildImageUrl)
            .build());

    String nftImageUrl = imageService.createNFTImage(buildImageUrl);
    NFTCard nftCard = nftCardService.create(
        response.getBuildId(),
        response.getProductIds(),
        nftImageUrl,
        request.getCollection(),
        request.getFirstOwner(),
        request.getName(),
        request.getMintingPrice(),
        request.getRarity()
    );
    NFTCardDto nftCardDto = nftCardMapper.toDto(nftCard);

    log.info("Finish CreateNftCard. Answer: <{}>", nftCardDto.getName());
    return ResponseEntity.ok(nftCardDto);

  }

}
