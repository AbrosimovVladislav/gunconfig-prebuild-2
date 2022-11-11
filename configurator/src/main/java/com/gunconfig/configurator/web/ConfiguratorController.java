package com.gunconfig.configurator.web;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.model.SchemaNode;
import com.gunconfig.configurator.service.BuildService;
import com.gunconfig.configurator.service.GunPartService;
import com.gunconfig.configurator.web.dto.BuildCreateRequest;
import com.gunconfig.configurator.web.dto.GunPartDto;
import com.gunconfig.configurator.web.mapper.BuildMapper;
import com.gunconfig.configurator.web.mapper.GunPartMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/configurator")
public class ConfiguratorController {

    private final BuildService buildService;
    private final GunPartService gunPartService;
    private final BuildMapper buildMapper;
    private final GunPartMapper gunPartMapper;

    /**
     * First endpoint
     * Get a tree of gun by provided shema
     */
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

    /**
     * Third endpoint
     * Get a rendering info for exact gun part by id
     */
    @GetMapping(value = "/gunpart/{id}")
    public GunPartDto getGunPartById(@PathVariable Long id) {
        GunPart gunPart = gunPartService.findById(id);
        GunPartDto dto = gunPartMapper.gunPartToDto(gunPart);
        return dto;
    }

    @GetMapping(value = "/build/{id}")
    public Build getBuildById(@PathVariable Long id) {
        Build build = buildService.getBuildById(id);
        return build;
    }

    @PostMapping(value = "/build")
    public Build createBuild(@RequestBody BuildCreateRequest request) {
        Build build = buildMapper.fromRequestToBuild(request);
        Build savedBuild = buildService.save(build);
        return savedBuild;
    }


}
