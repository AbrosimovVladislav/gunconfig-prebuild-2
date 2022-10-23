package com.gunconfig.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class TestController {

  @GetMapping(value = "/test", produces = MediaType.APPLICATION_JSON_VALUE)
  public String test() {
    log.info("TEST TEST TEST");
    return "Test";
  }

}
