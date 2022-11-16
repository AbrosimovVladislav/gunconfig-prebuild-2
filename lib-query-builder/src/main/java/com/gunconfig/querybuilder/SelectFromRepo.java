package com.gunconfig.querybuilder;

import java.util.List;

public interface SelectFromRepo {
    List<String> selectFromDistinct(String column, String table);
}
