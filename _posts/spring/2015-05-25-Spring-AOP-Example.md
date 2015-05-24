---
layout: post
category : java-Spring
tags : [Spring Tutorial]
weight: 91
---

{% include JB/setup %}

## Introduction


Spring AOP can take control and add some additional functionalities before and after the methods getting executed.  
In this example AOP implementations are provided by
 
 
 * AspectJ
 * Spring AOP

## Required Software


 * JDK 1.7
 * Maven 2.2.x
 * Eclipse for J2EE 

## Steps to write code

Below example shows the implementation of [**Joint point, Advice and Pointcut**](http://ashismo.github.io/java-spring/2015/05/24/Important-Concepts-of-the-Spring-AOP/){:target="_blank"}

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringAOPExample.zip" target="_blank">SpringAOPExample zip(14kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringAOPExample" target="_blank">SpringAOPExample</a>
	</span>
</div>

Project Structure is shown below

<img src="https://cloud.githubusercontent.com/assets/11231867/7789223/f8f2f49c-0276-11e5-9ded-7fd61b027467.PNG"/>


 * **pom.xml:** 
 
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
 &lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;SpringAOPExample&lt;/groupId&gt;
	&lt;artifactId&gt;SpringAOPExample&lt;/artifactId&gt;
	&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;

	&lt;properties&gt;
		&lt;spring.version&gt;4.0.1.RELEASE&lt;/spring.version&gt;
		&lt;aspectj.version&gt;1.7.4&lt;/aspectj.version&gt;
	&lt;/properties&gt;

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
		&lt;/plugins&gt;
	&lt;/build&gt;

	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-core&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-beans&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- This dependancy is required for spring ApplicationContext container --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-context&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;
		
		&lt;!-- Spring AOP dependency --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-aop&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- AspectJ dependencies--&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.aspectj&lt;/groupId&gt;
			&lt;artifactId&gt;aspectjrt&lt;/artifactId&gt;
			&lt;version&gt;${aspectj.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.aspectj&lt;/groupId&gt;
			&lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;
			&lt;version&gt;${aspectj.version}&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
&lt;/project&gt;
</code></pre>


 * **spring-config.xml:** &lt;aop:aspectj-autoproxy /&gt; element is required for enabling Spring AOP support.
 
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;

&lt;beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
	xmlns:aop="http://www.springframework.org/schema/aop"
	xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
  http://www.springframework.org/schema/context
  http://www.springframework.org/schema/context/spring-context-3.0.xsd
  http://www.springframework.org/schema/aop
  http://www.springframework.org/schema/aop/spring-aop.xsd"&gt;

	&lt;context:component-scan base-package="com.ashish" /&gt;

	&lt;!-- This element is required for enabling Spring AOP support --&gt;
	&lt;aop:aspectj-autoproxy /&gt;
	
	&lt;bean id="loggingAspect" class="com.ashish.aop.LoggingAspect"&gt;
	&lt;/bean&gt;
	
	&lt;!-- Spring AOP applied on the methods available in this service --&gt;
	&lt;bean id="springServices" class="com.ashish.services.SpringServices"&gt;
	&lt;/bean&gt;

&lt;/beans&gt;
</code></pre>


 * **SpringServices.java:** AOP is implemented on this service class

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.services;

public class SpringServices {
	
	public void aMethod() {
		System.out.println("Inside aMethod()");
	}

	public String returningAdvice() {
		System.out.println("Inside returningAdvice");
		return new String("Hello world from returningAdvice");
	}

	public void throwsAdvice() {
		System.out.println("Inside throwsAdvice");
		throw new RuntimeException("Exception from throwsAdvice");
	}

	public String testAroundAdvice() {
		System.out.println("Inside testAroundAdvice");
		return new String("Hello world from testAroundAdvice");
	}

	public void testAroundThrowingExceptionAdvice() throws Exception {
		System.out.println("Inside testAroundThrowingExceptionAdvice");
		throw new RuntimeException("Exception from testAroundThrowingExceptionAdvice");
	}
}

</code></pre>


 * **LoggingAspect.java:** implementation of **Joint point, Advice and Pointcut** done in this class
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

	@Before("execution(* com.ashish.services.SpringServices.aMethod(..))")
	public void beforeExecution(JoinPoint jp) {
		System.out.println("Before method: " + jp.getSignature().getName()
				+ ". Class: " + jp.getTarget().getClass().getSimpleName());
	}

	@After("execution(* com.ashish.services.SpringServices.aMethod(..))")
	public void afterExecution(JoinPoint jp) {
		System.out.println("After method: " + jp.getSignature().getName()
				+ ". Class: " + jp.getTarget().getClass().getSimpleName());
	}
	
	@AfterReturning(pointcut = "execution(* com.ashish.services.SpringServices.returningAdvice(..))", returning = "result")
	public void afterReturningExecution(JoinPoint jp, Object result) {
		System.out.println("After returning advice: "
				+ jp.getSignature().getName() + ". Class: "
				+ jp.getTarget().getClass().getSimpleName());
		System.out.println("Advice returned: " + result);
	}

	@AfterThrowing(pointcut = "execution(* com.ashish.services.SpringServices.throwsAdvice(..))", throwing = "ex")
	public void afterThrowingExecution(JoinPoint jp, Exception ex) {
		System.out.println("After throwing advice: "
				+ jp.getSignature().getName() + ". Class: "
				+ jp.getTarget().getClass().getSimpleName());
		System.out.println("Exception: " + ex.getMessage());
	}

	@Around("execution(* com.ashish.services.SpringServices.testAround*(..))")
	public Object aroundExecution(ProceedingJoinPoint jp) throws Exception {

		System.out.println("Before method: " + jp.getSignature().getName()
				+ ". Class: " + jp.getTarget().getClass().getSimpleName());

		try {
			// Proceed with method invocation
			Object result = jp.proceed();

			System.out.println("Returning: " + result);
			return result;
		} catch (Throwable e) {
			System.out.println("Error: " + e.getMessage());
			throw new Exception("Error", e);
		}
	}
}
</code></pre>

* **MainApp.java:** Entry point of the application
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ashish.services.SpringServices;

public class MainApp {
	public static void main(String args[]) {
		ApplicationContext appContext = new ClassPathXmlApplicationContext("spring-config.xml");
		
		SpringServices springServices = (SpringServices) appContext.getBean("springServices");
		
		springServices.aMethod();
		
		System.out.println("===================================\n");
		Object result = springServices.returningAdvice();
		System.out.println("===================================\n");
		try {
			springServices.throwsAdvice();
		} catch (Exception e) {
			System.out.println("Exception caught in MainApp: " + e.getMessage());
		}
		System.out.println("===================================\n");
		result = springServices.testAroundAdvice();
		System.out.println("===================================\n");
		try {
			springServices.testAroundThrowingExceptionAdvice();
		} catch (Exception e) {
			System.out.println("Exception caught in MainApp: " + e.getMessage());
		}
		System.out.println("===================================\n");
	}
}
</code></pre>


 * **Output** of the application is shown below
<img src="https://cloud.githubusercontent.com/assets/11231867/7789281/def917c2-0278-11e5-9097-3104e78e33a6.png"/>