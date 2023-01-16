package com.gunconfig.configurator.web;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.gunconfig.configurator.model.GunPart;
import com.gunconfig.configurator.service.GunPartService;
import java.net.URL;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/test")
public class TestController {

  private final AmazonS3 s3Client;

  @Value("${do.spaces.bucket}")
  private String doSpaceBucket;

  @Value("${do.spaces.endpoint}")
  private String doSpaceEndpoint;
  private final GunPartService gunPartService;

  @GetMapping("/copy-images")
  public List<GunPart> copyImagesFromExternalToS3() {
    List<GunPart> gunParts = gunPartService.findAll();
    List<GunPart> savedParts = gunParts.stream()
        .filter(gp -> gp.getGunPartImageUrl().contains("line-f"))
        .map(gp -> {
          String imageName = gp.getProduct().getName();
          String savedImageLink = saveImageToStore(gp.getGunPartImageUrl(), imageName);
          gp.setGunPartImageUrl(savedImageLink);
          return gunPartService.saveOrUpdate(gp);
        }).collect(Collectors.toList());
    return savedParts;
  }

  public String saveImageToStore(String srcImageUrl, String imgName) {
    ObjectMetadata metadata = new ObjectMetadata();
    metadata.setContentType("image/png");

    try {
      var url = new URL(srcImageUrl);
      s3Client.putObject(
          new PutObjectRequest(doSpaceBucket, imgName, url.openStream(), metadata)
              .withCannedAcl(CannedAccessControlList.PublicRead));
    } catch (Exception e) {
      log.error("Image downloading failed for product image: " + imgName);
      e.printStackTrace();
    }
    return "https://" + doSpaceBucket + "." + doSpaceEndpoint + "/" + imgName;
  }

}
