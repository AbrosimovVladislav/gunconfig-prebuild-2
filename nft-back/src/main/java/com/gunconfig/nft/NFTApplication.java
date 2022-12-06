package com.gunconfig.nft;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@EnableEurekaClient
@EntityScan("com.gunconfig.nft.model")
@EnableJpaRepositories({
        "com.gunconfig.querybuilder",
        "com.gunconfig.nft.repo"
})
@SpringBootApplication(scanBasePackages = {
        "com.gunconfig.nft",
        "com.gunconfig.querybuilder"
})
public class NFTApplication {

  public static void main(String[] args) {
    SpringApplication.run(NFTApplication.class);
  }
}
