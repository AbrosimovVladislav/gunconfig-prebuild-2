package com.gunconfig.nft.repo;

import com.gunconfig.nft.model.Background;
import com.gunconfig.nft.model.Rarity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BackgroundRepo extends JpaRepository<Background, Long> {

  Optional<Background> findByCollectionAndRarity(String collection, Rarity rarity);

}
