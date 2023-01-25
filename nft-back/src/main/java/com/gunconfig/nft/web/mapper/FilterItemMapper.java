package com.gunconfig.nft.web.mapper;

import com.gunconfig.nft.model.filtration.FilterItem;
import com.gunconfig.nft.web.dto.FilterItemDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class FilterItemMapper {

    /**
     * Map List of FilterItem to List of FilterItemDto
     **/
    public List<FilterItemDto> toDtos(List<FilterItem> filterItems) {
        return filterItems.stream().map(this::toDto).toList();
    }

    /**
     * Map FilterItem to FilterItemDto
     **/
    public FilterItemDto toDto(FilterItem filterItem) {
        return new FilterItemDto()
                .setShowName(filterItem.getName())
                .setFilterKey(filterItem.getKeyPath().getValue())
                .setFilterType(filterItem.getType().name())
                .setRank(filterItem.getRank())
                .setValue(filterItem.getValues());
    }

}
