package com.gunconfig.configurator.service;

import com.gunconfig.configurator.repo.CoordinatesRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CoordinatesService {

    private final CoordinatesRepo coordinatesRepo;

    @Transactional
    public List<Number> setCoordinatesForParentAndChild(Long parentId, Long childId, Integer x, Integer y) {
        Pair<Integer, Integer> existingCoordinates = getCoordinatesByParentIdAndChildId(parentId, childId);
        if (existingCoordinates == null) {
            coordinatesRepo.createCoordinates(parentId, childId, x, y);
        } else {
            coordinatesRepo.updateCoordinates(parentId, childId, x, y);
        }
        return List.of(parentId, childId, x, y);
    }

    public Pair<Integer, Integer> getCoordinatesByParentIdAndChildId(Long parentId, Long childId) {
        if (parentId <= 0) {
            return Pair.of(0, 0);
        }
        Object[] coordinatesByParentAndChildIds = coordinatesRepo.findCoordinatesByParentAndChildIds(parentId, childId);
        if (coordinatesByParentAndChildIds == null || coordinatesByParentAndChildIds.length == 0) {
            return null;
        }
        Object[] qwe = (Object[]) coordinatesByParentAndChildIds[0];
        Integer x = (Integer) qwe[2];
        Integer y = (Integer) qwe[3];
        return Pair.of(x, y);
    }

}
