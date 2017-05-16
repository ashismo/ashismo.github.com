---
layout: post
category : java-Spring
tags : [Spring Tutorial]
weight: 130
---

{% include JB/setup %}
 

## Introduction
  
 
 A typical batch program runs on large number of records from a database, file, queue. For a typical batch job there would be some processor which takes large dataset as input then process and generates the desired output. In my example I am going to show how it can be achieved using spring batch. Before jumping into the code, lets understand the spring batch architecture at high level. Below high level architecture is taken from spring official documenttation.
 
 <img src="https://cloud.githubusercontent.com/assets/11231867/26121529/907c383c-3a42-11e7-940c-30858792f885.png"/>
 
 This layered architure has three high level components called Application, Core and Infrastructure.
 
 
 * **Application:** Application contains all batch jobs and custom codes
 * **Core:** Core controls a batch job. It has JabLauncher, Job and Steps implementations
 * **Infrastructure:** Both Core and Application is built on top of the batch infrastructure. Readers, Writers and services are the typical example of infrastructure.

Below domain language of batch is referred from the spring official documentation

<img src="https://cloud.githubusercontent.com/assets/11231867/26121880/abce9462-3a43-11e7-8e80-90d7b38e39ff.png"/>
