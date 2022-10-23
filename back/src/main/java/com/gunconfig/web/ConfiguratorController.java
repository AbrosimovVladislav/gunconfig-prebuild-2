package com.gunconfig.web;

import com.gunconfig.model.Element;
import com.gunconfig.service.ElementService;
import com.gunconfig.web.dto.configurator.ConfiguratorElementDto;
import com.gunconfig.web.mapper.ElementMapper;
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

    private final ElementService elementService;
    private final ElementMapper elementMapper;

    @GetMapping(value = "/elements", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Element> findAll() {
        return elementService.findAll();
    }

    @GetMapping(value = "/element/{id}")
    public ConfiguratorElementDto findById(@PathVariable Long id) {
        Element element = elementService.findById(id);
        ConfiguratorElementDto configuratorElementDto = elementMapper.configuratorElementDto(element);
        log.info("Element founded: " + configuratorElementDto);
        return configuratorElementDto;
    }

}
