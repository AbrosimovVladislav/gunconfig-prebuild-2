package com.gunconfig.configurator.service;

import com.gunconfig.configurator.repo.CoordinatesRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CoordinatesService {

    private final CoordinatesRepo coordinatesRepo;

    public Pair<Integer, Integer> getCoordinatesByParentIdAndChildId(Long parentId, Long childId) {
        if (parentId <= 0) {
            return Pair.of(0, 0);
        }
        Object[] coordinatesByParentAndChildIds = coordinatesRepo.findCoordinatesByParentAndChildIds(parentId, childId);
        Object[] qwe = (Object[]) coordinatesByParentAndChildIds[0];
        Integer x = (Integer) qwe[2];
        Integer y = (Integer) qwe[3];
        return Pair.of(x, y);
    }

}
