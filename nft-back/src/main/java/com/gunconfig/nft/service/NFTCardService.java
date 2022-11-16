package com.gunconfig.nft.service;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.repo.NFTCardRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class NFTCardService {

    private final NFTCardRepo nftCardRepo;

    public List<NFTCard> getAllByParameters(Map<String, String> requestParams, Pageable pageable) {
        return nftCardRepo.findAllByParameters(requestParams, pageable, NFTCard.class);
    }

    public NFTCard findById(Long nftCardId) {
        return nftCardRepo.findById(nftCardId)
                .orElseThrow(() -> new RuntimeException("There is no nft card with id: " + nftCardId));
    }
}
