package com.gunconfig.nft.repo;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.querybuilder.FilterAndSortingRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NFTCardRepo
    extends JpaRepository<NFTCard, Long>, FilterAndSortingRepository<NFTCard> {

  @Query(
      value = "SELECT nft.nft_card_id FROM nftcard nft ORDER BY nft_card_id DESC LIMIT 1",
      nativeQuery = true)
  Long getMaxNftId();

  List<NFTCard> findTop8ByCollection(String collection);

  Optional<NFTCard> findByBuildId(Long buildId);
}
