package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.model.SchemaNode;
import com.gunconfig.configurator.repo.BuildRepo;
import com.gunconfig.configurator.repo.GunPartRepo;
import com.gunconfig.configurator.service.converter.SchemaNodeConverter;
import java.util.Base64;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BuildService {

  private final BuildRepo buildRepo;
  private final GunPartRepo gunPartRepo;
  private final SchemaNodeConverter converter;

  @Transactional
  public Build findBySchema(String schemaNode) {
    Build build = buildRepo.findBySchema(schemaNode);
    return build == null ? new Build().setBuildId(-1L) : build;
  }

  /**
   * Save new build with id = MaxId+1
   **/
  public Build save(Build build) {
    Long newBuildId = buildRepo.getMaxBuildId() + 1L;
    build.setBuildId(newBuildId);
    return buildRepo.save(build);
  }

  public Build getBuildById(Long id) {
    return buildRepo.findById(id)
        .orElseThrow(() -> new RuntimeException("There is no build with id: " + id));
  }

  public GunPart getBuildTreeBySchema(String schema) {
    SchemaNode schemaNode = converter.convertToEntityAttribute(schema);
    GunPart gunPart = recursiveBuildEnrich(schemaNode,
        gunPartRepo.findByGunPartId(schemaNode.getId()));
    return gunPart;
  }

  private GunPart recursiveBuildEnrich(SchemaNode schemaNode, GunPart gunPartTree) {
    List<SchemaNode> children = schemaNode.getChildren();
    List<GunPart> enrichedChildren = children.stream()
        .map(e -> gunPartRepo.findByGunPartId(e.getId())).toList();
    gunPartTree.setChildren(enrichedChildren);

    if (!children.isEmpty()) {
      children.forEach(e -> recursiveBuildEnrich(e, gunPartRepo.findByGunPartId(e.getId())));
    }
    return gunPartTree;
  }

  public String getBase64CodeByBuildId(Long buildId) {
    Build build = buildRepo.findById(buildId).orElseThrow(
        () -> new RuntimeException("Build with id " + buildId + " not found"));

    return Base64.getEncoder().encodeToString(build.getSchema().getBytes());
  }

}
