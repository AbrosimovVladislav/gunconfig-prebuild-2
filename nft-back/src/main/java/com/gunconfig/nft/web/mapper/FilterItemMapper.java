package com.gunconfig.nft.web.mapper;

import com.gunconfig.nft.model.filtration.FilterItem;
import com.gunconfig.nft.web.dto.FilterItemDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class FilterItemMapper {

    public List<FilterItemDto> toDtos(List<FilterItem> filterItems) {
        return filterItems.stream().map(this::toDto).toList();
    }

    public FilterItemDto toDto(FilterItem filterItem) {
        return new FilterItemDto()
                .setShowName(filterItem.getName())
                .setFilterKey(filterItem.getKeyPath().getValue())
                .setFilterType(filterItem.getType().name())
                .setRank(filterItem.getRank())
                .setValue(filterItem.getValues());
    }

}
