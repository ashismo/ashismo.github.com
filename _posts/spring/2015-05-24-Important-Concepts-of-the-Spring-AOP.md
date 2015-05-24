---
layout: post
category : java-Spring
tags : [Spring Tutorial]
weight: 90
---

{% include JB/setup %}

## Introduction

AOP (Aspect Oriented Programming) breaks the program logic into distinct parts (called concerns). It is used to increase modularity by **cross-cutting concerns**.  
It's main purpose is to aggregate sections of code that would be usually repeated in multiple places of your application in a single spot, for example, such as transaction management, authentication, logging, security etc.  
In simple term, we can say Spring AOP can take control and add some additional functionalities before and after the methods getting executed.  
 AOP implementations are provided by
 
 
 * AspectJ
 * Spring AOP
 * JBoss AOP

The most common use of AOP are


 * Transaction Management using @Transactional
 * AOP acts as a request interceptor. Suppose you need all requests coming to a server to be intercepted i.e. keep track of the request parameters and response parameters
 * Exception Handling
 * Audit Log
 

## AOP Terminology

Below are the important terminologies in AOP


 * **Join point:** Join point is any point in your program such as method execution, exception handling, field access etc. Spring supports only method execution join point.
 * **Advice:** Advice represents an action taken by an aspect at a particular join point. There are different types of advices:
 
   * Before Advice: it executes before a join point (i.e. method execution).
   * After Returning Advice: run after the method returns a result
   * After Throwing Advice: it executes if method exits by throwing an exception.
   * After (finally) Advice: it executes after a join point regardless of join point exit whether normally or exceptional return.
   * Around Advice: It executes before and after a join point.
 * **Pointcut:**  It is an expression language of AOP that matches join points.
 * **Introduction:** It means introduction of additional method and fields for a type. It allows you to introduce new interface to any advised object.
 * **Target Object:** It is the object i.e. being advised by one or more aspects. It is also known as proxied object in spring because Spring AOP is implemented using runtime proxies.
 * **Aspect:** It is a class that contains advices, joinpoints etc.
 * **Interceptor:** It is an aspect that contains only one advice.
 * **AOP Proxy:** It is used to implement aspect contracts, created by AOP framework. It will be a JDK dynamic proxy or CGLIB proxy in spring framework.
 * **Weaving:** It is the process of linking aspect with other application types or objects to create an advised object. Weaving can be done at compile time, load time or runtime. Spring AOP performs weaving at runtime.
 
## AOP Example
 
<a href="http://ashismo.github.io/java-spring/2015/05/25/Spring-AOP-Example/" target="_blank">Check my another blog</a> to understand the implementation of **Joint point, Advice and Pointcut**
