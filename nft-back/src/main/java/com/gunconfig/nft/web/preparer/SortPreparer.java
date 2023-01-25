package com.gunconfig.nft.web.preparer;

import com.gunconfig.nft.model.NFTCard;
import com.gunconfig.querybuilder.BasicEntity;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

@Component
public class SortPreparer implements Preparer {

    /**
     * Extract and prepare sort parameter for next request
     **/
    @Override
    public void prepare(FilterAndPageable filterAndPageable, Class<? extends BasicEntity> entityClass) {
        Pageable pageable = filterAndPageable.getPageable();
        String sortParam = filterAndPageable.getFilter().remove("sort");
        if (sortParam == null) {
            filterAndPageable.setPageable(getDefaultSortingProperty(pageable, entityClass));
        } else {
            String sortProp = sortParam.substring(0, sortParam.indexOf(","));
            Sort sort = Sort.by(pageable.getSort().getOrderFor(sortProp));
            filterAndPageable.setPageable(PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), sort));
        }
    }

    private static PageRequest getDefaultSortingProperty(Pageable pageable, Class<? extends BasicEntity> entityClass) {
        String sortingProperty = "";
        Sort.Direction dir = Sort.Direction.ASC;
        if (entityClass.isAssignableFrom(NFTCard.class)) {
            sortingProperty = NFTCard.MINTING_PRICE;
        }
        return PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.by(dir, sortingProperty));
    }
}
