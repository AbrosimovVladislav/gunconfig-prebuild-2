package com.gunconfig.nft.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImageService {

    //ToDo realize saving of base64 image to S3 with returning of picture
    public String saveImageToStore(String buildImage) {
        return "https://gunmarket.fra1.digitaloceanspaces.com/AR-15-Default_Build.png";
    }
}
