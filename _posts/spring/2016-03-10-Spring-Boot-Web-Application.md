---
layout: post
category : java-Spring
tags : [Spring Boot Tutorial]
weight: 102
---

{% include JB/setup %}

## Introduction

Spring is a configuration (annotation/xml) based framework. One annotation in spring does lots of job for us. Needless to say spring configurations are very powerful in nature. However, as a part of the continuous improvement in Spring framwork, Spring boot has been introduced to serve the following advantages

  * Creates stand alone spring applications. Embedded Tomcat/Jetty comes with spring boot so developer does not require to deploy the application in any web application.
  * Automatically configure Spring whenever possible
  * Provide production-ready features such as metrics, health checks and externalized configuration
  * There is no need of xml configuration
  * No need to add all dependancies in POM. It adds all required latest version of the dependencies.

**In this blog I am going to discuss the followings**


  * Write and execute a Stanalone Spring boot application
  * Deploy Spring boot application in tomcat
  * Integration of Junit with Spring boot application
  * Exception handling for Spring Restful webservices
