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
  * Configuration of the MockMVC to call the webservices directly.

## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="#" target="_blank">Spring Boot WebApp zip(33kb)</a>
	</span>
	<span class="view">
		<a href="#" target="_blank">Spring Boot WebApp</a>
	</span>
</div>


#### Required files
Below are the minimum required files to achieve the goals defined above

SL NO | Class Name | Description
:---: | --- | ---
1 | pom.xml | Build files having required dependencies added
2 | **com.ashish.config.WebConfig** | This configuration file is useful to run the spring boot application stand-alone or in real tomcat server.
3 | **com.ashish.config.SpringBootAppWS** | This is a dummy rest controller publishes restful web service.
4 | **com.ashish.config.GlobalDefaultExceptionHandler** | This class handles any exception occurs during the service invocation.
5 | **com.ashish.test.junit.WebserviceTestSuite** | Junit test suite to run WebserviceTest1 and WebserviceTest2 junit classes
6 | **com.ashish.test.junit.WebserviceTest1** | Junit test class tests PNR service (exposed in SpringBootAppWS class) and exception services which throws default exception and custom exceptions. MockMVC is used to call the webservices directly.
7 | **com.ashish.test.junit.WebserviceTest2** | Junit test class tests Advantage service ( (exposed in SpringBootAppWS class) and a dummy service. MockMVC is used to call the webservices directly.


**pom.xml**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;com.ashish.spring.boot&lt;/groupId&gt;
	&lt;artifactId&gt;SpringBootAppWS&lt;/artifactId&gt;
	&lt;version&gt;1.0-BETA&lt;/version&gt;
	&lt;packaging&gt;war&lt;/packaging&gt;

	&lt;parent&gt;
		&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		&lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
		&lt;version&gt;1.3.3.RELEASE&lt;/version&gt;
	&lt;/parent&gt;

	&lt;build&gt;
		&lt;plugins&gt;
			&lt;plugin&gt;
				&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
				&lt;version&gt;3.3&lt;/version&gt;
				&lt;configuration&gt;
					&lt;source&gt;1.8&lt;/source&gt;
					&lt;target&gt;1.8&lt;/target&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
			&lt;plugin&gt;
				&lt;artifactId&gt;maven-war-plugin&lt;/artifactId&gt;
				&lt;version&gt;2.6&lt;/version&gt;
				&lt;configuration&gt;
					&lt;warSourceDirectory&gt;WebContent&lt;/warSourceDirectory&gt;
					&lt;failOnMissingWebXml&gt;false&lt;/failOnMissingWebXml&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
		&lt;/plugins&gt;
	&lt;/build&gt;

	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
		&lt;/dependency&gt;
		
		&lt;!-- Below dependency has provided scope defined because during deployment in tomcat this jar is not required.
			This jar is required to execute the stand alone application with embedded tomcat--&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
			&lt;scope&gt;provided&lt;/scope&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
&lt;/project&gt;
</code></pre>


**com.ashish.config.WebConfig** : This configuration file is useful to run the spring boot application stand-alone or in real tomcat server. Note that @ComponentScan has not been used. Instead it provides aliases to customize the attributes of **@EnableAutoConfiguration** and **@ComponentScan**

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

@SpringBootApplication(scanBasePackages="com.ashish")
public class WebConfig extends SpringBootServletInitializer {

	/**
	 * This method configures the web application
	 */
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(WebConfig.class);
    }

    /**
     * Run the spring boot application in embedded tomcat 
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        SpringApplication.run(WebConfig.class, args);
    }

}
</code></pre>


**com.ashish.config.SpringBootAppWS** : This is a dummy rest controller publishes few restful web services.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.app;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ashish.exception.CustomException;

@RestController
@RequestMapping("/rest")
public class SpringBootAppWS {
	@RequestMapping(path="/getPNR", method = RequestMethod.GET, headers="Accept=application/json",produces="application/json")
    public String getPNR() {
        return "PNR";
    }

	@RequestMapping(path="/getAdv", method = RequestMethod.GET, headers="Accept=application/json",produces="application/json")
    public String getAdv() {
        return "Adv#";
    }
	
	@RequestMapping(path="/getDefaultException", method = RequestMethod.GET, headers="Accept=application/json",produces="application/json")
    public String getDefaultException() {
        String name = null;
        System.out.println(name.toLowerCase());   // Null pointer exception will be thrown from here
		return null;
    }
	
	@RequestMapping(path="/getCustomException", method = RequestMethod.GET, headers="Accept=application/json",produces="application/json")
    public String getCustomException() throws CustomException {
		System.out.println("Testing Custom Exception"); 
		if(true) {
        	throw new CustomException("Custom Exception");
        }
		return null;
    }
}

</code></pre>

**com.ashish.config.GlobalDefaultExceptionHandler**: Checked and un-checked exception handing is shown in this class. For any Custom uncaught exception in the program code will get caught in this class and it retuns meaningful error message with HTTP status code accordingly.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.ashish.exception.CustomException;

@ControllerAdvice
public class GlobalDefaultExceptionHandler {
    @ExceptionHandler({CustomException.class})
    @ResponseBody
    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    public Map<String, String> unauthorizedAccess(Exception e) {
        Map<String, String> exception = new HashMap<String, String>();

        System.out.println("unauthorized Access to the API: " + e.getMessage());
        exception.put("code", "401");
        exception.put("reason", e.getMessage());

        return exception;
    }
    
    @ExceptionHandler({Exception.class})
    @ResponseBody
    @ResponseStatus(value = HttpStatus.EXPECTATION_FAILED)
    public Map<String, String> exceptionInProcessing(Exception e) {
        Map<String, String> exception = new HashMap<String, String>();

        System.out.println("Unable to process. Some error occured: " + e.getMessage());
        exception.put("code", "417");
        exception.put("reason", e.toString());

        return exception;
    }
}
</code></pre>

**com.ashish.test.junit.WebserviceTestSuite: ** Junit test suite to run WebserviceTest1 and WebserviceTest2 junit classes.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.test.junit;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
	WebserviceTest1.class,
	WebserviceTest2.class
})
public class WebserviceTestSuite {
	
}

</code></pre>

**com.ashish.test.junit.WebserviceTest1: ** Junit test class tests PNR service (exposed in SpringBootAppWS class) and exception services which throws default exception and custom exceptions.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.test.junit;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Map;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.ContextHierarchy;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.ashish.config.WebConfig;
import com.fasterxml.jackson.databind.ObjectMapper;


@RunWith(SpringJUnit4ClassRunner.class)
@ComponentScan(basePackages = "com.ashish.test")
@ContextHierarchy({
	  @ContextConfiguration(classes={WebConfig.class})
})
@WebAppConfiguration
public class WebserviceTest1 {
	
	private MockMvc mockMvc;
	@Autowired
	private WebApplicationContext wac;
	
	private ObjectMapper om;
	
	@Before
	public void runBefore() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
		om = new ObjectMapper();
	}

	@Test
	public void getPNR() {
		try {
			MvcResult result = this.mockMvc.perform(get("/rest/getPNR")).andExpect(status().isOk())
					.andExpect(content().contentType("application/json"))
					.andReturn();
			System.out.println(result.getResponse().getContentAsString());
			assertEquals("PNR", result.getResponse().getContentAsString());
		} catch(Exception e) {
			System.out.println("Error while retrieving PNR");
			e.printStackTrace();
		}
	}
	
	@Test
	public void getDummy() {
		System.out.println("Ashish");
	}
	
	@Test
	public void testDefaultException() {
		try {
			MvcResult result = this.mockMvc.perform(get("/rest/getDefaultException")).andExpect(status().is4xxClientError())
					.andExpect(content().contentType("application/json"))
					.andReturn();
			System.out.println(result.getResponse().getContentAsString());
			Map<String, String> error = om.readValue(result.getResponse().getContentAsString(), Map.class);
			assertEquals("{\"reason\":\"java.lang.NullPointerException\",\"code\":\"417\"}", result.getResponse().getContentAsString());
			assertEquals("417", error.get("code"));
			assertEquals("java.lang.NullPointerException", error.get("reason"));
		} catch(Exception e) {
			System.out.println("Error while Testing default exception");
			e.printStackTrace();
		}
	}
	
	@Test
	public void testCustomException() {
		try {
			MvcResult result = this.mockMvc.perform(get("/rest/getCustomException")).andExpect(status().is4xxClientError())
					.andExpect(content().contentType("application/json"))
					.andReturn();
			System.out.println(result.getResponse().getContentAsString());
			Map<String, String> error = om.readValue(result.getResponse().getContentAsString(), Map.class);
			assertEquals("{\"reason\":\"Custom Exception\",\"code\":\"401\"}", result.getResponse().getContentAsString());
			assertEquals("401", error.get("code"));
			assertEquals("Custom Exception", error.get("reason"));
			
		} catch(Exception e) {
			System.out.println("Error while Testing custom exception");
			e.printStackTrace();
		}
	}
	
}
</code></pre>

**com.ashish.test.junit.WebserviceTest2:** Junit test class tests Advantage service ( (exposed in SpringBootAppWS class) and a dummy service.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.test.junit;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.ContextHierarchy;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.ashish.config.WebConfig;


@RunWith(SpringJUnit4ClassRunner.class)
@ComponentScan(basePackages = "com.ashish.test")
@ContextHierarchy({
	  @ContextConfiguration(classes={WebConfig.class})
})
@WebAppConfiguration
public class WebserviceTest2 {
	
	private MockMvc mockMvc;
	@Autowired
	private WebApplicationContext wac;
	
	@Before
	public void runBefore() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}
	

	@Test
	public void getAdv() {
		try {
			MvcResult result = this.mockMvc.perform(get("/rest/getAdv")).andExpect(status().isOk())
					.andExpect(content().contentType("application/json"))
					.andReturn();
			System.out.println(result.getResponse().getContentAsString());
			assertEquals("Adv#", result.getResponse().getContentAsString());
		} catch(Exception e) {
			System.out.println("Error while retrieving PNR");
			e.printStackTrace();
		}
	}
	
	@Test
	public void getDummy() {
		System.out.println("Ashish");
	}
	
}

</code></pre>

## Run the application

This application can be run in one of the following ways


  * **Stanalone mode** : This application can be run as normal java class as it has a public static void main(). By default this application will run in embedded tomcat environment.
    * Run **com.ashish.config.WebConfig** as normal java class and hit the following URL to test: http://localhost:8080/rest/getPNR
  * **WAR deployment mode** : The created war can be deployed and run in tomcat server
  * **Junit mode**: The application can be run and unit tested using Junit
 
