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

## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/" target="_blank">spring-batch.zip(20kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/" target="_blank">spring-batch</a>
	</span>
</div>

The project structure and important file details are given below  

<img src="https://cloud.githubusercontent.com/assets/11231867/26129487/64c3f3d0-3a5e-11e7-9d21-14cb93fa5bb9.png"/>

SL No | File Name | Description
:---: | --- | ---
1 | **com.ashish.batch.config.WebConfig** | This file configures the Spring boot application, enables batch processing and scheduling.
2 | **com.ashish.batch.config.BatchConfig** | This file configures the JobLauncher, Job and Steps.
3 | **com.ashish.batch.listener.BatchJobCompletionListener** | Continuously monitors (listen) the application. Once job is executed prints a message.
4 | **com.ashish.batch.step.BatchItemReader** | Item Reader reads input for a given batch step.
5 | **com.ashish.batch.step.BatchItemProcessor** | Item Processor process the data read by the item reader.
6 | **com.ashish.batch.step.BatchItemWriter** | Item Writer writes the processed data.
7 | **src/main/resources/application.properties** | database url, server port and log level property is defined in this file


