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

### Difference between context:annotation-config and context:component-scan

**context:annotation-config** is used to activate annotations in beans already registered in the application context
**context:component-scan** can also do what **context:annotation-config** does but <context:component-scan> also scans packages to find and register beans within the application context.

<a href='http://stackoverflow.com/questions/7414794/difference-between-contextannotation-config-vs-contextcomponent-scan' target='_blank'>Check here for more details</a>

### Difference between @Component, @Controller, @Repository & @Service annotations

If a class is marked with @Component/@Controller/@Service/@Repository annotation then the spring DI container can identify the class during component scan mechanism.
However, it is good idea to use @Service for service layer classes, and @Controller should be used in spring mvc web controller. @Repository is used to import DAOs into DI container. Also any unchecked exception will get translated into Spring **DataAccessException**

### ViewResolver vs MultipartResolver

**ViewResolver** is used to resolve view by name. This interface is implemented by InternalResourceViewResolver
**MultipartResolver** is used to handle file upload in web application.

### Validation in Spring MVC

**org.springframework.validation.Validator** interface supports spring MVC validation. Some of the util menthods to validate a form are **rejectIfEmptyOrWhitespace()** and **rejectIfEmpty()** in the ValidationUtils class

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

@Component
public class EmployeeValidator implements Validator
{
    public boolean supports(Class clazz) {
        return EmployeeVO.class.isAssignableFrom(clazz);
    }
  
    public void validate(Object target, Errors errors)
    {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "firstName", "error.firstName", "First name is required.");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "lastName", "error.lastName", "Last name is required.");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "email", "error.email", "Email is required.");
    }
}

</code></pre>

### Spring MVC interceptor

**HandlerInterceptor** interface acts as a spring MVC interceptor. It intercepts before and after serving the request. preHandle(), postHandle() and afterCompletion() are the methods to be overridden in case you implement **HandlerInterceptor** interface. However, to avoid overriding, you can use HandlerInterceptorAdapter class.

### Exception handling in Spring MVC framework

Exception in Spring is handled declaratively using **SimpleMappingExceptionResolver** class. List of the exceptions that you want to handle is configured against **exceptionMapping** property. If any one of the exceptions occurs anywhere in the flow will be caught and respective view will be displayed. For all other exceptions you can catch them against **defaultErrorView** property. Sample configuration is given below

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

&lt;bean class="org.springframework.web.servlet.handler.SimpleMappingExceptionResolver"&gt;
    &lt;property name="exceptionMappings"&gt;
        &lt;props&gt;
            &lt;prop key="com.ashish.exception.XYZException"&gt;
                error/xyzExceptionView
            &lt;/prop&gt;
        &lt;/props&gt;
    &lt;/property&gt;
    &lt;property name="defaultErrorView" value="error/genericExceptionView"/&gt;
&lt;/bean&gt;

</code></pre>

### Difference between Spring DAO and Spring ORM

**DAO** is a design pattern to minimize coupling between the application an the backend  
**ORM** deals with how to  map objects into an object relationation database which reduess coupling between the database and application.  
If you use **ORM** without **DAO** then your application will become ORM dependent so it would be hard to move from one ORM (say hibernate) to another ORM (e.g. NoSQL).

Spring DAO is implemented using @Repository annotation. Spring repository extends JPARepository and passes JPA entity and its primary key.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
@Repository
public interface PersonRepository extends JPARepository<Person, PersonPK> {
    public List<Person> findByFirstName(String firstName);
    @Query("Your SQL query")
    public List<Person> findByAddress(String firstName);
}

<code></pre>

### How to get ServletContext and ServletConfig object in a Spring Bean?

Implement **ServletContextAware** and **ServletConfigAware** interfaces and override below methods

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
@Controller
@RequestMapping(value = "/magic")
public class SimpleController implements ServletContextAware, ServletConfigAware {
 
    private ServletContext context;
    private ServletConfig config;
 
    @Override
    public void setServletConfig(final ServletConfig servletConfig) {
        this.config = servletConfig;
 
    }
 
    @Override
    public void setServletContext(final ServletContext servletContext) {
        this.context = servletContext;
    }
     
    //other code
}

</code></pre>



## Transaction management in Spring

Database transaction is a set of actions treated as the unit of work. Main principle of a transaction is either commit the all actions or rollback everyting in case of failure. While commiting data in a trasanction, we need to ensure the trancation agreement/properties called **ACID (Atomicity-Consistency-Isolation-Durability)** 


* **Atomicity:** All operations in a transaction is considered as a unit of work. Hence, a transaction will be either commited or roll backed.
* **Consistency:** This ensures that a transaction will bring the database from one valid state to another valid state by maintaining the referencial integrity of the database
* **Isolation:** Each transaction should be isolated from other transactions even though they are working on the same set of data.
* **Durability:** This ensures that once a transaction is completed, the data will be made permanent in the database. The data will not get lost even after power loss or system crash
 
**Spring** supports both **Programatic** and **Declarative** transaction management. It also supports **Global** and **Local** transactions.

### Global vs Local Transaction
**Local transaction** deals with single data source (e.g. JDBC) in a centralized system  
**Global transaction** deals with multiple data sources (e.g. JDBC, JMS) in a distributed system. A global transaction is the collection of multiple local transactions

### Programatic vs Declarative transaction

Spring suppoprts two different types of transaction management called **Programatic** and **Declarative** transaction management


* **Programatic:** This means, you need to manage the transaction in your code. It is hard to maintain
* **Declarative:** This means you seperate the transaction management code from your business logic. You need to use XML or annotation based configuration to manage the transactions. **Spring AOP** module supports declarative transaction management
 

### Dirty read, Phantom Read and Non Repeatable Read


* **Dirty read** occurs when one transaction is changing records/tuple and second transaction is trying to read this tuple/record before the original change has been committed or rolled back. This is known as a dirty read scenario because there is always the possibility that the first transaction may rollback the change, resulting in the second transaction having read an invalid value.
* **Phantom read** occurs where in a transaction same query executes twice, and the second result set includes rows that weren’t visible in the first result set. This situation is caused by another transaction inserting new rows between the execution of the two queries
* **Non Repeatable Reads** happen when in a same transaction same query yields different results. This happens when another transaction updates the data returned by other transaction.

### Isolation and Propagation


* **Isolation:** The degree to which this transaction is isolated from the work of other transactions. For example, can this transaction see uncommitted writes from other transactions?
* **Propagation:** In case of propagation, the code will always run in a transaction scope. Create a new transaction or reuse one if availble.
