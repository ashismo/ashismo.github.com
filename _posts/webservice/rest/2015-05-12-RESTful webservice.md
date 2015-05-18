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
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;com.ashish.rest.controller&lt;/groupId&gt;
	&lt;artifactId&gt;test&lt;/artifactId&gt;
	&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;

	&lt;repositories&gt;
		&lt;repository&gt;
			&lt;id&gt;maven2-repository.java.net&lt;/id&gt;
			&lt;name&gt;Java.net Repository for Maven&lt;/name&gt;
			&lt;url&gt;http://download.java.net/maven/2/&lt;/url&gt;
			&lt;layout&gt;default&lt;/layout&gt;
		&lt;/repository&gt;
	&lt;/repositories&gt;

	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;com.sun.jersey&lt;/groupId&gt;
			&lt;artifactId&gt;jersey-server&lt;/artifactId&gt;
			&lt;version&gt;1.9&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- Below two dependencies are added to support JSON response --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;com.sun.jersey&lt;/groupId&gt;
			&lt;artifactId&gt;jersey-json&lt;/artifactId&gt;
			&lt;version&gt;1.8&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;com.sun.jersey&lt;/groupId&gt;
			&lt;artifactId&gt;jersey-bundle&lt;/artifactId&gt;
			&lt;version&gt;1.18.1&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;

&lt;/project&gt;
</code></pre>

 * Your web.xml should be as shown below. As per the web.xml file http://server:<port>/<context root>/rest/* request will pass through the controller. Go through the inline comments in the web.xml
 
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

 &lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://java.sun.com/xml/ns/javaee"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
	id="WebApp_ID" version="3.0"&gt;
	&lt;display-name&gt;Restful WebApplication&lt;/display-name&gt;

	&lt;servlet&gt;
		&lt;servlet-name&gt;jersey-helloWorld-serlvet&lt;/servlet-name&gt;
		&lt;servlet-class&gt;com.sun.jersey.spi.container.servlet.ServletContainer&lt;/servlet-class&gt;
		&lt;!-- Below init-param is added to for RESTful webservice with Jersey framework --&gt;
		&lt;init-param&gt;
			&lt;param-name&gt;com.sun.jersey.config.property.packages&lt;/param-name&gt;
			&lt;param-value&gt;com.ashish.rest.controller&lt;/param-value&gt;
		&lt;/init-param&gt;

		&lt;!-- Below init-param is added to support JSON response --&gt;
		&lt;init-param&gt;
			&lt;param-name&gt;com.sun.jersey.api.json.POJOMappingFeature&lt;/param-name&gt;
			&lt;param-value&gt;true&lt;/param-value&gt;
		&lt;/init-param&gt;
		&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
	&lt;/servlet&gt;

	&lt;servlet-mapping&gt;
		&lt;servlet-name&gt;jersey-helloWorld-serlvet&lt;/servlet-name&gt;
		&lt;url-pattern&gt;/rest/*&lt;/url-pattern&gt;
	&lt;/servlet-mapping&gt;
&lt;/web-app&gt;

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
	
	@POST
	@Path("/getSalary")
	@Produces(MediaType.APPLICATION_JSON)
	public Employee getSalary( @PathParam("empId") int empId,
			@DefaultValue("No Employee Id passed") @QueryParam("value") String value) {
		System.out.println("getSalary method is called");
		Employee emp = new Employee();
		emp.setEmpId(empId);
		emp.setName("Ashish Mondal");
		emp.setSalary(1000);
		return emp;
	}
}
</code></pre>

* Right click on the project then **Run As**-> **Run on Server**
* 1st request and response from the above controller is shown in the below image
<img src="https://cloud.githubusercontent.com/assets/11231867/7675667/c7cd6622-fd58-11e4-89b7-bde014712f9e.png"/>
* 2nd request and response from the above controller is shown in the below image
<img src="https://cloud.githubusercontent.com/assets/11231867/7675668/c7f8f242-fd58-11e4-9891-622e381afe39.png"/>

**Note:** In the above controller class, getSalary resource can be called by POST and GET methods. The GET method is shown above. I am going to show the POST method below.


* Note that index.jsp is mentioned as the welcome file in web.xml.
* Create index.jsp file under **WebContent** folder and the content should be as shown below

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
&lt;title&gt;Insert title here&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;form method="post" action="rest/hello/getSalary/"&gt;
		&lt;div&gt;POST method testing&lt;/div&gt;
		&lt;div&gt;
			Emp Id: &lt;input type="text" value="" /&gt;
			&lt;button&gt;Go&lt;/button&gt;
		&lt;/div&gt;
	&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>


* Follow the below steps to test the POST request from webpage
<img src="https://cloud.githubusercontent.com/assets/11231867/7676127/4fc9372c-fd5e-11e4-97ad-dd17bc00eb31.png"/>
<img src="https://cloud.githubusercontent.com/assets/11231867/7676128/5157560a-fd5e-11e4-8557-f788eab23775.png"/>


### Common issues during project setup

SL NO | Issues | Solution
:---:|:---|:---
1 | SEVERE: Servlet /JAXRS-HelloWorld threw load() exception
java.lang.ClassNotFoundException: com.sun.jersey.spi.container.servlet.ServletContainer
 | Right click on project->properties->Deployment Assembly->Add->Java Build Path Entries->Maven Dependencies (Note: Deploy path should be WEB-INF/lib by default)
2 | com.sun.jersey.api.container.ContainerException: The ResourceConfig instance does not contain any root resource classes. | a) com.sun.jersey.config.property.packages doesn’t exist in your web.xml
	&lt;servlet&gt;
	&lt;servlet-name&gt;jersey-helloWorld-serlvet&lt;/servlet-name&gt;
	&lt;servlet-class&gt;
		com.sun.jersey.spi.container.servlet.ServletContainer
	&lt;/servlet-class&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;
			com.sun.jersey.config.property.packages
		&lt;/param-name&gt;
		&lt;param-value&gt;com.ashish.rest.controller&lt;/param-value&gt;
	&lt;/init-param&gt;
	&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
&lt;/servlet&gt;  

b) com.sun.jersey.config.property.packages included a resource that doesn’t include any jersey services. In above case, "com.ashish.rest.controller” doesn’t contains any jersey services.  

c) The project's java source directory must be under src/main/java folder as the project is of type Maven
3 | abc | def
