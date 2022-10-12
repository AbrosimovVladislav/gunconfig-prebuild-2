package com.gunconfig.service;

import com.gunconfig.model.Element;
import com.gunconfig.repo.ElementRepo;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ElementService {

  private final ElementRepo elementRepo;

  public List<Element> findAll() {
    return elementRepo.findAll();
  }

  public Element findById(Long id) {
    return elementRepo.findById(id)
        .orElseThrow(() -> new RuntimeException("There is no element with id: " + id));
  }

  public List<Element> getChildrenOfElementById(Long id) {
    List<Element> all = findAll();
    List<Element> children = all.stream()
        .filter(element ->
            element.getTarget().stream().map(Element::getElementId).toList().contains(id))
        .collect(Collectors.toList());
    return children;
  }
}
