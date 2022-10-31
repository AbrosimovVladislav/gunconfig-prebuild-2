package com.gunconfig.service;

import com.gunconfig.model.GunPart;
import com.gunconfig.repo.GunPartRepo;

import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class GunPartService {

    private final GunPartRepo gunPartRepo;

    public List<GunPart> findAll() {
        return gunPartRepo.findAll();
    }

    public GunPart findById(Long id) {
        return gunPartRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no gun part with id: " + id));
    }

    public List<GunPart> getChildrenOfGunPartById(Long id) {
        List<GunPart> all = findAll();
        List<GunPart> children = all.stream()
                .filter(gunPart ->
                        gunPart.getTarget().stream().map(GunPart::getGunPartId).toList().contains(id))
                .collect(Collectors.toList());
        return children;
    }
}
