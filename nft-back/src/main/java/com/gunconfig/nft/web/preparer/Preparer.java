package com.gunconfig.nft.web.preparer;

import com.gunconfig.querybuilder.BasicEntity;

public interface Preparer {
    void prepare(FilterAndPageable filterAndPageable, Class<? extends BasicEntity> entityClass);
}
