package com.gunconfig.nft.web;

import com.gunconfig.model.NFTCard;
import com.gunconfig.service.NFTCardService;
import com.gunconfig.web.dto.catalog.dto.NFTCardDto;
import com.gunconfig.web.dto.catalog.request.NFTCreateRequest;
import com.gunconfig.web.mapper.NFTCardMapper;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/nft-catalog")
public class NFTCatalogController {

    private final NFTCardService nftCardService;
    private final NFTCardMapper nftCardMapper;

    @CrossOrigin
    @GetMapping
    public List<NFTCardDto> findAll() {
        List<NFTCard> nftCards = nftCardService.findAll();
        log.info("Find all nfts. Size: " + nftCards.size());
        return nftCardMapper.nftCardsToDtos(nftCards);
    }

    @CrossOrigin
    @PostMapping
    public NFTCardDto createNFT(@RequestBody NFTCreateRequest request){
        NFTCard createdNFT = nftCardService.createNft(request);
        return nftCardMapper.nftCardToDto(createdNFT);
    }
}
