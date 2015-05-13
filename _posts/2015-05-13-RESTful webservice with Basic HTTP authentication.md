---
layout: post
category : java-web service
tags : [Webservice Tutorial]
---
{% include JB/setup %}

## Introduction

This document will help user to setup a **RESTful webservice with Basic HTTP authentication** powered by **Jersey framework**.
You shall get lots of blogs discuss about how to write RESTful webservice? But there are few that will cover Authentication of RESTful webservice.

## Required software


* J2EE eclipse (e.g. Eclipse Kepler)
* JDK 1.7
* Maven. If you want to know more about maven setup then follow <a href="/java-build/2015/05/09/Setting%20up%20a%20Maven%20Build/" target="_blank">my blog on maven</a>


## Steps to write a code

#### Create a RESTful project

Good to learn the RESTful web service is to download a small [my project](){:target="_blank"} and check the pom.xml, web.xml, java file details as mentioned below


* Create a Dynamic web project in eclipse with "module version 3.0" and java source directory is **src/main/java**
<img src="https://cloud.githubusercontent.com/assets/11231867/7606573/954868b2-f977-11e4-979e-f7b61dc5d072.png" style="border: 1px solid black;"/>
* Convert the project into maven project (right click on project-> Configure -> Convert to Maven project)
* Create a package under java source (src/main/java): com.ashish.rest.controller
* Add maven dependancy: **Right click on project->properties->Deployment Assembly->Add->Java Build Path Entries->Maven Dependencies**
**Note:** Deploy path should be WEB-INF/lib by default
The meaning of the below entry is the dependent jars will go to WEB-INF/lib folder in the deployable
<img src="https://cloud.githubusercontent.com/assets/11231867/7606640/5e2a367a-f978-11e4-98ad-4a582769b338.png" style="border: 1px solid black;"/>
* Your pom.xml should be like [this](https://github.com/ashismo/repositoryForMyBlog/blob/master/restfulWebservice-pom.xml){:target="_blank"} to build your project
* A **GET** request shown here which will return JSON output for a employee. This method takes employeeId as input
URL is : http://localhost:8080/RESTfulAuth/rest/hello/getEmployee/123

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.rest.controller;
import javax.ws.rs.GET;
.....
@Path("/hello")
public class HelloWorldREST {
  @GET
	@Path("/getEmployee/{empId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Employee getEmployee( @PathParam("empId") int empId,
			@DefaultValue("No Employee Id passed") @QueryParam("value") String value) {
		System.out.println("getEmployee method is called");
		Employee emp = new Employee();
		emp.setEmpId(empId);
		emp.setName("Ashish Mondal");

		return emp;

	}
}
</pre>