package com.gunconfig.web;

import com.gunconfig.model.Element;
import com.gunconfig.service.ElementService;
import com.gunconfig.web.dto.ElementDto;
import com.gunconfig.web.mapper.ElementMapper;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class TestController {

  private final ElementService elementService;
  private final ElementMapper elementMapper;

  @GetMapping(value = "/test", produces = MediaType.APPLICATION_JSON_VALUE)
  public String test() {
    log.info("TEST TEST TEST");
    return "Test";
  }

  @GetMapping(value = "/elements", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<Element> findAll() {
    return elementService.findAll();
  }

  @GetMapping(value = "/element/{id}")
  public ElementDto findById(@PathVariable Long id) {
    Element element = elementService.findById(id);
    ElementDto elementDto = elementMapper.elementToDto(element);
    log.info("Element founded: " + elementDto);
    return elementDto;
  }

}
