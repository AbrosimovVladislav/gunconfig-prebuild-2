package com.gunconfig.nft.web.mapper;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.service.client.ConfiguratorClient;
import com.gunconfig.nft.web.dto.NFTCardDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class NFTCardMapper {

    private final ConfiguratorClient configuratorClient;

    public List<NFTCardDto> toDtos(List<NFTCard> nftCards) {
        return nftCards.stream().map(this::toDto).toList();
    }

    private NFTCardDto toDto(NFTCard nftCard) {
        return NFTCardDto.builder()
                .nftCardId(nftCard.getNftCardId())
                .name(nftCard.getName())
                .rootGunProduct(configuratorClient.getProductById(nftCard.getRootGunProductId()))
                .properties(configuratorClient.getProductsByIds(nftCard.getPropertiesIds()))
                .nftImageUrl(nftCard.getNftImageUrl())
                .build();
    }

}
