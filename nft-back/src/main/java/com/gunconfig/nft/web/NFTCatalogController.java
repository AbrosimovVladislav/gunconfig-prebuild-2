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
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

  /**
   * Get NFTId by base64code If build with given base64code exists, and NFT with this build exists
   * then, return NFT id
   **/
  @CrossOrigin
  @GetMapping("/nftId/{base64Code}")
  public ResponseEntity<Long> getNftIdByBase64Code(@PathVariable String base64Code) {
    log.info("Start GetNftIdByBase64Code. Params: base64Code:<{}>", base64Code);

    Long buildId = configuratorClient.getBuildIdByBase64Code(base64Code);
    Long nftId = buildId == -1L ? -1L : nftCardService.findByBuildId(buildId).getNftCardId();

    log.info("Finish GetNftIdByBase64Code. Answer: <{}>", nftId);
    return ResponseEntity.ok(nftId);
  }

  /**
   * Get 8 NFTs from given collection
   **/
  @CrossOrigin
  @GetMapping(value = "/collection/{collectionName}")
  public ResponseEntity<List<ShortNFTCardDto>> getEightNFTsFromSameCollection(
      @PathVariable String collectionName) {
    log.info("Start GetEightNFTsFromSameCollection. Params: collectionName:<{}>", collectionName);

    List<NFTCard> nftCards = nftCardService.findEightNFTsFromSameCollection(collectionName);
    List<ShortNFTCardDto> shortNFTCardDtos = nftCardMapper.toShortDtos(nftCards);

    log.info("Finish GetEightNFTsFromSameCollection. Answer: <{}>", shortNFTCardDtos);
    return ResponseEntity.ok(shortNFTCardDtos);
  }

  /**
   * Get NFTs by parameters
   **/
  @CrossOrigin
  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<List<ShortNFTCardDto>> getNFTsByParams(
      @RequestParam Map<String, String> requestParams,
      @PageableDefault(size = DEFAULT_PAGE_SIZE, page = DEFAULT_PAGE_NUMBER) Pageable pageable) {
    log.info("Start GetNFTsByParams. Params: requestParams:<{}>, pageable:<{}>"
        , requestParams, pageable);

    FilterAndPageable filterAndPageable = new FilterAndPageable(requestParams, pageable);
    preparers.forEach(preparer -> preparer.prepare(filterAndPageable, NFTCard.class));

    List<NFTCard> nftCards = nftCardService.getAllByParameters(
        filterAndPageable.getFilter(),
        filterAndPageable.getPageable()
    );

    List<ShortNFTCardDto> result = nftCardMapper.toShortDtos(nftCards);

    log.info("Finish GetNFTsByParams. Answer size: <{}>", result.size());
    return ResponseEntity.ok(result);
  }

  /**
   * Get NFT by nftId
   **/
  @CrossOrigin
  @GetMapping(value = "/{nftCardId}")
  public ResponseEntity<NFTCardDto> getNftCardById(@PathVariable Long nftCardId) {
    log.info("Start GetNftCardById. Params: nftCardId:<{}>", nftCardId);
    NFTCard nftCard = nftCardService.findById(nftCardId);
    NFTCardDto dto = nftCardMapper.toDto(nftCard);
    log.info("Finish GetNftCardById. Answer: <{}>", dto);
    return ResponseEntity.ok(dto);
  }

  /**
   * Get List of all FilterItem
   **/
  @CrossOrigin
  @GetMapping(value = "/filters", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<List<FilterItemDto>> getFilterItems() {
    log.info("Start GetFilterItems");
    List<FilterItem> filterItems = filterItemService.findAll();
    List<FilterItemDto> dtos = filterItemMapper.toDtos(filterItems);
    log.info("Finish GetFilterItems. Answer: <{}>", dtos);
    return ResponseEntity.ok(dtos);
  }

}
