---
layout: post
category : java-Spring
tags : [Spring Tutorial]
weight: 130
---

{% include JB/setup %}
 

## Introduction
  
 
 A typical batch program runs on large number of records from a database, file, queue. For a typical batch job there would be some processor which takes large dataset as input then process and generates the desired output. In my example I am going to show how it can be achieved using spring batch. Before jumping into the code, lets understand the spring batch architecture at high level. Below high level architecture is taken from spring official documentation.
 
 <img src="https://cloud.githubusercontent.com/assets/11231867/26121529/907c383c-3a42-11e7-940c-30858792f885.png"/>
 
 This layered architure has three high level components called Application, Core and Infrastructure.
 
 
 * **Application:** Application contains all batch jobs and custom codes
 * **Core:** Core controls a batch job. It has JabLauncher, Job and Steps implementations
 * **Infrastructure:** Both Core and Application is built on top of the batch infrastructure. Readers, Writers and services are the typical example of infrastructure.

Below domain language of batch is referred from the spring official documentation. A job consists of multiple **steps**. Each **step** will have a **ItemReader**, **ItemProcessor** and **ItemWriter**. There might be interdepence between steps. Suppose there are a total of 4 steps for a job and Step4 runs if step3 fails. JobRepository provides CRUD operations for JobLauncher, Job and Steps implementation. When a **Job** is launched, a **JobExecution** is obtained from the repository and during the course of execution **StepExecution** and **JobExecution** implementations are persisted by passing them to the repository

<img src="https://cloud.githubusercontent.com/assets/11231867/26121880/abce9462-3a43-11e7-8e80-90d7b38e39ff.png"/>

One of the very important aspect of spring batch is schedule a job. Scheduling of job could be 


  * **Simple:** Set of batch program runs independently
  * **Medium:** Batch program will have some soft of relation among them. Such as, one job must follow another (serial). One job must run at the same time as another (parallel) and One job must run if the previous job is successful(Conditional). 
  * **Complex:** Nested Conditions and dependent comditions
  
  ## Required Software


* Eclipse for J2EE
* JDK 1.7
* Maven 2.2.x or above
* Tomcat 7

## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringMVCValidation.zip" target="_blank">SpringMVCValidation zip(20kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringMVCValidation" target="_blank">SpringMVCValidation</a>
	</span>
</div>

The project structure and important file details are given below  

<img src="https://cloud.githubusercontent.com/assets/11231867/8668713/9e7ba482-2a2b-11e5-977d-9b22e501327c.png"/>

SL No | File Name | Description
:---: | --- | ---
1 | **WEB-INF/applicationContext.xml** | This file has annotation-driven, component-scan and **InternalResourceViewResolver** configurations. **annotation-driven** configuration is must for the annotation driven validation
2 | **com.ashish.beans.Student** | age, name and id properties are declared and validation annotation added against each property
3 | **com.ashish.controller.StudentController** | Controller to display two different screens. User input validation is done in this class
4 | **WEB-INF/jsp/student.jsp** | Screen to take name, age and id as input from user. Validation errors are displayed in this same screen
5 | **WEB-INF/jsp/result.jsp** | Displays user's valid input in this screen

