package com.gunconfig.nft.repo;

import com.gunconfig.nft.model.NFTCardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NFTCardRepo extends JpaRepository<NFTCardEntity, Long> {

}
