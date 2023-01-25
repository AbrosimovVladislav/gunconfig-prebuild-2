package com.gunconfig.nft.web;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.service.NFTCardService;
import com.gunconfig.nft.web.dto.NFTCardDto;
import com.gunconfig.nft.web.dto.ShortNFTCardDto;
import com.gunconfig.nft.web.mapper.NFTCardMapper;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/nft")
public class SingleNFTController {

  private final NFTCardService nftCardService;
  private final NFTCardMapper nftCardMapper;

  /**
   * Get NFT by nftId
   **/
  @CrossOrigin
  @GetMapping(value = "/{nftCardId}")
  public ResponseEntity<NFTCardDto> getNftCardById(@PathVariable Long nftCardId) {
    log.info("Start GetNftCardById. Params: nftCardId:<{}>", nftCardId);
    NFTCard nftCard = nftCardService.findById(nftCardId);
    NFTCardDto dto = nftCardMapper.toDto(nftCard);
    log.info("Finish GetNftCardById. Answer: <{}>", dto);
    return ResponseEntity.ok(dto);
  }

  /**
   * Get 8 NFTs from given collection
   **/
  @CrossOrigin
  @GetMapping(value = "/collection/{collectionName}")
  public ResponseEntity<List<ShortNFTCardDto>> getEightNFTsFromSameCollection(
      @PathVariable String collectionName) {
    log.info("Start GetEightNFTsFromSameCollection. Params: collectionName:<{}>", collectionName);

    List<NFTCard> nftCards = nftCardService.findEightNFTsFromSameCollection(collectionName);
    List<ShortNFTCardDto> shortNFTCardDtos = nftCardMapper.toShortDtos(nftCards);

    log.info("Finish GetEightNFTsFromSameCollection. Answer: <{}>", shortNFTCardDtos);
    return ResponseEntity.ok(shortNFTCardDtos);
  }

}
