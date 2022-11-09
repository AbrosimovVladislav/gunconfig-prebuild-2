package com.gunconfig.nft.web;

import com.gunconfig.nft.service.NFTCardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/nft-catalog")
public class NFTCatalogController {

  private final NFTCardService nftCardService;

  @CrossOrigin
  @GetMapping(value = "/test/{message}")
  public String test(String message) {
    String test = nftCardService.test(message);
    return test;
  }

//    private final NFTCardMapper nftCardMapper;
//
//    @CrossOrigin
//    @GetMapping
//    public List<NFTCardDto> findAll() {
//        List<NFTCard> nftCards = nftCardService.findAll();
//        log.info("Find all nfts. Size: " + nftCards.size());
//        return nftCardMapper.nftCardsToDtos(nftCards);
//    }
//
//    @CrossOrigin
//    @PostMapping
//    public NFTCardDto createNFT(@RequestBody NFTCreateRequest request){
//        NFTCard createdNFT = nftCardService.createNft(request);
//        return nftCardMapper.nftCardToDto(createdNFT);
//    }
}
