package com.gunconfig.nft.service;

import com.gunconfig.nft.model.Background;
import com.gunconfig.nft.model.Rarity;
import com.gunconfig.nft.repo.BackgroundRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class BackgroundService {

  private final BackgroundRepo backgroundRepo;

  public Background findByCollectionAndRarity(String collection, String rarity) {
    return backgroundRepo.findByCollectionAndRarity(collection, Rarity.valueOf(rarity))
        .orElseThrow(() -> new RuntimeException(String.format(
            "There is no background with collection: %s and rarity: %s", collection, rarity)));
  }
}
