package com.gunconfig.nft.web;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.service.NFTCardService;
import com.gunconfig.nft.web.dto.NFTCardDto;
import com.gunconfig.nft.web.mapper.NFTCardMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/nft-catalog")
public class NFTCatalogController {

    private final NFTCardService nftCardService;
    private final NFTCardMapper nftCardMapper;

    @CrossOrigin
    @GetMapping
    public List<NFTCardDto> getAllNFTs() {
        List<NFTCard> nfts = nftCardService.findAll();
        List<NFTCardDto> dtos = nftCardMapper.toDtos(nfts);
        return dtos;
    }

    @GetMapping(value = "/{nftCardId}")
    public NFTCardDto getNftCardById(@PathVariable Long nftCardId){
        NFTCard nftCard = nftCardService.findById(nftCardId);
        NFTCardDto dto = nftCardMapper.toDto(nftCard);
        return dto;
    }

}
