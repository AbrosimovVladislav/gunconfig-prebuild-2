package com.gunconfig.nft.service;

import com.gunconfig.nft.repo.NFTCardRepo;
import com.gunconfig.nft.service.client.ConfiguratorClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NFTCardService {

  private final NFTCardRepo nftCardRepo;
  private final ConfiguratorClient configuratorClient;

  public String test(String message) {
    String test = configuratorClient.test(message);
    return test;
  }
//    private final ProductService productService;
//    private final GunPartService gunPartService;
//    private final BuildService buildService;

//    public List<NFTCard> findAll() {
//        return nftCardRepo.findAll();
//    }

//    public NFTCard createNft(NFTCreateRequest request) {
//        Build build = new Build()
//                .setRootGunPart(gunPartService.findById(request.getRootGunId()))
//                .setGunParts(request.getGunPartsIds().stream()
//                        .map(gunPartService::findById).collect(Collectors.toList()))
//                .setBuildImageUrl(request.getBuildImageUrl());
//        build = buildService.save(build);
//
//        NFTCard nftCard = new NFTCard()
//                .setRootGun(productService.findById(request.getProductId()))
//                .setNftImageUrl(request.getNftImageUrl())
//                .setBuild(build);
//        NFTCard savedNFT = nftCardRepo.save(nftCard);
//        return savedNFT;
//    }
}
