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
 
 * Your pom.xml file should be as below

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
