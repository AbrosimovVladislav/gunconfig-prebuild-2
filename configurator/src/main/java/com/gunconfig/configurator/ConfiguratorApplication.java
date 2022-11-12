package com.gunconfig.configurator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ConfiguratorApplication {

  public static void main(String[] args) {
    SpringApplication.run(ConfiguratorApplication.class);
  }
}
