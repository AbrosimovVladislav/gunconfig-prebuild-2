package com.gunconfig.repo;

import com.gunconfig.model.NFTCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NFTCardRepo extends JpaRepository<NFTCard, Long> {

}