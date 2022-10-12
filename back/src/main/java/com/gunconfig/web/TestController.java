package com.gunconfig.web;

import com.gunconfig.model.Element;
import com.gunconfig.service.ElementService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class TestController {

  private final ElementService elementService;

  @GetMapping(value = "/test", produces = MediaType.APPLICATION_JSON_VALUE)
  public String test() {
    log.info("TEST TEST TEST");
    return "Test";
  }

  @GetMapping(value = "/elements", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<Element> findAll() {
    return elementService.findAll();
  }

}
