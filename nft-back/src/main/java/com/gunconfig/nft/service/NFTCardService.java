package com.gunconfig.nft.service;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.model.Product;
import com.gunconfig.nft.repo.NFTCardRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class NFTCardService {

    private final NFTCardRepo nftCardRepo;
    private final ProductService productService;

    public NFTCard create(Long buildId, List<Long> productIds, String buildImageUrl, String collection, String firstOwner, String name, Double mintingPrice) {
        Product rootGun = productService.findById(productIds.get(0));

        Long newNftId = nftCardRepo.getMaxNftId() + 1L;

        NFTCard nftCard = new NFTCard()
                .setNftCardId(newNftId)
                .setName(name)
                .setCollection(collection)
                .setMintingPrice(mintingPrice)
                //ToDo For now we are setting buildImage, but we should change it to nft image
                .setNftImageUrl(buildImageUrl)
                .setMintingDate(String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.UTC).toEpochMilli()))
                .setFirstOwner(firstOwner)
                .setBuildId(buildId)
                .setStatus(NFTCard.Status.DRAFT)
                .setRarity(NFTCard.Rarity.USUAL.toString())
                .setProducts(productService.findByIds(productIds))
                .setRootGunId(rootGun.getProductId())
                .setRootGunDescription(rootGun.getDescription())
                .setRootGunBrand(rootGun.getBrand())
                //ToDo Set real caliber later
                .setRootGunCaliber("223");

        return nftCardRepo.save(nftCard);
    }

    public List<NFTCard> getAllByParameters(Map<String, String> requestParams, Pageable pageable) {
        return nftCardRepo.findAllByParameters(requestParams, pageable, NFTCard.class);
    }

    public NFTCard findById(Long nftCardId) {
        return nftCardRepo.findById(nftCardId)
                .orElseThrow(() -> new RuntimeException("There is no nft card with id: " + nftCardId));
    }

    public List<NFTCard> findEightNFTsFromSameCollection(String collectionName) {
        return nftCardRepo.findTop8ByCollection(collectionName);
    }
}
