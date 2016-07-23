---
layout: post
category : java-Spring
tags : [Spring Cloud,Cloud Foundry, IBM Bluemix]
weight: 107
---

{% include JB/setup %}

## Introduction

**Cloud Foundry** is an open source cloud computing platform as a service (PaaS) originally developed by VMware and now owned by Pivotal Software - a joint venture by EMC, VMware and General Electric.  
**Cloud Foundry** gives companies the speed, simplicity and control they need to develop and deploy applications faster and easier. There are several companies provide Cloud Foundry platform such as Amazon AWS, GE's Predix, IBM Bluemix, CenturyLink Cloud, ActiveState, HP Helion, anynines, and Swisscom.
In this blog, I am going to show the deployment of the microservices application in IBM bluemix cloud foundry platform using spring cloud. 

## Implementation details
I have developed two microservices applications in Cloud Foundry platform. One application provides debit card service and the other application provides the credit card service. Both of the applications are independent from each other however, a common database has been used for both of the microservices in this example.

Both of the mentioned applications are developed in Java using Spring. The major spring modules are Spring Core, Spring Web, Spring Cloud, Spring JPA.  

The Spring web and JPA have been used to implement webapplication and database conectivity respectively. The main focus in this blog is given on **Spring Cloud** to implement the following major functionalities

1. Configuration Management
2. Service Discovery
3. Circuit Breakers
 
## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/CreditCardCloudAppWS.zip" target="_blank">Credit Card Cloud App zip(67kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/DebitCardCloudAppWS" target="_blank">Credit Card Cloud App</a>
	</span>
</div>

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/DebitCardCloudAppWS.zip" target="_blank">Debit Card Cloud App zip(40kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/DebitCardCloudAppWS" target="_blank">Debit Card Cloud App</a>
	</span>
</div>
