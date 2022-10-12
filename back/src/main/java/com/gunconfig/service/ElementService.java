package com.gunconfig.service;

import com.gunconfig.model.Element;
import com.gunconfig.repo.ElementRepo;
import java.util.List;
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

}
