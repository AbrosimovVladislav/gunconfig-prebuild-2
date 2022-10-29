package com.gunconfig.service;

import com.gunconfig.model.Build;
import com.gunconfig.model.NFTCard;
import com.gunconfig.repo.NFTCardRepo;
import com.gunconfig.web.dto.catalog.NFTCreateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NFTCardService {

    private final NFTCardRepo nftCardRepo;
    private final ProductService productService;
    private final ElementService elementService;
    private final BuildService buildService;

    public List<NFTCard> findAll() {
        return nftCardRepo.findAll();
    }

    public NFTCard createNft(NFTCreateRequest request) {
        Build build = new Build()
                .setRootElement(elementService.findById(request.getRootElementId()))
                .setElements(request.getElementsIds().stream()
                        .map(elementService::findById).collect(Collectors.toList()))
                .setBuildImageUrl(request.getBuildImageUrl());
        build = buildService.save(build);

        NFTCard nftCard = new NFTCard()
                .setRootGun(productService.findById(request.getProductId()))
                .setNftImageUrl(request.getNftImageUrl())
                .setBuild(build);
        NFTCard savedNFT = nftCardRepo.save(nftCard);
        savedNFT.setNftName(savedNFT.getRootGun().getName() + "_#" + savedNFT.getNftCardId());
        nftCardRepo.save(savedNFT);
        return savedNFT;
    }
}