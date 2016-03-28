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
 <img src="https://cloud.githubusercontent.com/assets/11231867/7744201/ef82a2b4-ffbe-11e4-87a5-fe83c57135e2.png"/>  
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
 * Attach Axis2 with eclipse
 ```
 Window -> Preferences -> Web Services -> Axis2 Preference->Select the unzip folder as Axis2 runtime location
 ```
 
 * Right click on the project->Properties->Project Facet -> Select **Axis2 Web Services** as shown below. Now Axis2 framework is integrated with your project.  
<img src="https://cloud.githubusercontent.com/assets/11231867/7744133/6bdae14c-ffbe-11e4-9af8-e4ed3197f440.png"/>  
 * Right click on the project->Configure->Conver to Maven Project
 * Right click on the project->new->web service -> Click on next
 * In service implementation text box fill **com.ashish.soap.HelloWorld** (fully qualified class name). Then move both the sliders to maximum level(i.e. Test service and Test Client level) and change Webservice runtime to **Apache Axis2** as shown below.
 
<img src="https://cloud.githubusercontent.com/assets/11231867/7744459/09626fd2-ffc1-11e4-9122-f430cd318e8d.png"/>

 * Click Next and select the style as document/literal as shown below
 
 <img src="https://cloud.githubusercontent.com/assets/11231867/7726772/e0a3605a-ff21-11e4-8d06-8b0cc815da40.png"/>
 <!--<img src="https://cloud.githubusercontent.com/assets/11231867/7726540/87607736-ff20-11e4-8e8c-f413dde71e00.png"/>-->

 * Click next and select as shown below  
 <img src="https://cloud.githubusercontent.com/assets/11231867/7744477/3c818312-ffc1-11e4-8ed8-bcee8cdec0ff.png"/>  
 * Click on next, next, next... until the end.
 * Another project,SOAPWebServicesClient will get automatically created as the client code.
 * Finally a web browser will get opened in the Eclipse for your testing as shown below
 <img src="https://cloud.githubusercontent.com/assets/11231867/7744573/3a25657e-ffc2-11e4-8a1a-cd399fbb4ae4.png"/>

## Sanity Testing of your Web Services

Hit the following URL - <a href="http://localhost:8080/SOAPWebServices/services/HelloWorld?wsdl">http://localhost:8080/SOAPWebServices/services/HelloWorld?wsdl</a> from your browser. It will open the generated WSDL file. So your web services deployed properly.

## Issues you may face during setup

SL NO | Issue | Solution
:---: | :--- | :---
1 |  | 
