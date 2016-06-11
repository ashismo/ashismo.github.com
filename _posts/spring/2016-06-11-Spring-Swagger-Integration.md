---
layout: post
category : java-Spring
tags : [Spring Swagger Integration Tutorial]
weight: 105
---

{% include JB/setup %}

#### Introduction

Swagger is a simple yet powerful representation of your RESTful API. Swagger is an open source software. With a Swagger-enabled API, you get interactive documentation.Swagger supports almost every modern programming language and deployment environment.  

In this example, I am going to show how to integrate Swagger with a Spring boot applicaton. In my previous <a href="http://ashismo.github.io/java-spring/2016/03/10/Spring-Boot-Web-Application" target="_blank">blog</a>, I have shown how to create a spring boot application. In this blog, I shall integrate swagger just making 3 changes i.e.


* springfox dependency to be added
* Configuration file (**WebConfig.java** in this example) has to be marked with @EnableSwagger2 annotation.
