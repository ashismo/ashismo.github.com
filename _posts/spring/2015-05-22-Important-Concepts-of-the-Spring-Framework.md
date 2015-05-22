---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 90
---

## Introduction

This blog will help you to refresh your spring knowledge. I have tried to cover very important concepts of the Spring framework at one place. Hope this will be helpful.

### What is Spring?

Spring id an open source development framework for Enterprise Java. The core feature of the Spring framework can be used in developing any java application. The core modules of the Spring framework are

 * **Spring Context:** For Dependency Injection (DI)
 * **Spring DAO:** For database operation using DAO pattern
 * **Spring JDBC:** For JDBC and Datasource support
 * **Spring ORM:** For ORM tool support such as Hibernate
 * **Spring AOP:** For Aspect Oriented Programming
 * **Spring Web module:** For creating web application

### What are the advantages of Spring framework


 * **Lightweight:** Spring is light weight. The basic version of the Spring framework is around 2MB
 * **Dependency Injection/Inversion of Control (IoC):** This helps to achieve loose coupling by wiring of independent components/objects
 *  **Spring Container:** containsand manages the lifecycle of the application objects
 *  **Transaction Management:** Spring supports the transaction management i.e. JDBC operation, File uploading, Exception Handling etceither by spring annotation or bean configuration
 *  **Spring MVC:** Spring MVC can be used to create Web application as well as restful webservices which is capable of returning XML or JSON response
 *  **Exception Handling:** Spring provides a convenient API to translate technology specific exceptions (thrown by JDBC, Hibernate etc) into consistent unchecked exceptions
 *  **Aspect Oriented Programming(AOP):** AOP breaks the program logic into distinct parts (called concerns). It is used to increase modularity by **cross-cutting concerns**. 
    A **cross-cutting concern** is a concern that can affect the whole application and should be centralized in one location in code as possible, such as transaction management, authentication, logging, security etc


### What is Spring Bean?

Any normal Java class that is initialized by Spring IoC container is called **Spring Bean**. We use spring application context to get Spring Bean instance. **Spring IoC Container** manages the lifecycle of Spring Bean scope and injecting any required dependencies in the bean.
