package com.gunconfig.querybuilder;

import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
class QBParamExtractor {

    QBParam extractQbParam(String paramKey, String paramValue) {
        List<String> entitiesAndLastIsParam = Arrays.asList(paramKey.split("\\."));

        return QBParam.builder()
                .paramName(entitiesAndLastIsParam.get(entitiesAndLastIsParam.size() - 1))
                .paramValue(paramValue)
                .operation(Operation.define(paramValue))
                .entities(entitiesAndLastIsParam.subList(0, entitiesAndLastIsParam.size() - 1))
                .build();
    }
}
