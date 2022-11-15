package com.gunconfig.nft.web.mapper;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.web.dto.NFTCardDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class NFTCardMapper {
    private final ProductMapper productMapper;

    public List<NFTCardDto> toDtos(List<NFTCard> nftCards) {
        return nftCards.stream().map(this::toDto).toList();
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
                .rarity(nftCard.getRarity().name())
                .firstOwner(nftCard.getFirstOwner())
                .mintingDate(nftCard.getMintingDate())
                .gunDescription(nftCard.getRootGunDescription())
                .build();
    }

}
