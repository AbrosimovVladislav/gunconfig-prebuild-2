package com.gunconfig.configurator.web;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.GunForChoose;
import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.service.BuildService;
import com.gunconfig.configurator.service.CoordinatesService;
import com.gunconfig.configurator.service.GunForChooseService;
import com.gunconfig.configurator.service.GunPartService;
import com.gunconfig.configurator.service.ProductService;
import com.gunconfig.configurator.web.dto.BuildGunPartDto;
import com.gunconfig.configurator.web.dto.ProductDto;
import com.gunconfig.configurator.web.dto.ShortGunPartDto;
import com.gunconfig.configurator.web.dto.request.CreateGunPartRequest;
import com.gunconfig.configurator.web.dto.request.CreateProductRequest;
import com.gunconfig.configurator.web.dto.request.GetGunPartsByParentAndTypeRequest;
import com.gunconfig.configurator.web.dto.request.SetCoordinatesRequest;
import com.gunconfig.configurator.web.mapper.BuildMapper;
import com.gunconfig.configurator.web.mapper.GunPartMapper;
import com.gunconfig.configurator.web.mapper.ProductMapper;
import com.gunconfig.configurator.web.preparer.Preparer;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.util.Pair;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/configurator")
public class ConfiguratorController {

  private final BuildService buildService;
  private final GunPartService gunPartService;
  private final BuildMapper buildMapper;
  private final GunPartMapper gunPartMapper;
  private final Preparer preparer;
  private final CoordinatesService coordinatesService;
  private final ProductService productService;
  private final GunForChooseService gunForChooseService;
  private final ProductMapper productMapper;


  /**
   * First endpoint Get a tree of gun by provided schema
   */
  @CrossOrigin
  @GetMapping(value = "/build/schema/{base64code}")
  public BuildGunPartDto getBuildTreeDtoBySchema(@PathVariable String base64code) {
    String schema = buildMapper.fromBase64ToSchemaNode(base64code);
    GunPart buildTree = buildService.getBuildTreeBySchema(schema);
    BuildGunPartDto buildGunPartDto = gunPartMapper.toBuildTreeDto(buildTree, -1L);
    return buildGunPartDto;
  }

  /**
   * Second endpoint Get a list of gun parts for exact place by parent id and gunPart type
   */
  @CrossOrigin
  @GetMapping(value = "/gunpart")
  public List<ProductDto> getGunPartsByParentAndTypeNew(
      @RequestParam Map<String, String> requestParams) {
    log.info("Start GetGunPartsByParentAndTypeNew. Parameters: <requestParams{}>", requestParams);

    GetGunPartsByParentAndTypeRequest request = preparer.prepareRequest(requestParams);
    List<GunPart> gunParts = gunPartService.getGunPartsByParentAndType(request);
    List<ProductDto> productDtos = productMapper.fromGunPartsToProductDtos(gunParts);
    List<ProductDto> finalProductDtos = productService.checkOnIncompatible(productDtos,
        request.getCurrentBuildIds());

    log.info("Finish GetGunPartsByParentAndTypeNew. Answer size: <{}>", finalProductDtos.size());
    return finalProductDtos;
  }

  /**
   * Third endpoint Get a rendering info for exact gun part by id
   */
  //ToDo think about returning not buildTree structure,
  // but some special rendering info without children
  @CrossOrigin
  @GetMapping(value = "/gunpart/{parentId}/{productId}")
  public BuildGunPartDto getGunPartByParentIdAndProductId(@PathVariable Long parentId,
      @PathVariable Long productId) {
    log.info("Start GetGunPartByParentIdAndProductId. Parameters: <parentId{}, productId{}>",
        parentId, productId);

    GunPart gunPart = gunPartService.findByProductId(productId);
    BuildGunPartDto dto = gunPartMapper.toBuildGunPartDto(gunPart, parentId);

    log.info("Finish GetGunPartByParentIdAndProductId. Answer: <{}>", dto.getName());
    return dto;
  }

  @CrossOrigin
  @GetMapping(value = "/build/{id}")
  public Build getBuildById(@PathVariable Long id) {
    Build build = buildService.getBuildById(id);
    return build;
  }

  @CrossOrigin
  @PostMapping(value = "/coordinates")
  public List<Number> setCoordinatesForParentAndChild(@RequestBody SetCoordinatesRequest request) {
    List<Number> coordinatesUpdateResponse = coordinatesService.setCoordinatesForParentAndChild(
        request.getParentId(),
        request.getChildId(),
        request.getX(),
        request.getY());
    return coordinatesUpdateResponse;
  }

  @CrossOrigin
  @PostMapping(value = "/gunpart")
  public ShortGunPartDto createGunPart(@RequestBody CreateGunPartRequest request) {
    Product savedProduct = productService.save(CreateProductRequest.builder()
        .name(request.getName())
        .brand(request.getBrand())
        .type(request.getType())
        .productImageUrl(request.getProductImageUrl())
        .description(request.getDescription())
        .build());
    GunPart savedGunPart = gunPartService.save(new GunPart()
        .setProduct(savedProduct)
        .setThumbnailImage(request.getThumbnailImage())
        .setGunPartImageUrl(request.getGunPartImageUrl())
        .setWidth(request.getWidth()));
    return gunPartMapper.toShortDto(savedGunPart);
  }

  @CrossOrigin
  @GetMapping("/gunsForChoose")
  public List<GunForChoose> getGunsForChoose() {
    return gunForChooseService.findALl();
  }

}
