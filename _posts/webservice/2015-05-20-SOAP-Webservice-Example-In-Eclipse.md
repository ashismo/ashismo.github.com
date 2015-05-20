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
 * JAX-WS
 
## Steps to write the code


 * Create **dynamic web project** in eclipse and make sure **src/main/java** as the src directory of your project to support maven build
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

