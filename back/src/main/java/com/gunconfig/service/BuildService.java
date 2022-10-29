package com.gunconfig.service;

import com.gunconfig.model.Build;
import com.gunconfig.repo.BuildRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BuildService {

    private final BuildRepo buildRepo;

    public Build save(Build build) {
        return buildRepo.save(build);
    }

}
