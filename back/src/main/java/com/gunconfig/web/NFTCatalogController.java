package com.gunconfig.web;

import com.gunconfig.model.NFTCard;
import com.gunconfig.service.NFTCardService;
import com.gunconfig.web.dto.catalog.NFTCardDto;
import com.gunconfig.web.mapper.NFTCardMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/nft-catalog")
public class NFTCatalogController {

    private final NFTCardService nftCardService;
    private final NFTCardMapper nftCardMapper;


    @GetMapping
    @CrossOrigin
    public List<NFTCardDto> findAll() {
        List<NFTCard> nftCards = nftCardService.findAll();
        return nftCardMapper.nftCardsToDtos(nftCards);
    }
}
