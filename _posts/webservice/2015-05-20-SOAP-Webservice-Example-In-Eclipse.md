---
layout: post
category : java-web service
tags : [Webservice Tutorial]
weight: 1
---

## Introduction

This blog will help you to 


 * write a SOAP webservice and deploy on tomcat server.
 * write a client to call the webservices
 

## Required Software


 * Eclipse with J2EE supports
 * JDK 1.7
 * Tocat 7
 * Axis2
 
## Steps to write the code


 * Create **dynamic web project** in eclipse and make sure **src/main/java** as the src directory of your project to support maven build. Axis2 Select Dynamic web module version as 2.5 during creation of the **dynamic web project**
 * Create a package called **com.ashish.soap**
 * Create a simple java class called **HelloWorld** with the following content

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.soap;

public class HelloWorld {
	public String sayHelloWorld(String text) {
		return "Hello World! " + text;
	}
}
</code></pre>

 * Download Binary distribution from [here](http://axis.apache.org/axis2/java/core/download.cgi){:target="_block"} and unzip to a location
 * Right click on the project->Properties->Project Facet -> Select **Axis2 Web Services** as shown below. Now Axis2 framework is integrated with your project.  
<img src="https://cloud.githubusercontent.com/assets/11231867/7744133/6bdae14c-ffbe-11e4-9af8-e4ed3197f440.png"/>  
 * Right click on the project->new->web service -> Click on next
 * In service implementation text box fill **com.ashish.soap.HelloWorld** (fully qualified class name). Then move both the sliders to maximum level(i.e. Test service and Test Client level) as shown below
 
<img src="https://cloud.githubusercontent.com/assets/11231867/7743401/06583abe-ffb8-11e4-8521-60db5a465ca3.png"/>
 <!--img src="https://cloud.githubusercontent.com/assets/11231867/7726539/87546c66-ff20-11e4-9486-69b312d1515b.png"/-->

 * Click Next and select the style as document/literal as shown below
 
 <img src="https://cloud.githubusercontent.com/assets/11231867/7726772/e0a3605a-ff21-11e4-8d06-8b0cc815da40.png"/>
 <!--<img src="https://cloud.githubusercontent.com/assets/11231867/7726540/87607736-ff20-11e4-8e8c-f413dde71e00.png"/>-->

 * Click Next then click on **Start Server**
 
 <img src="https://cloud.githubusercontent.com/assets/11231867/7726538/872af9ee-ff20-11e4-8605-9501ee378724.png"/>

 * After clicking start server,eclipse will open test web service API.With this test API,you can test your web service.
 
## Issues you may face during setup

SL NO | Issue | Solution
:---: | :--- | :---
1 | IWAB0014E Unexpected exception occurred. | Follow this URL:  <a href="http://stackoverflow.com/questions/28282734/iwab0014e-unexpected-exception-occurred"/>
