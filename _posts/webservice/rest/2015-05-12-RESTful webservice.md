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
 
 * 
