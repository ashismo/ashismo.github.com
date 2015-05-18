---
layout: post
category : java-web service
tags : [Webservice Tutorial]
weight: 40
---

## What is RESTful webservice?

REST stands for REpresentational State Transfer. REST is an architectural style and gaining popularity over SOAP webservices.
Below are the REST fundamentals


* Everything in REST is considered as **resource** and every resource is identified by **URI**
* All **resources** are handled by **GET, POST, PUT, DELETE** operations
* Every request is independent request hence it is stateless.
* Communication is done via representations e.g. JSON, XML over HTTP protocol.

##  Objective

The objectives of this blog are 

 * understand how to write a RESTful webproject with Jersey framework.
 * Deploy the project in tomcat server
 * Access the webservice

## Requeired Software


 * JDK 1.7
 * Eclipse for J2EE
 * Maven 2.2.x or above
  
## Stepts to write code

Click here to see my [project at github](https://github.com/ashismo/repositoryForMyBlog/tree/master/webservices/RestfulWebservice){:target="_blank"}

Below are the steps to write a simple RESTful webservice


 * Create a Dynamic web project with module version 3.0 and java source directory must be src/main/java
 <img src="https://cloud.githubusercontent.com/assets/11231867/7675333/d7042918-fd54-11e4-9a7f-9fb944562a91.png"/>
 * Convert the project into maven project (right click on project-> Configure -> Convert to Maven project)
 * Create a package under java source (src/main/java): com.ashish.rest.controller
 * Add maven dependancy: **Right click on project->properties->Deployment Assembly->Add->Java Build Path Entries->Maven Dependencies**
**Note:** Deploy path should be WEB-INF/lib by default
The meaning of the below entry (as shown in the image) is that the dependent jars will get packaged into the WEB-INF/lib folder of the deployer  

<img src="https://cloud.githubusercontent.com/assets/11231867/7606640/5e2a367a-f978-11e4-98ad-4a582769b338.png"/>
 
 * Your pom.xml file should be as shown below

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.ashish.rest.controller</groupId>
  <artifactId>test</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  
  <repositories>
		<repository>
			<id>maven2-repository.java.net</id>
			<name>Java.net Repository for Maven</name>
			<url>http://download.java.net/maven/2/</url>
			<layout>default</layout>
		</repository>
	</repositories>
 
	<dependencies>
		<dependency>
			<groupId>com.sun.jersey</groupId>
			<artifactId>jersey-server</artifactId>
			<version>1.9</version>
		</dependency>
		
		<!--  Below two dependencies are added to support JSON response -->
 		<dependency>
		    <groupId>com.sun.jersey</groupId>
		    <artifactId>jersey-json</artifactId>
		    <version>1.8</version>
		 </dependency>
		<dependency> 
			<groupId>com.sun.jersey</groupId> 
			<artifactId>jersey-bundle</artifactId> 
			<version>1.18.1</version> 
		</dependency>
	</dependencies>
	
</project>
</code></pre>

 * Your web.xml should be as shown below. As per the web.xml file http://server:<port>/<context root>/rest/* request will pass through the controller. Go through the inline comments in the web.xml
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
 <?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd" id="WebApp_ID" version="3.0">
  <display-name>Restful WebApplication</display-name>
 
	<servlet>
		<servlet-name>jersey-helloWorld-serlvet</servlet-name>
		<servlet-class>com.sun.jersey.spi.container.servlet.ServletContainer</servlet-class>
        <!-- Below init-param is added to for RESTful webservice with Jersey framework -->
		<init-param>
		     <param-name>com.sun.jersey.config.property.packages</param-name>
		     <param-value>com.ashish.rest.controller</param-value>
		</init-param>

		<!-- Below init-param is added to support JSON response -->
		<init-param>
            		<param-name>com.sun.jersey.api.json.POJOMappingFeature</param-name>
            		<param-value>true</param-value>
        	</init-param>
		<load-on-startup>1</load-on-startup>
	</servlet>
 
	<servlet-mapping>
		<servlet-name>jersey-helloWorld-serlvet</servlet-name>
		<url-pattern>/rest/*</url-pattern>
	</servlet-mapping>
</web-app>
</code></pre>

 * Your controller class **HelloWorldREST.java** should be as shown below. This controller produces string output and json output. 
 
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.rest.controller;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.ashish.rest.bean.Employee;

@Path("/hello")
public class HelloWorldREST {
	@GET
	@Path("/{parameter}")
	public Response responseMsg( @PathParam("parameter") String parameter,
			@DefaultValue("Nothing to say") @QueryParam("value") String value) {
		String output = "Hello from: " + parameter + " : " + value;
		return Response.status(200).entity(output).build();
	}
	
	@GET
	@Path("/getEmployee/{empId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Employee getEmployee( @PathParam("empId") int empId,
			@DefaultValue("No Employee Id passed") @QueryParam("value") String value) {

		Employee emp = new Employee();
		emp.setEmpId(empId);
		emp.setName("Ashish Mondal");

		return emp;
	}
}
</code></pre>

 	* 1st request and response from the above controller
 	<img src="https://cloud.githubusercontent.com/assets/11231867/7675667/c7cd6622-fd58-11e4-89b7-bde014712f9e.png"/>
 	* 2nd Request and response from the above controller
 	<img src="https://cloud.githubusercontent.com/assets/11231867/7675668/c7f8f242-fd58-11e4-9891-622e381afe39.png"/>
