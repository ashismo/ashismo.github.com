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
* Tomcat 7

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
1 | **WEB-INF/applicationContext.xml** | This file has annotation-driven, component-scan and **InternalResourceViewResolver** configurations. **annotation-driven** configuration is must for the annotation driven validation
2 | **com.ashish.beans.Student** | age, name and id properties are declared and validation annotation added against each property
3 | **com.ashish.controller.StudentController** | Controller to display two different screens. Validation check is present in this class
4 | **WEB-INF/jsp/student.jsp** | Screen to take name, age and id as input from user. Validation errors are displayed in this same screen
5 | **WEB-INF/jsp/result.jsp** | Displays user's valid input in this screen


* Create a maven project and update the pom.xml with the below content

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;com.ashish.spring&lt;/groupId&gt;
	&lt;artifactId&gt;SpringMVCValidation&lt;/artifactId&gt;
	&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
	&lt;packaging&gt;war&lt;/packaging&gt;

	&lt;properties&gt;
		&lt;spring.version&gt;3.0.5.RELEASE&lt;/spring.version&gt;
	&lt;/properties&gt;

	&lt;build&gt;
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
				&lt;version&gt;2.3&lt;/version&gt;
				&lt;configuration&gt;
					&lt;warSourceDirectory&gt;WebContent&lt;/warSourceDirectory&gt;
					&lt;failOnMissingWebXml&gt;false&lt;/failOnMissingWebXml&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
		&lt;/plugins&gt;
	&lt;/build&gt;
	&lt;dependencies&gt;
		&lt;!-- Spring 3 dependencies --&gt;
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
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
			&lt;artifactId&gt;spring-security-web&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
			&lt;artifactId&gt;spring-security-config&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- jstl --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;javax.servlet&lt;/groupId&gt;
			&lt;artifactId&gt;jstl&lt;/artifactId&gt;
			&lt;version&gt;1.2&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- Need Servlet --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;javax.servlet&lt;/groupId&gt;
			&lt;artifactId&gt;servlet-api&lt;/artifactId&gt;
			&lt;version&gt;2.5&lt;/version&gt;
			&lt;scope&gt;provided&lt;/scope&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;javax.validation&lt;/groupId&gt;
			&lt;artifactId&gt;validation-api&lt;/artifactId&gt;
			&lt;version&gt;1.1.0.Final&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.hibernate&lt;/groupId&gt;
			&lt;artifactId&gt;hibernate-validator&lt;/artifactId&gt;
			&lt;version&gt;5.0.1.Final&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
&lt;/project&gt;
</code></pre>

* **WEB-INF/applicationContext.xml** has annotation-driven, component-scan and **InternalResourceViewResolver** configurations. **annotation-driven** configuration is must for the annotation driven validation

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	xmlns:context="http://www.springframework.org/schema/context"
	xmlns:mvc="http://www.springframework.org/schema/mvc"
	xsi:schemaLocation="http://www.springframework.org/schema/beans
	http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
	http://www.springframework.org/schema/mvc
	http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd  	
	http://www.springframework.org/schema/context
	http://www.springframework.org/schema/context/spring-context-3.0.xsd"&gt;

	&lt;!-- This configuraton is must for the annotation driven validation --&gt;
	&lt;mvc:annotation-driven /&gt;
	&lt;context:component-scan base-package="com.ashish" /&gt;
	
	&lt;bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"&gt;
		&lt;property name="prefix" value="WEB-INF/jsp/" /&gt;
      	&lt;property name="suffix" value=".jsp" /&gt;
	&lt;/bean&gt;

&lt;/beans&gt;
</code></pre>

* Create student bean to bind data between jsp and controller

<pre class="prettyprint highlight"><code class="language-java" data-lang="java"> 
package com.ashish.beans;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

public class Student {
	@NotNull(message="Please enter your age")
	@Min(value=1, message="Age should be between 1-30")
	@Max(value=30, message="Age should be between 1-30")
	private int age;
	
	@NotEmpty(message="Please enter your name")
	@Size(min=1,max=40,message="Name should not exceed 40 character long")
	private String name;

	@NotNull(message="Please enter your id")
	@Min(value=100, message="Id should be 3 digits long")
	@Max(value=999, message="Id should be 3 digits long")
	private int id;

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
</code></pre>

* Controller to display validate data and display right jsp to the user. Go through the java doc comments for better understanding

<pre class="prettyprint highlight"><code class="language-java" data-lang="java"> 
package com.ashish.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.ashish.beans.Student;

@Controller
public class StudentController {

	/**
	 * The request mapping will work for two different URLs
	 * @param mm
	 * @return
	 */
	@RequestMapping({"/*", "/student"})
	public String student(ModelMap mm) {
		// Bind Student object with model attribute called "student" (refer student.jsp file)
		mm.addAttribute("student", new Student());
		return "student";
	}

	/**
	 * This method validates the user input and displays the right jsp to the user.
	 * Note that BindingResult must follow @ModelAttribute
	 * In this method Http request handling also shown (HttpServletRequest has been used as method parameter)
	 * @param student
	 * @param errors
	 * @param model
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/addStudent", method = RequestMethod.POST)
	public ModelAndView addStudent(@Valid @ModelAttribute("student") Student student, BindingResult errors, ModelMap model, HttpServletRequest req) {
		
		// If the form has error then it will render user the input screen
		if (errors.hasErrors()) {
			return new ModelAndView("student", "student", model);
		}
		
		// Populating model from http request and Student object
		model.addAttribute("name", req.getParameter("name"));
		model.addAttribute("age", student.getAge());
		model.addAttribute("id", student.getId());
		return new ModelAndView("result", "student", model);
	}
}

</code></pre>

* **student.jsp** for user input. It also displays the validation error (if any)

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%&gt;
&lt;html&gt;
&lt;head&gt;&lt;/head&gt;
&lt;body&gt;
	&lt;h2&gt;Student Information&lt;/h2&gt;
	&lt;form:form method="POST" action="addStudent" modelAttribute="student"&gt;
		&lt;table&gt;
			&lt;tr&gt;
				&lt;td&gt;&lt;form:label path="name"&gt;Name: &lt;/form:label&gt;&lt;/td&gt;
				&lt;td&gt;&lt;form:input path="name" /&gt;&lt;/td&gt;
				&lt;td&gt;&lt;span style="color:red;"&gt;&lt;form:errors path="name"/&gt;&lt;/span&gt;&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
				&lt;td&gt;&lt;form:label path="age"&gt;Age: &lt;/form:label&gt;&lt;/td&gt;
				&lt;td&gt;&lt;form:input path="age" /&gt;&lt;/td&gt;
				&lt;td&gt;&lt;span style="color:red;"&gt;&lt;form:errors path="age"/&gt;&lt;/span&gt;&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
				&lt;td&gt;&lt;form:label path="id"&gt;Id: &lt;/form:label&gt;&lt;/td&gt;
				&lt;td&gt;&lt;form:input path="id" /&gt;&lt;/td&gt;
				&lt;td&gt;&lt;span style="color:red;"&gt;&lt;form:errors path="id"/&gt;&lt;/span&gt;&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
				&lt;td colspan="2"&gt;&lt;input type="submit" value="Submit" /&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;
	&lt;/form:form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

* **result.jsp** It displays valid user data

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Spring MVC Form Handling&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Submitted Student Information&lt;/h2&gt;
   &lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Name: &lt;/td&gt;
        &lt;td&gt;${name}&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Age: &lt;/td&gt;
        &lt;td&gt;${age}&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Id: &lt;/td&gt;
        &lt;td&gt;${id}&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;  
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

## Output

Below is the output of the application

<img src=""/>
