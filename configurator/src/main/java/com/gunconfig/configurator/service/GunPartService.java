package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.repo.GunPartRepo;
import com.gunconfig.configurator.web.dto.request.GetGunPartsByParentAndTypeRequest;
import com.gunconfig.configurator.web.dto.ShortGunPartDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class GunPartService {

    private final GunPartRepo gunPartRepo;

    public GunPart findById(Long id) {
        return gunPartRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no gun part with id: " + id));
    }

    //ToDo refactor basic repo method for returning needed children, not full tree (https://app.clickup.com/t/33dx6te)
    public List<GunPart> getGunPartsByParentAndType(GetGunPartsByParentAndTypeRequest request) {
        GunPart parent = gunPartRepo.findById(request.getParentId())
                .orElseThrow(() -> new RuntimeException("There is no gun part with id: " + request.getParentId()));
        List<GunPart> children = parent.getChildren();
        List<GunPart> childrenOfNeededType = children.stream()
                .filter(child -> request.getTypeOfProduct().equals(child.getProduct().getType()))
                .toList();
        return childrenOfNeededType;
    }

    public List<ShortGunPartDto> checkOnIncompatible(List<ShortGunPartDto> shortDtos, List<Long> currentBuildIds) {
        shortDtos.forEach(shortGunPartDto -> {
            List<Long> incompatibleIds = shortGunPartDto.getIncompatibleIds();
            currentBuildIds.stream()
                    .filter(incompatibleIds::contains)
                    .findAny().ifPresent(e -> shortGunPartDto.setIncompatible(true));
        });

        return shortDtos;
    }
}
