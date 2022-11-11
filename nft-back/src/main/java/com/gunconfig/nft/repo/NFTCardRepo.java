package com.gunconfig.nft.repo;

import com.gunconfig.nft.model.NFTCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NFTCardRepo extends JpaRepository<NFTCard, Long> {
}
