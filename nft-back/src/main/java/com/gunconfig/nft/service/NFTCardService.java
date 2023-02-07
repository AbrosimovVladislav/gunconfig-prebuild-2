package com.gunconfig.nft.service;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.model.NFTCard.Rarity;
import com.gunconfig.nft.model.NFTCard.Status;
import com.gunconfig.nft.model.Product;
import com.gunconfig.nft.repo.NFTCardRepo;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NFTCardService {

  private final NFTCardRepo nftCardRepo;
  private final ProductService productService;

  /**
   * Create new nft card with provided parameters
   **/
  public NFTCard create(Long buildId, List<Long> productIds, String nftImageUrl,
      String collection, String firstOwner, String name, Double mintingPrice, Rarity rarity) {
    Product rootGun = productService.findById(productIds.get(0));

    Long nftId = nftCardRepo.getMaxNftId() != null ? nftCardRepo.getMaxNftId() + 1L : 1L;

    NFTCard nftCard = new NFTCard()
        .setNftCardId(nftId)
        .setName(name + " - " + nftId)
        .setCollection(collection)
        .setMintingPrice(mintingPrice)
        .setNftImageUrl(nftImageUrl)
        .setMintingDate(
            String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.UTC).toEpochMilli()))
        .setFirstOwner(firstOwner)
        .setBuildId(buildId)
        .setStatus(Status.MINTED)
        .setRarity(rarity.toString())
        .setProducts(productService.findByIds(productIds))
        .setRootGunId(rootGun.getProductId())
        .setRootGunDescription(rootGun.getDescription())
        .setRootGunBrand(rootGun.getBrand());

    return nftCardRepo.save(nftCard);
  }

  /**
   * Find List of NFTCard by parameters
   **/
  public List<NFTCard> getAllByParameters(Map<String, String> requestParams, Pageable pageable) {
    return nftCardRepo.findAllByParameters(requestParams, pageable, NFTCard.class);
  }

  /**
   * Find NFT by id
   **/
  public NFTCard findById(Long nftCardId) {
    return nftCardRepo.findById(nftCardId)
        .orElseThrow(() -> new RuntimeException("There is no nft card with id: " + nftCardId));
  }

  /**
   * Find 8 NFTs from given collection
   **/
  public List<NFTCard> findEightNFTsFromSameCollection(String collectionName) {
    return nftCardRepo.findTop8ByCollection(collectionName);
  }

  /**
   * Find NFTCard by build id
   **/
  public NFTCard findByBuildId(Long buildId) {
    return nftCardRepo.findByBuildId(buildId)
        .orElseThrow(() -> new RuntimeException("There is no nft with buildId: " + buildId));
  }
}
