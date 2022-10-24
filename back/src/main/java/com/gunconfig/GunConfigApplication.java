package com.gunconfig;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class GunConfigApplication {
  public static void main(String[] args) {
    SpringApplication.run(GunConfigApplication.class);
  }
}
