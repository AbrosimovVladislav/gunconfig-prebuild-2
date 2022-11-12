package com.gunconfig.nft.service;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.repo.NFTCardRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NFTCardService {

    private final NFTCardRepo nftCardRepo;

    public List<NFTCard> findAll() {
        return nftCardRepo.findAll();
    }

}
