package com.gunconfig.nft.web.preparer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Pageable;

import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
public class FilterAndPageable {
    private Map<String, String> filter;
    private Pageable pageable;
}
