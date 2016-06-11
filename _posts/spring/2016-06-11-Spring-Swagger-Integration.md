---
layout: post
category : java-Spring
tags : [Spring Swagger Integration Tutorial]
weight: 105
---

{% include JB/setup %}

## Introduction

Swagger is a simple yet powerful representation of your RESTful API. Swagger is an open source software. With a Swagger-enabled API, you get interactive documentation.Swagger supports almost every modern programming language and deployment environment.


## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringBootAppWS.zip" target="_blank">Spring Boot WebApp zip(16kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringBootAppWS" target="_blank">Spring Boot WebApp</a>
	</span>
</div>


* In this example, I am going to show how to integrate Swagger with a Spring boot applicaton. In my previous <a href="http://ashismo.github.io/java-spring/2016/03/10/Spring-Boot-Web-Application" target="_blank">blog</a>, I have shown how to create a spring boot application. In this blog, I shall integrate swagger just making 2 changes in the previous code i.e.


  * springfox dependency to be added
  * Configuration file (**WebConfig.java** in this example) has to be marked with @EnableSwagger2 annotation.
  * CORS to be enabled in your application

* Run the spring boot application and access **http://localhost:8080/v2/api-docs** from your browser. If you get the response then you are done with your integration.
* Open Swagger-UI. If you do not have Swagger-UI then download it from <a href="https://github.com/swagger-api/swagger-ui/releases" target="_blank">here</a>, unzip and go to dist folder and open index.html file in a browser.  
The swagger UI (index.html) will look like below

<img src="https://cloud.githubusercontent.com/assets/11231867/15984331/9f489b94-2fe4-11e6-907b-a1e8e6f449de.PNG"/>
