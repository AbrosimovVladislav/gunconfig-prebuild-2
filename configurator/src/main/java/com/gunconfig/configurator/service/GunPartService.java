package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.repo.GunPartRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class GunPartService {

    private final GunPartRepo gunPartRepo;

    public GunPart findById(Long id) {
        return gunPartRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no gun part with id: " + id));
    }
}
