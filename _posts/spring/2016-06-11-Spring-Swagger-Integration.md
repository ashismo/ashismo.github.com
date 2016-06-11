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
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringBootAppWS.zip" target="_blank">Spring Boot WebApp zip(22kb)</a>
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


#### Change details
Below are the three changes to integrate Swagger with Spring application

* springfox dependancy in **pom.xml**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
	&lt;!-- SWAGGER Integration START --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;io.springfox&lt;/groupId&gt;
		&lt;artifactId&gt;springfox-swagger2&lt;/artifactId&gt;
		&lt;version&gt;2.2.2&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- SWAGGER Integration END --&gt;
</code></pre>

* In our previous example we have marked the configuration file (**WebConfig.java** in this example) with **@EnableSwagger2** annotation. The code snippet is given below

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
@SpringBootApplication(scanBasePackages="com.ashish")
@EnableSwagger2
public class WebConfig extends SpringBootServletInitializer {

</code></pre>


* Create a new file to **allow CORS**

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
public class WebMvcInitializer extends WebMvcConfigurerAdapter {
 
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}
}


</code></pre>


The response from **http://localhost:8080/v2/api-docs** URL will get displayed in swagger UI as shown below. It lists all the available services automatically. You would be able to test your services as well from the swagger UI

<img src="https://cloud.githubusercontent.com/assets/11231867/15984331/9f489b94-2fe4-11e6-907b-a1e8e6f449de.PNG"/>
