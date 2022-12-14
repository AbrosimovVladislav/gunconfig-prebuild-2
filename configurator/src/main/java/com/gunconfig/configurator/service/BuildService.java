package com.gunconfig.configurator.service;

import com.gunconfig.configurator.model.Build;
import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.model.SchemaNode;
import com.gunconfig.configurator.repo.BuildRepo;
import com.gunconfig.configurator.repo.GunPartRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BuildService {

    private final BuildRepo buildRepo;
    private final GunPartRepo gunPartRepo;

    public Build save(Build build) {
        Long newBuildId = buildRepo.getMaxBuildId() + 1L;
        build.setBuildId(newBuildId);
        return buildRepo.save(build);
    }

    public Build getBuildById(Long id) {
        return buildRepo.findById(id).orElseThrow(() -> new RuntimeException("There is no build with id: " + id));
    }

    public GunPart getBuildTreeBySchema(SchemaNode schema) {
        GunPart gunPart = recursiveBuildEnrich(schema, gunPartRepo.findByGunPartId(schema.getId()));
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

//    private GunPart recursiveBuildEnrich(BuildNode buildNode, GunPart gunPartTree) {
//        List<BuildNode> children = buildNode.getChildren();
//        List<GunPart> enrichedChildren = children.stream()
//                .map(e -> gunPartRepo.findByGunPartId(e.getGunPartId())).toList();
//        gunPartTree.setChildren(enrichedChildren);
//
//        if (!children.isEmpty()) {
//            children.forEach(e -> recursiveBuildEnrich(e, gunPartRepo.findByGunPartId(e.getGunPartId())));
//        }
//        return gunPartTree;
//    }

//    public GunPart getBuildTreeById(Long id) {
//        Build build = buildRepo.findById(id).orElseThrow(() -> new RuntimeException("There is no build with id: " + id));
//        List<Long> buildPartsIds = build.getGunParts().stream().map(GunPart::getGunPartId).toList();
//        GunPart buildTree = build.getRootGunPart();
//
//        GunPart resultTree = recursiveTreeCheck(buildTree, buildPartsIds);
//        return resultTree;
//    }

//    private GunPart recursiveTreeCheck(GunPart buildTree, List<Long> buildPartsIds) {
//        List<GunPart> activeChildren = buildTree.getChildren().stream()
//                .filter(child -> buildPartsIds.contains(child.getGunPartId())).toList();
//
//        activeChildren.stream()
//                .peek(e -> buildTree.setChildren(activeChildren))
//                .forEach(child -> {
//                    recursiveTreeCheck(child, buildPartsIds);
//                });
//
//        return buildTree;
//    }

//    private GunPart recursiveTreeCheck2(GunPart buildTree, List<Long> buildPartsIds) {
//        buildTree.setActive(true);
//
//        buildTree.getChildren().stream()
//                .filter(child -> buildPartsIds.contains(child.getGunPartId()))
//                .forEach(child -> {
//                    child.setActive(true);
//                    recursiveTreeCheck(child, buildPartsIds);
//                });
//
//        return buildTree;
//    }

//    private GunPart recursiveTreeCheck3(GunPart buildTree, List<Long> buildPartsIds) {
//        buildTree.setActive(true);
//
//        buildTree.getChildren().forEach(child -> {
//            if (buildPartsIds.contains(child.getGunPartId())) {
//                child.setActive(true);
//                recursiveTreeCheck(child, buildPartsIds);
//            } else {
//                buildTree.getChildren().removeIf(child::equals);
//            }
//        });
//
//        return buildTree;
//    }
}
