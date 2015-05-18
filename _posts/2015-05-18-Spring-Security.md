---
layout: post
category : java-Spring
tags : [Spring Tutorial]
weight: 100
---

## Introduction

Spring security is a Java/J2EE framework that provides authentication and authorization for enterprise applications. 
Objectives of this project are 


 * authenticate and autorize all incoming requests.
 * navigate to welcome jsp via spring security login page
 * on successful login, display welcome page with a link
 * on clicing the URL, you will get navigated to another page.

## Required Software


 * Eclipse for J2EE
 * JDK 1.7
 * Maven 2.2.x or above
  
## Steps to write code

The content of pom.xml, web.xml, security xml, jsp and controller classes are given below. Go through the inline code comments to understand better.

* **pom.xml**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd http://maven.apache.org/xsd/maven-v4_0_0.xsd"&gt;
  	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;com.ashish.rest.controller&lt;/groupId&gt;
	&lt;artifactId&gt;SpringSecurity&lt;/artifactId&gt;
	&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
	
	&lt;properties&gt;
		&lt;spring.version&gt;4.0.1.RELEASE&lt;/spring.version&gt;
		&lt;spring.security.version&gt;3.2.0.RELEASE&lt;/spring.security.version&gt;
	&lt;/properties&gt;
	
	&lt;repositories&gt;
		&lt;repository&gt;
			&lt;id&gt;maven2-repository.java.net&lt;/id&gt;
			&lt;name&gt;Java.net Repository for Maven&lt;/name&gt;
			&lt;url&gt;http://download.java.net/maven/2/&lt;/url&gt;
			&lt;layout&gt;default&lt;/layout&gt;
		&lt;/repository&gt;
	&lt;/repositories&gt;
	&lt;build&gt;
		&lt;sourceDirectory&gt;src&lt;/sourceDirectory&gt;
		&lt;plugins&gt;
			&lt;plugin&gt;
				&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
				&lt;version&gt;3.1&lt;/version&gt;
				&lt;configuration&gt;
					&lt;source&gt;1.7&lt;/source&gt;
					&lt;target&gt;1.7&lt;/target&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
			&lt;plugin&gt;
				&lt;artifactId&gt;maven-war-plugin&lt;/artifactId&gt;
				&lt;version&gt;2.4&lt;/version&gt;
				&lt;configuration&gt;
					&lt;warSourceDirectory&gt;WebContent&lt;/warSourceDirectory&gt;
					&lt;failOnMissingWebXml&gt;false&lt;/failOnMissingWebXml&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
		&lt;/plugins&gt;
	&lt;/build&gt;
	&lt;dependencies&gt;
		&lt;dependency&gt;
		    &lt;groupId&gt;jstl&lt;/groupId&gt;
		    &lt;artifactId&gt;jstl&lt;/artifactId&gt;
		    &lt;version&gt;1.2&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;!--  Below two dependencies are added to support JSON response --&gt;
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
		
		&lt;!-- Spring dependencies --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-core&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;
 
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-web&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;
 
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;
		
		&lt;!-- Spring Security --&gt;
		&lt;dependency&gt;
		    &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
		    &lt;artifactId&gt;spring-security-core&lt;/artifactId&gt;
		    &lt;version&gt;${spring.security.version}&lt;/version&gt;
		    &lt;type&gt;jar&lt;/type&gt;
		    &lt;scope&gt;compile&lt;/scope&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
		    &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
		    &lt;artifactId&gt;spring-security-web&lt;/artifactId&gt;
		    &lt;version&gt;${spring.security.version}&lt;/version&gt;
		    &lt;type&gt;jar&lt;/type&gt;
		    &lt;scope&gt;compile&lt;/scope&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
		    &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
		    &lt;artifactId&gt;spring-security-config&lt;/artifactId&gt;
		    &lt;version&gt;${spring.security.version}&lt;/version&gt;
		    &lt;type&gt;jar&lt;/type&gt;
		    &lt;scope&gt;compile&lt;/scope&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;

&lt;/project&gt;
</code></pre>

 * **web.xml**
 
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://java.sun.com/xml/ns/javaee"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
	id="WebApp_ID" version="3.0"&gt;
	&lt;display-name&gt;Restful WebApplication&lt;/display-name&gt;
	&lt;welcome-file-list&gt;
		&lt;welcome-file&gt;index.jsp&lt;/welcome-file&gt;
	&lt;/welcome-file-list&gt;

	&lt;!-- Add the following entry for Spring MVC --&gt;
	&lt;servlet&gt;
		&lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
		&lt;servlet-class&gt;
			org.springframework.web.servlet.DispatcherServlet
		&lt;/servlet-class&gt;
		&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
	&lt;/servlet&gt;
 
	&lt;servlet-mapping&gt;
		&lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
		&lt;url-pattern&gt;/springmvc/*&lt;/url-pattern&gt;
	&lt;/servlet-mapping&gt;
 
	&lt;context-param&gt;
		&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
		&lt;param-value&gt;
			/WEB-INF/dispatcher-servlet.xml
			/WEB-INF/security-applicationContext.xml
		&lt;/param-value&gt;
	&lt;/context-param&gt;
 
	&lt;listener&gt;
		&lt;listener-class&gt;
			org.springframework.web.context.ContextLoaderListener
		&lt;/listener-class&gt;
	&lt;/listener&gt;
	&lt;!-- Security Filter --&gt;
	&lt;!-- Any request for RESTful service or SpringMVC service has to pass through spring security filter --&gt;
	&lt;filter&gt;
	    &lt;filter-name&gt;springSecurityFilterChain&lt;/filter-name&gt;
	    &lt;filter-class&gt;org.springframework.web.filter.DelegatingFilterProxy&lt;/filter-class&gt;
	    &lt;init-param&gt;
	        &lt;param-name&gt;contextAttribute&lt;/param-name&gt;
	        &lt;param-value&gt;org.springframework.web.context.WebApplicationContext.ROOT&lt;/param-value&gt;
	    &lt;/init-param&gt;
	 &lt;/filter&gt;
	 &lt;filter-mapping&gt;
	     &lt;filter-name&gt;springSecurityFilterChain&lt;/filter-name&gt;
	     &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
	 &lt;/filter-mapping&gt;
&lt;/web-app&gt;
</code></pre>
