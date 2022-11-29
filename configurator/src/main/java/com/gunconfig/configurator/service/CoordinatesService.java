package com.gunconfig.configurator.service;

import com.gunconfig.configurator.repo.CoordinatesRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class CoordinatesService {

    private final CoordinatesRepo coordinatesRepo;

    //ToDo refactor to GunPartChildren
    @Transactional
    public List<Number> setCoordinatesForParentAndChild(Long parentId, Long childId, Integer x, Integer y) {
        Pair<Integer, Integer> existingCoordinates = getCoordinatesByParentIdAndChildId(parentId, childId);
        if (existingCoordinates == null) {
            coordinatesRepo.createCoordinates(parentId, childId, x, y);
            log.info("Coordinates creation successful: " + parentId + " : " + childId + " : " + x + " : " + y);
        } else {
            if (!(existingCoordinates.getFirst().equals(x) && existingCoordinates.getSecond().equals(y))) {
                coordinatesRepo.updateCoordinates(parentId, childId, x, y);
                log.info("Coordinates update successful: " + parentId + " : " + childId + " : " + x + " : " + y);
            }
        }

        return List.of(parentId, childId, x, y);
    }

    //ToDo refactor to GunPartChildren
    public Pair<Integer, Integer> getCoordinatesByParentIdAndChildId(Long parentId, Long childId) {
        if (parentId <= 0) {
            return Pair.of(0, 0);
        }
        Object[] coordinatesByParentAndChildIds = coordinatesRepo.findCoordinatesByParentAndChildIds(parentId, childId);
        if (coordinatesByParentAndChildIds == null || coordinatesByParentAndChildIds.length == 0) {
            return null;
        }
        Object[] dbResponse = (Object[]) coordinatesByParentAndChildIds[0];
        Integer x = (Integer) dbResponse[0];
        Integer y = (Integer) dbResponse[1];
        return Pair.of(x, y);
    }

}
