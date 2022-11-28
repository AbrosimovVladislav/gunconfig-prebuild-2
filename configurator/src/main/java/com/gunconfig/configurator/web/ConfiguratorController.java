package com.gunconfig.configurator.web;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.model.SchemaNode;
import com.gunconfig.configurator.service.BuildService;
import com.gunconfig.configurator.service.GunPartService;
import com.gunconfig.configurator.web.dto.request.BuildCreateRequest;
import com.gunconfig.configurator.web.dto.request.GetGunPartsByParentAndTypeRequest;
import com.gunconfig.configurator.web.dto.RenderingGunPartDto;
import com.gunconfig.configurator.web.dto.ShortGunPartDto;
import com.gunconfig.configurator.web.mapper.BuildMapper;
import com.gunconfig.configurator.web.mapper.GunPartMapper;
import com.gunconfig.configurator.web.preparer.Preparer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    /**
     * First endpoint
     * Get a tree of gun by provided schema
     */
    @CrossOrigin
    @GetMapping(value = "/build/schema/{base64code}")
    public GunPart getBuildTreeBySchema(@PathVariable String base64code) {
        SchemaNode schema = buildMapper.fromBase64ToSchemaNode(base64code);
        GunPart buildTree = buildService.getBuildTreeBySchema(schema);
        return buildTree;
    }

    /**
     * Second endpoint
     * Get a list of gun parts for exact place by parent id and gunPart type
     */
    @CrossOrigin
    @GetMapping(value = "/gunpart")
    public List<ShortGunPartDto> getGunPartsByParentAndType(@RequestParam Map<String, String> requestParams){
        GetGunPartsByParentAndTypeRequest request = preparer.prepareRequest(requestParams);
        List<GunPart> gunParts = gunPartService.getGunPartsByParentAndType(request);
        List<ShortGunPartDto> shortDtos = gunPartMapper.toShortDtos(gunParts);
        List<ShortGunPartDto> finalShortDtos = gunPartService.checkOnIncompatible(shortDtos,request.getCurrentBuildIds());
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
    public Build createBuild(@RequestBody BuildCreateRequest request) {
        Build build = buildMapper.fromRequestToBuild(request);
        Build savedBuild = buildService.save(build);
        return savedBuild;
    }


}
