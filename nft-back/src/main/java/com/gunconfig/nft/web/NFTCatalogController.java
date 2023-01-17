package com.gunconfig.nft.web;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.nft.model.filtration.FilterItem;
import com.gunconfig.nft.service.FilterItemService;
import com.gunconfig.nft.service.NFTCardService;
import com.gunconfig.nft.service.client.ConfiguratorClient;
import com.gunconfig.nft.web.dto.FilterItemDto;
import com.gunconfig.nft.web.dto.NFTCardDto;
import com.gunconfig.nft.web.dto.ShortNFTCardDto;
import com.gunconfig.nft.web.mapper.FilterItemMapper;
import com.gunconfig.nft.web.mapper.NFTCardMapper;
import com.gunconfig.nft.web.preparer.FilterAndPageable;
import com.gunconfig.nft.web.preparer.Preparer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/nft-catalog")
public class NFTCatalogController {

  private final NFTCardService nftCardService;
  private final NFTCardMapper nftCardMapper;
  private final FilterItemService filterItemService;
  private final FilterItemMapper filterItemMapper;
  private final List<Preparer> preparers;
  private final ConfiguratorClient configuratorClient;

  private static final int DEFAULT_PAGE_NUMBER = 0;
  private static final int DEFAULT_PAGE_SIZE = 3000;

  @CrossOrigin
  @GetMapping("/isBuildExists/{buildCode}")
  public StringResponse isBuildExists(@PathVariable String buildCode) {
    Long buildId = configuratorClient.getBuildIdBySchema(buildCode);
    if (buildId == -1L) {
      return new StringResponse("url", "false");
    } else {
      return new StringResponse("url", "/nft/" + buildId);
    }
  }

  @Data
  @AllArgsConstructor
  class StringResponse {

    String key;
    String value;
  }

  @CrossOrigin
  @GetMapping(value = "/collection/{collectionName}")
  public List<ShortNFTCardDto> getEightNFTsFromSameCollection(@PathVariable String collectionName) {
    List<NFTCard> nftCards = nftCardService.findEightNFTsFromSameCollection(collectionName);
    return nftCardMapper.toShortDtos(nftCards);
  }

  @CrossOrigin
  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  public List<NFTCardDto> getByParams(@RequestParam Map<String, String> requestParams,
      @PageableDefault(size = DEFAULT_PAGE_SIZE, page = DEFAULT_PAGE_NUMBER) Pageable pageable) {
    FilterAndPageable filterAndPageable = new FilterAndPageable(requestParams, pageable);
    preparers.forEach(preparer -> preparer.prepare(filterAndPageable, NFTCard.class));

    List<NFTCard> nftCards = nftCardService.getAllByParameters(
        filterAndPageable.getFilter(),
        filterAndPageable.getPageable()
    );

    List<NFTCardDto> result = nftCardMapper.toDtos(nftCards);
    log.info("Params: {}. {}. NFTCard list size: {}",
        requestParams,
        pageable, result.size());
    return result;
  }

  @CrossOrigin
  @GetMapping(value = "/{nftCardId}")
  public NFTCardDto getNftCardById(@PathVariable Long nftCardId) {
    NFTCard nftCard = nftCardService.findById(nftCardId);
    NFTCardDto dto = nftCardMapper.toDto(nftCard);
    return dto;
  }

  @CrossOrigin
  @GetMapping(value = "/filters", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<FilterItemDto> getFilterItems() {
    List<FilterItem> filterItems = filterItemService.findAll();
    return filterItemMapper.toDtos(filterItems);
  }

}
