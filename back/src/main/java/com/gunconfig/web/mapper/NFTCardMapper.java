package com.gunconfig.web.mapper;

import com.gunconfig.model.NFTCard;
import com.gunconfig.web.dto.catalog.NFTCardDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class NFTCardMapper {

    private final BuildMapper buildMapper;


    public List<NFTCardDto> nftCardsToDtos(List<NFTCard> nftCards) {
        return nftCards.stream().map(this::nftCardToDto).collect(Collectors.toList());
    }

    public NFTCardDto nftCardToDto(NFTCard nftCard) {
        return NFTCardDto.builder()
                .id(nftCard.getNftCardId())
                .productId(nftCard.getRootGun().getProductId())
                .productName(nftCard.getRootGun().getName())
                .nftImageUrl(nftCard.getNftImageUrl())
                .buildDto(buildMapper.buildToDto(nftCard.getBuild()))
                .build();
    }

    /*
        private Integer id;
    private Integer productId;
    private String productName;
    private String nftImageUrl;
    private BuildDto buildDto;
     */
}
