---
layout: post
category : java-Spring
tags : [Spring Tutorial]
weight: 70
---

{% include JB/setup %}

## Introduction

In most of the application there are java script based front end validation. Sometimes there are business needs to have the same validation in front end and server side as well to make the system full proof from security threat. In this tutorial I am going to show how to implement server side validation using Spring MVC and Hibernate validator framework.  
This is simple 2 pages application. In the first page it is going to **validate** and accept Student Name, Age and Id and in the second page it will display the Name, Age and Id.

## Required Software


* Eclipse for J2EE
* JDK 1.7
* Maven 2.2.x or above

## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringMVCValidation.zip" target="_blank">SpringMVCValidation zip(16kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringMVCValidation" target="_blank">SpringMVCValidation</a>
	</span>
</div>

Important file details are given below  

SL No | File Name | Description
:---: | --- | ---
1 | **WEB-INF/applicationContext.xml** | component-scan and **InternalResourceViewResolver** are configured
2 | **com.ashish.beans.Student** | age, name and id properties are declared and validation annotation added against each property
3 | **com.ashish.controller.HelloWorldController** | Controller to display two different screens. Validation check is present in this class
4 | **WEB-INF/jsp/student.jsp** | Screen to take name, age and id as input from user. Validation errors are displayed in this same screen
5 | **WEB-INF/jsp/result.jsp** | Displays user's valid input in this screen
