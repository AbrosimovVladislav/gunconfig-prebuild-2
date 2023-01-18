package com.gunconfig.configurator.web;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.model.Product;
import com.gunconfig.configurator.model.SchemaNode;
import com.gunconfig.configurator.service.BuildService;
import com.gunconfig.configurator.service.CoordinatesService;
import com.gunconfig.configurator.service.GunPartService;
import com.gunconfig.configurator.service.ProductService;
import com.gunconfig.configurator.web.dto.BuildGunPartDto;
import com.gunconfig.configurator.web.dto.BuildWithProductsDto;
import com.gunconfig.configurator.web.dto.RenderingGunPartDto;
import com.gunconfig.configurator.web.dto.ShortGunPartDto;
import com.gunconfig.configurator.web.dto.request.*;
import com.gunconfig.configurator.web.mapper.BuildMapper;
import com.gunconfig.configurator.web.mapper.GunPartMapper;
import com.gunconfig.configurator.web.preparer.Preparer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.util.Pair;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

  /**
   * First endpoint Get a tree of gun by provided schema
   */
  @CrossOrigin
  @GetMapping(value = "/build/schema/{base64code}")
  public BuildGunPartDto getBuildTreeDtoBySchema(@PathVariable String base64code) {
    SchemaNode schema = buildMapper.fromBase64ToSchemaNode(base64code);
    GunPart buildTree = buildService.getBuildTreeBySchema(schema);
    BuildGunPartDto buildGunPartDto = gunPartMapper.toBuildTreeDto(buildTree, -1L);
    return buildGunPartDto;
  }

  /**
   * Second endpoint Get a list of gun parts for exact place by parent id and gunPart type
   */
  @CrossOrigin
  @GetMapping(value = "/gunpart")
  public List<ShortGunPartDto> getGunPartsByParentAndType(
      @RequestParam Map<String, String> requestParams) {
    GetGunPartsByParentAndTypeRequest request = preparer.prepareRequest(requestParams);
    List<GunPart> gunParts = gunPartService.getGunPartsByParentAndType(request);
    List<ShortGunPartDto> shortDtos = gunPartMapper.toShortDtos(gunParts);
    List<ShortGunPartDto> finalShortDtos = gunPartService.checkOnIncompatible(shortDtos,
        request.getCurrentBuildIds());
    //TODO shitty solution, think maybe to split on 3 endpoints???
    finalShortDtos = finalShortDtos.stream()
        .map(gunPart -> {
          Pair<Double, Double> coords = coordinatesService.getCoordinatesByParentIdAndChildId(
              request.getParentId(), gunPart.getId());
          gunPart.setX(coords.getFirst());
          gunPart.setY(coords.getSecond());
          return gunPart;
        }).collect(Collectors.toList());
    return finalShortDtos;
  }

  /**
   * Third endpoint Get a rendering info for exact gun part by id
   */
  @CrossOrigin
  @GetMapping(value = "/gunpart/{parentId}/{id}")
  public RenderingGunPartDto getGunPartById(@PathVariable Long parentId, @PathVariable Long id) {
    GunPart gunPart = gunPartService.findById(id);
    RenderingGunPartDto dto = gunPartMapper.toRenderingDto(gunPart, parentId);
    return dto;
  }

  @CrossOrigin
  @GetMapping("/buildBySchema/{schemaBase64Code}")
  public Long getBuildIdBySchema(@PathVariable String schemaBase64Code) {
    SchemaNode schemaNode = buildMapper.fromBase64ToSchemaNode(schemaBase64Code);
    Build build = buildService.findBySchemaBase64Code(schemaNode);
    return build.getBuildId();
  }

  @CrossOrigin
  @GetMapping(value = "/build/{id}")
  public Build getBuildById(@PathVariable Long id) {
    Build build = buildService.getBuildById(id);
    return build;
  }

  @CrossOrigin
  @PostMapping(value = "/build")
  public BuildWithProductsDto createBuild(@RequestBody BuildCreateRequest request) {
    if (request.getSchemaNode() == null && request.getBase64Code() != null) {
      SchemaNode schemaNode = buildMapper.fromBase64ToSchemaNode(request.getBase64Code());
      request.setSchemaNode(schemaNode);
    }
    Build build = buildMapper.fromRequestToBuild(request);
    Build savedBuild = buildService.save(build);
    return buildMapper.fromEntityToBuildWithProductsDto(savedBuild);
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
  public List<GunForChooseDto> getGunsForChoose() {
    return List.of(
        new GunForChooseDto("Colt AR-15", "https://gunmarket.fra1.digitaloceanspaces.com/AC-149",
            "ewogICJpZCI6IDEsCiAgImNoaWxkcmVuIjogWwogICAgewogICAgICAiaWQiOiAzLAogICAgICAiY2hpbGRyZW4iOiBbCiAgICAgICAgewogICAgICAgICAgImlkIjogOSwKICAgICAgICAgICJjaGlsZHJlbiI6IFtdCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgewogICAgICAiaWQiOiA2LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTAsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxMSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEyLAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTMsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxNCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDE1LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTYsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxNywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0="),
        new GunForChooseDto("ADC AR-9", "https://gunmarket.fra1.digitaloceanspaces.com/AC-6185",
            "ewogICJpZCI6IDkwLAogICJjaGlsZHJlbiI6IFsKICAgIHsKICAgICAgImlkIjogOTEsCiAgICAgICJjaGlsZHJlbiI6IFsKICAgICAgICB7CiAgICAgICAgICAiaWQiOiA0LAogICAgICAgICAgImNoaWxkcmVuIjogW10KICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDk1LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogOTgsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiA1MCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDE3LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogOTIsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOjUsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiA5MywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDk0LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogOTYsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiA5NywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0="),
        new GunForChooseDto("AK-103", "https://gunmarket.fra1.digitaloceanspaces.com/AC-1825",
            "ewogICJpZCI6IDEwMCwKICAiY2hpbGRyZW4iOiBbCiAgICB7CiAgICAgICJpZCI6IDEwMSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwMiwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwMywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwNCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwNSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwNiwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwNywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwOCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwOSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0=")
    );
  }

}

@Data
@AllArgsConstructor
class GunForChooseDto {

  private String name;
  private String gunImageUrl;
  private String buildSchemaCode;
}
