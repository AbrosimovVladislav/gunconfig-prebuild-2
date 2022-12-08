package com.gunconfig.nft.web.mapper;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.web.dto.NFTCardDto;
import com.gunconfig.nft.web.dto.ShortNFTCardDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;

@Component
@RequiredArgsConstructor
public class NFTCardMapper {
    private final ProductMapper productMapper;

    public List<NFTCardDto> toDtos(List<NFTCard> nftCards) {
        if (nftCards == null || nftCards.size() == 0) {
            return Collections.emptyList();
        }
        return nftCards.stream().map(this::toDto).toList();
    }

    public List<ShortNFTCardDto> toShortDtos(List<NFTCard> nftCards) {
        if (nftCards == null || nftCards.size() == 0) {
            return Collections.emptyList();
        }
        return nftCards.stream().map(this::toShortDto).toList();
    }

    public ShortNFTCardDto toShortDto(NFTCard nftCard) {
        return ShortNFTCardDto.builder()
                .nftCardId(nftCard.getNftCardId())
                .name(nftCard.getName())
                .buildId(nftCard.getBuildId())
                .nftImageUrl(nftCard.getNftImageUrl())
                .collection(nftCard.getCollection())
                .mintingPrice(nftCard.getMintingPrice())
                .rarity(nftCard.getRarity())
                .firstOwner(nftCard.getFirstOwner())
                .mintingDate(nftCard.getMintingDate())
                .gunDescription(nftCard.getRootGunDescription())
                .build();
    }

    public NFTCardDto toDto(NFTCard nftCard) {
        return NFTCardDto.builder()
                .nftCardId(nftCard.getNftCardId())
                .name(nftCard.getName())
                .properties(productMapper.toDtos(nftCard.getProducts()))
                .buildId(nftCard.getBuildId())
                .nftImageUrl(nftCard.getNftImageUrl())
                .collection(nftCard.getCollection())
                .mintingPrice(nftCard.getMintingPrice())
                .rarity(nftCard.getRarity())
                .firstOwner(nftCard.getFirstOwner())
                .mintingDate(nftCard.getMintingDate())
                .gunDescription(nftCard.getRootGunDescription())
                .build();
    }

}
