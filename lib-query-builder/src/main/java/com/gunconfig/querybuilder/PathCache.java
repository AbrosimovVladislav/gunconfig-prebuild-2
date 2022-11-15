package com.gunconfig.querybuilder;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import javax.persistence.criteria.Path;
import java.util.Map;

@Getter
@Component
@RequestScope
@RequiredArgsConstructor
public class PathCache {

    private final Map<String, Path> value;

}
