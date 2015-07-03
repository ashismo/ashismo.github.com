---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 80
---

{% include JB/setup %}

## Introduction

This blog will help you to refresh your spring knowledge. I have tried to cover very important concepts of the Spring framework at one place. Hope this will be helpful.

### What is Spring?

Spring is an open source development framework for Enterprise Java. The core features of the Spring framework can be used in developing any java application. The core modules of the Spring framework are

 * **Spring Context:** For Dependency Injection (DI)
 * **Spring DAO:** For database operation using DAO pattern
 * **Spring JDBC:** For JDBC and Datasource support
 * **Spring ORM:** For ORM tool support such as Hibernate
 * **Spring AOP:** For Aspect Oriented Programming
 * **Spring Web module:** For creating web application

### What are the advantages of Spring framework


 * **Lightweight:** Spring is light weight. The basic version of the Spring framework is around 2MB
 * **Dependency Injection/Inversion of Control (IoC):** This helps to achieve loose coupling by wiring of independent components/objects
 *  **Spring Container:** contains and manages the lifecycle of the application objects
 *  **Transaction Management:** Spring supports the transaction management i.e. JDBC operation, File uploading, Exception Handling etceither by spring annotation or bean configuration
 *  **Spring MVC:** Spring MVC can be used to create Web application as well as restful webservices which is capable of returning XML or JSON response
 *  **Exception Handling:** Spring provides a convenient API to translate technology specific exceptions (thrown by JDBC, Hibernate etc) into consistent unchecked exceptions
 *  **Aspect Oriented Programming(AOP):** AOP breaks the program logic into distinct parts (called concerns). It is used to increase modularity by **cross-cutting concerns**. 
    A **cross-cutting concern** is a concern that can affect the whole application and should be centralized in one location in code as possible, such as transaction management, authentication, logging, security etc


### What is Spring Bean?

Any normal Java class that is initialized by Spring IoC container is called **Spring Bean**. We use spring application context to get Spring Bean instance. **Spring IoC Container** manages the lifecycle of Spring Bean scope and injecting any required dependencies in the bean.

#### Different scopes of Spring bean

When we declare **&lt;bean&gt;**, we can specify **scope** of the bean to inform the IoC container about the creation of the bean and how long it will survive.  
For any java application there are two different scopes called **singleton** and **prototype**  
There are three different scopes i.e. **request**, **session** and **global-session** specially for spring based java Web applications.


 * **Singleton** is the **default scope** of any bean. This means a single instance of the bean will get created per IoC container. Hence the **Singleton** beans are not **thread safe.**
 * In **prototype** scope a new instance will get created everytime the bean is requested.
 * In **request** scope, a bean is defined to an HTTP request. This scope is valid only in a web-aware spring ApplicationContext.
 * In **session** scope, a bean is defined to an HTTP session. This scope is valid only in a web-aware spring ApplicationContext.
 * In **global-session** scope, a bean is defined to a global HTTP session. This scope is valid only in a web-aware spring ApplicationContext.

To set the scope of the spring bean, we can use **scope** attibute in **&lt;bean&gt;** tag. **@scope** is used in annotation based DI.

### Spring IoC Container

The **Spring container** is at the core of the Spring Framework. The container will create the objects, wire them together, configure them, and manage their complete life cycle from creation till destruction. The Spring container uses dependency injection (DI) to manage the components that make up an application.  
  
There are two different types of containers


 * **BeanFactory container:** This is the heart of the Spring container. org.springframework.beans.factory.**BeanFactory** is an interface and acts as a IoC container which instantiates, configures, and manages a number of beans.  
 Check the **com.ashish.beanfactory.MainApp** class in Spring BeanFactory example
 
<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/SpringBeanFactoryExample.zip" target="_blank">BeanFactory Example(15kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/SpringBeanFactoryExample" target="_blank">BeanFactory Example</a>
	</span>
</div>

 * **ApplicationContext container:** org.springframework.context.**ApplicationContext** interface also acts as the IoC container but the **ApplicationContext** interface is built on top of the **BeanFactory** interface to provides some extra functionality than BeanFactory such as simple integration with Spring's AOP, message resource handling (for I18N), event propagation, application layer specific context (e.g. WebApplicationContext) for web application. So it is better to use ApplicationContext than BeanFactory  
 Check the **com.ashish.applicationcontext.MainApp** class in Spring ApplicationContext example

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/SpringApplicationContextExample.zip" target="_blank">ApplicationContext Example(14kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/SpringApplicationContextExample" target="_blank">ApplicationContext Example</a>
	</span>
</div>

### @Autowired

For annotation based dependency injection, @Autowired annotation is used.
If @Autowired is applied to


 * **field:** for the field-based dependency injection
 * **setter** for the setter dependency injection. Same as field-based dependency injection.
 * **constructor** for constructor-based dependency injection


## Transaction management in Spring

Database transaction is a set of actions treated as the unit of work. Main principle of a transaction is either commit the all actions or rollback everyting in case of failure. While commiting data in a trasanction, we need to ensure the trancation agreement/properties called **ACID (Atomicity-Consistency-Isolation-Durability)** 


 * **Atomicity:** All operations in a transaction is considered as a unit of work. Hence, a transaction will be either commited or roll backed.
 * **Consistency:** This ensures that a transaction will bring the database from one valid state to another valid state by maintaining the referencial integrity of the database
 * **Isolation:** Each transaction should be isolated from other transactions even though they are working on the same set of data.
 * **Durability:** This ensures that once a transaction is completed, the data will be made permanent in the database. The data will not get lost even after power loss or system crash
 
**Spring** supports both **Programatic** and **Declarative** transaction management. It also supports **Global** and **Local** transactions.

### Global vs Local Transaction
Local transaction deals with single data source (e.g. JDBC) in a centralized system
Global transaction deals with multiple data sources (e.g. JDBC, JMS) in a distributed system
