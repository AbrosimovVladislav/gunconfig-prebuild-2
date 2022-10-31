package com.gunconfig.web;

import com.gunconfig.model.GunPart;
import com.gunconfig.service.GunPartService;
import com.gunconfig.web.dto.configurator.ConfiguratorGunPartDto;
import com.gunconfig.web.mapper.GunPartMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/configurator")
public class ConfiguratorController {

    private final GunPartService gunPartService;
    private final GunPartMapper gunPartMapper;

    @GetMapping(value = "/elements", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<GunPart> findAll() {
        return gunPartService.findAll();
    }

    @GetMapping(value = "/element/{id}")
    public ConfiguratorGunPartDto findById(@PathVariable Long id) {
        GunPart gunPart = gunPartService.findById(id);
        ConfiguratorGunPartDto configuratorGunPartDto = gunPartMapper.gunPartToConfiguratorGunPartDto(gunPart);
        log.info("Gun part founded: " + configuratorGunPartDto);
        return configuratorGunPartDto;
    }

}
