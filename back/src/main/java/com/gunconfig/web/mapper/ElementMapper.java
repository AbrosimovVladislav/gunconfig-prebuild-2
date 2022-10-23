package com.gunconfig.web.mapper;

import com.gunconfig.model.Element;
import com.gunconfig.service.ElementService;
import com.gunconfig.web.dto.catalog.ShortElementDto;
import com.gunconfig.web.dto.configurator.ConfiguratorElementDto;

import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ElementMapper {

    private final ElementService elementService;

    public ConfiguratorElementDto configuratorElementDto(Element element) {
        List<Element> target = element.getTarget();
        List<Element> children = elementService.getChildrenOfElementById(
                element.getElementId());
        return ConfiguratorElementDto.builder()
                .elementId(element.getElementId())
                .name(element.getProduct().getName())
                .image(element.getImage())
                .type(element.getProduct().getType().toString())
                .target(target.isEmpty() ? null : target)
                .children(children.isEmpty() ? null : children)
                .build();
    }

    public List<ShortElementDto> elementsToShortElementDtos(List<Element> elements) {
        return elements.stream().map(this::elementToShortElementDto).collect(Collectors.toList());
    }

    public ShortElementDto elementToShortElementDto(Element element) {
        return ShortElementDto.builder()
                .elementId(element.getElementId())
                .productId(element.getProduct().getProductId())
                .productName(element.getProduct().getName())
                .productType(element.getProduct().getType().toString())
                .imageUrl(element.getImage())
                .build();
    }

}
