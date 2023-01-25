package com.gunconfig.nft.web.preparer;

import com.gunconfig.querybuilder.BasicEntity;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

@Component
public class PaginationPreparer implements Preparer {

    /**
     * Extract and prepare page and size parameter for next request
     **/
    @Override
    public void prepare(FilterAndPageable filterAndPageable, Class<? extends BasicEntity> entityClass) {
        Pageable pageable = filterAndPageable.getPageable();
        String page = filterAndPageable.getFilter().remove("page");
        String size = filterAndPageable.getFilter().remove("size");
        if (isNumeric(page)) {
            filterAndPageable.setPageable(
                    PageRequest.of(
                            Integer.parseInt(page),
                            pageable.getPageSize(),
                            pageable.getSort()
                    )
            );
        }
        if (isNumeric(size)) {
            filterAndPageable.setPageable(
                    PageRequest.of(
                            pageable.getPageNumber(),
                            Integer.parseInt(size),
                            pageable.getSort()
                    )
            );
        }
    }

    private static boolean isNumeric(String string) {
        if (string != null && string.length() != 0) {
            int l = string.length();
            for (int i = 0; i < l; ++i) {
                if (!Character.isDigit(string.codePointAt(i)))
                    return false;
            }
            return true;
        } else return false;
    }
}
