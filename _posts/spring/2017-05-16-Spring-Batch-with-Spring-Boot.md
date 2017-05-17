---
layout: post
category : java-Spring
tags : [Spring Batch Tutorial]
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

## High level description about the code

This application is written in spring boot. The spring batch is integraed on top of the spring boot application. A job is scheduled in every 5 seconds. Item reader reads some constant values. Item processor process it to upper case. Item writer writes into console. Once a task is completed the listener mark the job as completed. The whole process again runs after 5 seconds 

## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/spring-boot-batch.zip" target="_blank">spring-boot-batch.zip(11kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/spring-boot-batch" target="_blank">spring-boot-batch</a>
	</span>
</div>

The project structure and important file details are given below  

<img src="https://cloud.githubusercontent.com/assets/11231867/26134317/be77837a-3a7b-11e7-8eb6-700de3546f0e.GIF"/>

SL No | File Name | Description
:---: | --- | ---
1 | **com.ashish.spring.batch.config.WebConfig** | This file configures the Spring boot application, enables batch processing and scheduling.
2 | **com.ashish.spring.batch.config.BatchConfig** | This file configures the JobLauncher, Job and Steps.
3 | **com.ashish.spring.batch.listener.BatchJobCompletionListener** | Continuously monitors (listen) the application. Once job is executed prints a message.
4 | **com.ashish.spring.batch.step.BatchItemReader** | Item Reader reads input for a given batch step.
5 | **com.ashish.spring.batch.step.BatchItemProcessor** | Item Processor process the data read by the item reader.
6 | **com.ashish.spring.batch.step.BatchItemWriter** | Item Writer writes the processed data.
7 | **src/main/resources/application.properties** | database url, server port and log level property is defined in this file

#### pom.xml

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;com.ashish.spring.batch&lt;/groupId&gt;
	&lt;artifactId&gt;spring-boot-batch&lt;/artifactId&gt;
	&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;

	&lt;parent&gt;
		&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		&lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
		&lt;version&gt;1.3.3.RELEASE&lt;/version&gt;
	&lt;/parent&gt;

	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
		&lt;/dependency&gt;

		&lt;!-- Below dependency has provided scope defined because during deployment 
			in tomcat this jar is not required. This jar is required to execute the stand 
			alone application with embedded tomcat --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
			&lt;scope&gt;provided&lt;/scope&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-aop&lt;/artifactId&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.aspectj&lt;/groupId&gt;
			&lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;
		&lt;/dependency&gt;

		&lt;!-- Spring batch dependency START --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-batch&lt;/artifactId&gt;
		&lt;/dependency&gt;
		&lt;!-- Spring batch dependency END --&gt;
		
		&lt;!-- h2db dependency START --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;com.h2database&lt;/groupId&gt;
			&lt;artifactId&gt;h2&lt;/artifactId&gt;
		&lt;/dependency&gt;
		
		&lt;!-- Below dependency act as the h2 db client --&gt;
		&lt;!-- URL to access the web client: http://localhost:9000/h2-console/login.do --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;
			&lt;optional&gt;true&lt;/optional&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
	
	&lt;!-- h2db dependency END --&gt;
&lt;/project&gt;
</code></pre>

#### WebConfig.java : 
Spring boot application configuration and batch configuration is present in this file

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.spring.batch.config;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(scanBasePackages="com.ashish")
@EnableBatchProcessing
@EnableScheduling // Enables scheduling
public class WebConfig {


    /**
     * Run the spring boot application in embedded tomcat 
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        SpringApplication.run(WebConfig.class, args);
    }

}
</code></pre>


#### BatchConfig.java: 
This file has configuration for JobLauncher, Job and Steps.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.spring.batch.config;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecutionListener;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.support.transaction.ResourcelessTransactionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Scheduled;

import com.ashish.spring.batch.listener.BatchJobCompletionListener;
import com.ashish.spring.batch.step.BatchItemProcessor;
import com.ashish.spring.batch.step.BatchItemReader;
import com.ashish.spring.batch.step.BatchItemWriter;

@Configuration
public class BatchConfig {

	@Autowired
	private JobBuilderFactory jobBuilderFactory;

	@Autowired
	private StepBuilderFactory stepBuilderFactory;

	@Autowired
	private JobLauncher jobLauncher;

	@Autowired
	private Job processJob;

	// This job runs in every 5 seconds
	@Scheduled(fixedRate = 5000)
	public void printMessage() {
		try {
			JobParameters jobParameters = new JobParametersBuilder().addLong(
					"time", System.currentTimeMillis()).toJobParameters();
			jobLauncher.run(processJob, jobParameters);
			System.out.println("I have been scheduled with Spring scheduler");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Bean
	public Job processJob() {
		return jobBuilderFactory.get("processJob")
				.incrementer(new RunIdIncrementer()).listener(listener())
				.flow(orderStep1()).end().build();
	}

	/**
	 * To create a step, reader, processor and writer has been passed serially
	 * 
	 * @return
	 */
	@Bean
	public Step orderStep1() {
		return stepBuilderFactory.get("orderStep1").<String, String> chunk(1)
				.reader(new BatchItemReader())
				.processor(new BatchItemProcessor())
				.writer(new BatchItemWriter()).build();
	}

	@Bean
	public JobExecutionListener listener() {
		return new BatchJobCompletionListener();
	}

	@Bean
	public ResourcelessTransactionManager transactionManager() {
		return new ResourcelessTransactionManager();
	}

}
</code></pre>


#### SpringBootAppWS.java
This file has commented out entry for now. However, provision is there to add restful service if reqired

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.spring.batch.app;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class SpringBootAppWS {

//	@Autowired
//	JobLauncher jobLauncher;
//
//	@Autowired
//	Job processJob;
//
//	@RequestMapping(path = "/startJob", method = RequestMethod.GET, headers = "Accept=application/json", produces = "application/json")
//	public String startJob() throws Exception {
//
//		JobParameters jobParameters = new JobParametersBuilder().addLong(
//				"time", System.currentTimeMillis()).toJobParameters();
//		jobLauncher.run(processJob, jobParameters);
//
//		return "Batch job has been invoked";
//	}

}

</code></pre>

#### BatchItemReader.java
Item Reader reads input for a given batch step

```java
package com.ashish.spring.batch.step;

import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.NonTransientResourceException;
import org.springframework.batch.item.ParseException;
import org.springframework.batch.item.UnexpectedInputException;

public class BatchItemReader implements ItemReader<String> {

	private String[] messages = { "Hello World",
			"Welcome to Spring Batch using Spring boot Example",
			"H2 Database has been used in this example" };

	private int count = 0;

//	@Override
	public String read() throws Exception, UnexpectedInputException,
			ParseException, NonTransientResourceException {

		if (count < messages.length) {
			return messages[count++];
		} else {
			count = 0;
		}
		return null;
	}

}
```


#### BatchItemProcessor.java
Item Processor process the data read by the item reader

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.spring.batch.step;

import org.springframework.batch.item.ItemProcessor;

public class BatchItemProcessor implements ItemProcessor<String, String> {

//	@Override
	public String process(String data) throws Exception {
		return data.toUpperCase();
	}

}
</code></pre>


#### BatchItemWriter.java
Item Writer writes the processed data

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.spring.batch.step;

import java.util.List;

import org.springframework.batch.item.ItemWriter;

public class BatchItemWriter implements ItemWriter<String> {

	//@Override
	public void write(List<? extends String> messages) throws Exception {
		for (String msg : messages) {
			System.out.println("Writing the data using batch writer: " + msg);
		}
	}

}
</code></pre>


#### BatchJobCompletionListener.java
This class extends JobExecutionListenerSupport and continuously listen the application change and prints the message once completed

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.spring.batch.listener;

import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;

/**
 * This class extends JobExecutionListenerSupport and continuously listen the application change and 
 * prints the message once completed.
 * @author Ashish Mondal
 *
 */
public class BatchJobCompletionListener extends JobExecutionListenerSupport {

	@Override
	public void afterJob(JobExecution jobExecution) {
		if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
			System.out.println("BATCH JOB COMPLETED SUCCESSFULLY");
		}
	}

}
</code></pre>
