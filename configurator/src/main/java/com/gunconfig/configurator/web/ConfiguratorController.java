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
     * First endpoint
     * Get a tree of gun by provided schema
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
     * Second endpoint
     * Get a list of gun parts for exact place by parent id and gunPart type
     */
    @CrossOrigin
    @GetMapping(value = "/gunpart")
    public List<ShortGunPartDto> getGunPartsByParentAndType(@RequestParam Map<String, String> requestParams) {
        GetGunPartsByParentAndTypeRequest request = preparer.prepareRequest(requestParams);
        List<GunPart> gunParts = gunPartService.getGunPartsByParentAndType(request);
        List<ShortGunPartDto> shortDtos = gunPartMapper.toShortDtos(gunParts);
        List<ShortGunPartDto> finalShortDtos = gunPartService.checkOnIncompatible(shortDtos, request.getCurrentBuildIds());
        //TODO shitty solution, think maybe to split on 3 endpoints???
        finalShortDtos = finalShortDtos.stream()
                .map(gunPart -> {
                    Pair<Double, Double> coords = coordinatesService.getCoordinatesByParentIdAndChildId(request.getParentId(), gunPart.getId());
                    gunPart.setX(coords.getFirst());
                    gunPart.setY(coords.getSecond());
                    return gunPart;
                }).collect(Collectors.toList());
        return finalShortDtos;
    }

    /**
     * Third endpoint
     * Get a rendering info for exact gun part by id
     */
    @CrossOrigin
    @GetMapping(value = "/gunpart/{parentId}/{id}")
    public RenderingGunPartDto getGunPartById(@PathVariable Long parentId, @PathVariable Long id) {
        GunPart gunPart = gunPartService.findById(id);
        RenderingGunPartDto dto = gunPartMapper.toRenderingDto(gunPart, parentId);
        return dto;
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


}
