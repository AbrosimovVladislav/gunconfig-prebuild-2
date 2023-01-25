package com.gunconfig.nft.web.mapper;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.service.client.ConfiguratorClient;
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
    private final ConfiguratorClient configuratorClient;

    /**
     * Map List of NFTCard to List of ShortNFTCardDto
     **/
    public List<ShortNFTCardDto> toShortDtos(List<NFTCard> nftCards) {
        if (nftCards == null || nftCards.size() == 0) {
            return Collections.emptyList();
        }
        return nftCards.stream().map(this::toShortDto).toList();
    }

    /**
     * Map NFTCard to ShortNFTCardDto
     **/
    public ShortNFTCardDto toShortDto(NFTCard nftCard) {
        return ShortNFTCardDto.builder()
                .nftCardId(nftCard.getNftCardId())
                .name(nftCard.getName())
                .nftImageUrl(nftCard.getNftImageUrl())
                .collection(nftCard.getCollection())
                .mintingPrice(nftCard.getMintingPrice())
                .rarity(nftCard.getRarity())
                .firstOwner(nftCard.getFirstOwner())
                .build();
    }

    /**
     * Map NFTCard to NFTCardDto
     **/
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
                .buildLink(configuratorClient.getBase64CodeByBuildId(nftCard.getBuildId()))
                .build();
    }

}
