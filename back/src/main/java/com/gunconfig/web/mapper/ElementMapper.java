package com.gunconfig.web.mapper;

import com.gunconfig.model.Element;
import com.gunconfig.service.ElementService;
import com.gunconfig.web.dto.ElementDto;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ElementMapper {

  private final ElementService elementService;

  public ElementDto elementToDto(Element element) {
    List<Element> target = element.getTarget();
    List<Element> children = elementService.getChildrenOfElementById(
        element.getElementId());
    return ElementDto.builder()
        .elementId(element.getElementId())
        .name(element.getProduct().getName())
        .image(element.getImage())
        .type(element.getProduct().getType().toString())
        .target(target.isEmpty() ? null : target)
        .children(children.isEmpty() ? null : children)
        .build();
  }

}
