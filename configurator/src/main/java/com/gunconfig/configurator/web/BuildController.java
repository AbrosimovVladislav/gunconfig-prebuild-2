package com.gunconfig.configurator.web;

import com.gunconfig.configurator.service.BuildService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/build")
public class BuildController {

    private final BuildService buildService;

    @CrossOrigin
    @GetMapping(value = "/base64/{buildId}")
    public ResponseEntity<String> getBase64CodeByBuildId(@PathVariable Long buildId) {
        String base64Code = buildService.getBase64CodeByBuildId(buildId);
        return ResponseEntity.ok(base64Code);
    }

}
