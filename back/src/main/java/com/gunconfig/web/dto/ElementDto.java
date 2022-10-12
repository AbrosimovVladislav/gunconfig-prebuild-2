package com.gunconfig.web.dto;

import com.gunconfig.model.Element;
import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ElementDto {

  private Long elementId;
  private String name;
  private String image;
  private String type;
  private List<Element> target;
  private List<Element> children;
}
