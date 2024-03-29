package com.gunconfig.nft.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Base64;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ImageService {

  private final AmazonS3 s3Client;

  private static final String IMAGE_CONTENT_TYPE = "image/png";

  @Value("${do.spaces.bucket}")
  private String doSpaceBucket;

  @Value("${do.spaces.endpoint}")
  private String doSpaceEndpoint;

  /**
   * Save base64 image to S3 store with provided name
   **/
  public String saveImageToStore(String name, String base64Image) {
    ObjectMetadata metadata = new ObjectMetadata();
    metadata.setContentType(IMAGE_CONTENT_TYPE);

    try {
      base64Image = base64Image.replace("data:image/png;base64,","");
      byte[] decodedBytes = Base64.getDecoder().decode(base64Image);
      InputStream inputStream = new ByteArrayInputStream(decodedBytes);
      s3Client.putObject(
          new PutObjectRequest(doSpaceBucket, name, inputStream, metadata)
              .withCannedAcl(CannedAccessControlList.PublicRead));
    } catch (Exception e) {
      log.error("Image downloading failed for product image: " + name);
      e.printStackTrace();
    }
    return "https://" + doSpaceBucket + "." + doSpaceEndpoint + "/" + name;
  }

  //ToDo implement creating of real NFT image with background etc here
  public String createNFTImage(String buildImageUrl) {
    return buildImageUrl;
  }
}
