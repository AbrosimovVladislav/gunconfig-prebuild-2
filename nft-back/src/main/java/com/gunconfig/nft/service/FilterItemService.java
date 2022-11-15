package com.gunconfig.nft.service;

import com.gunconfig.nft.model.filtration.FilterItem;
import com.gunconfig.nft.model.filtration.KeyPath;
import com.gunconfig.nft.repo.FilterItemRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FilterItemService {

    private final FilterItemRepo filterItemRepo;

    public List<FilterItem> findAll() {
        List<FilterItem> filterItems = filterItemRepo.findAll();
        filterItems.forEach(this::determineValues);
        filterItems.sort(Comparator.comparing(FilterItem::getRank));
        return filterItems;
    }

    public void determineValues(FilterItem filterItem) {
        FilterItem.FilterType type = filterItem.getType();
        switch (type) {
            case CHECKBOX:
                determineCheckboxValues(filterItem);
                break;
            case RANGE:
                determineRangeValues(filterItem);
                break;
            default:
                throw new UnsupportedOperationException(
                        "Filter type of " + filterItem.getFilterItemId() + " " + filterItem.getName() + " is wrong"
                );
        }
    }

    private void determineRangeValues(FilterItem filterItem) {
        KeyPath keyPath = filterItem.getKeyPath();
        List<String> values = filterItemRepo
                .selectFromDistinct(keyPath.getTargetParam(), keyPath.getTargetEntity())
                .stream()
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        filterItem.setValues(getMinMax(values));
    }

    private void determineCheckboxValues(FilterItem filterItem) {
        KeyPath keyPath = filterItem.getKeyPath();
        List<String> values = filterItemRepo
                .selectFromDistinct(keyPath.getTargetParam(), keyPath.getTargetEntity())
                .stream()
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        filterItem.setValues(values);
    }

    private List<String> getMinMax(List<String> values) {
        double min = Double.MAX_VALUE;
        double max = 0.;
        for (String value : values) {
            double currentValue = Double.parseDouble(value);
            min = Math.min(currentValue, min);
            max = Math.max(currentValue, max);
        }
        return List.of(String.valueOf(min), String.valueOf(max));
    }

}
