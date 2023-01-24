package com.gunconfig.configurator.web;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.service.BuildService;
import com.gunconfig.configurator.web.mapper.BuildMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/build")
public class BuildController {

  private final BuildService buildService;
  private final BuildMapper buildMapper;

  @CrossOrigin
  @GetMapping(value = "/base64/{buildId}")
  public ResponseEntity<String> getBase64CodeByBuildId(@PathVariable Long buildId) {
    String base64Code = buildService.getBase64CodeByBuildId(buildId);
    return ResponseEntity.ok(base64Code);
  }

  @CrossOrigin
  @GetMapping("/buildId/{base64Code}")
  public ResponseEntity<Long> getBuildIdByBase64Code(@PathVariable String base64Code) {
    String schemaNode = buildMapper.fromBase64ToSchemaNode(base64Code);
    Build build = buildService.findByBase64Code(schemaNode);
    return ResponseEntity.ok(build.getBuildId());
  }

}
