package com.gunconfig.configurator.web.mapper;

import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.service.CoordinatesService;
import com.gunconfig.configurator.web.dto.BuildGunPartDto;
import com.gunconfig.configurator.web.dto.ShortGunPartDto;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class GunPartMapper {

  private final CoordinatesService coordinatesService;

  //ToDo toBuildTreeDto and toBuildGunPartDto making same bit one with children recursively
  // , another without. Finally we should have one mapper for both situations, or two different dtos
  // , like one for full build tree to render, another just for rendering exact gun part
  public BuildGunPartDto toBuildTreeDto(GunPart gunPart, Long parentId) {

    Pair<Double, Double> coordinates = coordinatesService.getCoordinatesByParentIdAndChildId(
        parentId, gunPart.getGunPartId());

    BuildGunPartDto build = BuildGunPartDto.builder()
        .id(gunPart.getGunPartId())
        .productId(gunPart.getProduct().getProductId())
        .name(gunPart.getProduct().getName())
        .productImageUrl(gunPart.getProduct().getProductImageUrl())
        .description(gunPart.getProduct().getDescription())
        .brand(gunPart.getProduct().getBrand())
        .type(gunPart.getProduct().getType().toString())
        .x(coordinates.getFirst())
        .y(coordinates.getSecond())
        .thumbnailImage(gunPart.getThumbnailImage())
        .image(gunPart.getGunPartImageUrl())
        .width(gunPart.getWidth())
        .build();

    if (gunPart.getChildren() != null) {
      List<BuildGunPartDto> children = gunPart.getChildren().stream()
          .map(childGunPart -> toBuildTreeDto(childGunPart, gunPart.getGunPartId()))
          .toList();
      build.setChildren(children);
    }

    return build;
  }

  public BuildGunPartDto toBuildGunPartDto(GunPart gunPart, Long parentId) {
    Pair<Double, Double> coordinates = coordinatesService.getCoordinatesByParentIdAndChildId(
        parentId, gunPart.getGunPartId());
    return BuildGunPartDto.builder()
        .id(gunPart.getGunPartId())
        .productId(gunPart.getProduct().getProductId())
        .name(gunPart.getProduct().getName())
        .productImageUrl(gunPart.getProduct().getProductImageUrl())
        .description(gunPart.getProduct().getDescription())
        .brand(gunPart.getProduct().getBrand())
        .type(gunPart.getProduct().getType().toString())
        .x(coordinates.getFirst())
        .y(coordinates.getSecond())
        .thumbnailImage(gunPart.getThumbnailImage())
        .image(gunPart.getGunPartImageUrl())
        .width(gunPart.getWidth())
        .build();
  }

  public ShortGunPartDto toShortDto(GunPart gunPart) {
    List<Long> incompatibleIds = new ArrayList<>();
    List<GunPart> incompatibles = gunPart.getIncompatibles();
    if (incompatibles != null && !incompatibles.isEmpty()) {
      incompatibleIds = gunPart.getIncompatibles().stream().map(GunPart::getGunPartId).toList();
    }
    return ShortGunPartDto.builder()
        .id(gunPart.getGunPartId())
        .name(gunPart.getProduct().getName())
        .image(gunPart.getGunPartImageUrl())
        .type(gunPart.getProduct().getType().toString())
        .width(gunPart.getWidth())
        .brand(gunPart.getProduct().getBrand())
        .description(gunPart.getProduct().getDescription())
        .thumbnailImage(gunPart.getThumbnailImage())
        .incompatibleIds(incompatibleIds)
        .build();
  }
}
