---
layout: post
category : java-Spring
tags : [Spring Tutorial]
weight: 100
---

## Introduction

Spring security is a Java/J2EE framework that provides authentication and authorization for enterprise applications. 
Objectives of this project are 


 * authenticate and autorize all incoming requests (Hardcoded user name/password is root/root)
 * navigate to welcome jsp via spring security login page
 * on successful login, display welcome page with a link
 * on clicing the URL, you will get navigated to another page.
 * create customize login page (by default spring security framework provides login page)

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
			&lt;!-- URL mapping is here --&gt;
			/WEB-INF/dispatcher-servlet.xml
			&lt;!-- Spring security configuration is here --&gt;
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

 * **dispatcher-servlet.xml** file has spring MVC configuration
 
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:context="http://www.springframework.org/schema/context"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="
http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context-3.0.xsd"&gt;
 
	&lt;context:component-scan base-package="com.ashish.springmvc.controller" /&gt;
 
	&lt;bean
		class="org.springframework.web.servlet.view.InternalResourceViewResolver"&gt;
		&lt;property name="prefix"&gt;
			&lt;value&gt;/WEB-INF/views/&lt;/value&gt;
		&lt;/property&gt;
		&lt;property name="suffix"&gt;
			&lt;value&gt;.jsp&lt;/value&gt;
		&lt;/property&gt;
	&lt;/bean&gt;
&lt;/beans&gt;
</code></pre>

 * **security-applicationContext.xml** file has spring security configuration. Go through the inline comments

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;beans:beans xmlns="http://www.springframework.org/schema/security"
    xmlns:beans="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:security="http://www.springframework.org/schema/security"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
http://www.springframework.org/schema/security
http://www.springframework.org/schema/security/spring-security-3.2.xsd"&gt;
 
 &lt;security:global-method-security secured-annotations="enabled" /&gt;
&lt;!-- 
	auto-config: Includes some basic services like form-login,http-basic, logout etc
	use-expressions: It is here to use expressions to secure individual URLs. These expressions can be 
					 e.g. hasRole([role]), hasAnyRole([role1,role2]), permitAll, denyAll etc
	intercept-url: This will match the requested url pattern from request and will decide what action to take based on access value.
	form-login: This will come into picture when user will try to access any secured URL. 
				A login page mapped to “login-page” attribute will be served for authentication check. 
				If not provided, spring will provide an inbuilt login page to user. It also contains attribute 
				for default target if login success, or login failure due to invalid user/password match.
 --&gt; 
    &lt;security:http auto-config="true"  use-expressions="true"&gt;
    	&lt;!-- intercept-url=/j_spring_security_check: By default, spring auto generates and configures a UsernamePasswordAuthenticationFilter bean. 
    						This filter, by default, responds to the URL /j_spring_security_check when processing a login POST from your web-form. 
    						For username field it uses ‘j_username‘ and for password field it uses ‘j_password‘. 
    	--&gt;
    	&lt;security:intercept-url pattern="/j_spring_security_check" access="permitAll" /&gt;
        &lt;security:intercept-url pattern="/springmvc/login" access="permitAll" /&gt;
        &lt;security:intercept-url pattern="/springmvc/logout" access="permitAll" /&gt;
        &lt;security:intercept-url pattern="/springmvc/accessdenied" access="permitAll" /&gt;
        &lt;security:intercept-url pattern="/**" access="hasRole('ROLE_USER')" /&gt;
        &lt;security:form-login login-page="/springmvc/login" default-target-url="/springmvc/homepage" authentication-failure-url="/springmvc/accessdenied" /&gt;
        &lt;security:logout logout-success-url="/springmvc/logout" /&gt;
    &lt;/security:http&gt;
 
 &lt;!-- 
 	  Authentication Providers for Form Login:
 	  below user-service hardcoded the username and password (root/root) in this xml file itself
 	  In realtime application this is going to be some user service fetching data from remote database 
  --&gt;
    &lt;security:authentication-manager alias="authenticationManager"&gt;
        &lt;security:authentication-provider&gt;
            &lt;security:user-service&gt;
                &lt;security:user name="root" password="root" authorities="ROLE_USER" /&gt;
                &lt;!-- Below is the way to check username/password from remote database. It is commented out now --&gt;
                &lt;!-- &lt;security:jdbc-user-service data-source-ref="dataSource" /&gt; --&gt;
            &lt;/security:user-service&gt;
        &lt;/security:authentication-provider&gt;
    &lt;/security:authentication-manager&gt;
 
 &lt;!-- ADD THE DATASOURCES HERE --&gt;
 
&lt;/beans:beans&gt;
</code></pre>

* **index.jsp**: This is welcome file as configured in web.xml
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1"
 
pageEncoding="ISO-8859-1"%&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
&lt;title&gt;Spring 4 MVC - HelloWorld Index Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
 
	&lt;center&gt;
		&lt;h2&gt;Hello World&lt;/h2&gt;
		&lt;h3&gt;
			&lt;a href="springmvc/hello?name=Ashish"&gt;Click Here&lt;/a&gt;
		&lt;/h3&gt;
	&lt;/center&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

 * **login.jsp, logout.jsp, denied.jsp, helloworld.jsp** files are created inside WEB-INF/views folder
 * **login.jsp**
<pre class="prettyprint highlight"><code class="language-html" data-lang="html">
&lt;%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %&gt;
&lt;%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %&gt;
&lt;%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %&gt;
 
&lt;html&gt;
    &lt;body&gt;
        &lt;h1 id="banner"&gt;Login to Security Demo&lt;/h1&gt; 
        &lt;form name="f" action="&lt;c:url value='/j_spring_security_check'/&gt;"
                    method="POST"&gt;
            &lt;table&gt;
                &lt;tr&gt;
                    &lt;td&gt;Username:&lt;/td&gt;
                    &lt;td&gt;&lt;input type='text' name='j_username' /&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;Password:&lt;/td&gt;
                    &lt;td&gt;&lt;input type='password' name='j_password'&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td colspan="2"&gt;&nbsp;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td colspan='2'&gt;&lt;input name="submit" type="submit"&gt;&nbsp;&lt;input name="reset" type="reset"&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;
        &lt;/form&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>