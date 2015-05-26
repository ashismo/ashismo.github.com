---
layout: post
category : java-Spring
tags : [Spring Tutorial]
weight: 70
---

{% include JB/setup %}

## Introduction

Spring provides API to integrate spring with ORM frameworks such as Hibernate, JPA(Java Persistence API), JDO(Java Data Objects), Oracle Toplink and iBATIS.  
The main advantages of ORM framework with Spring are


 * **Better exception handling** with the spring provided API for exception handling with ORM framework
 * **Better transaction management** using explicit template wrapper class or AOP style method interceptor

In this example, I have integrated Spring with Hibernate.

## Required Software


 * JDK 1.7
 * Maven 2.2.x
 * Eclipse for J2EE 

## Steps to write code

In this example HSQLDB jar has been used. So no real database is required to run the stand alone application

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringORMExample.zip" target="_blank">SpringORMExample zip(24kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/SpringORMExample" target="_blank">SpringORMExample</a>
	</span>
</div>


 * Create a simple java project with src/main/java, src/main/resources as the source directory. Once project is created, you can add source directory from the below screen (Right click on project -> properties)
<img src="https://cloud.githubusercontent.com/assets/11231867/7810036/6b2120de-03bc-11e5-8bc6-d10d31dc6409.png"/>
 * Convert the project into maven project (Right click on the project -> Configure -> Convert to Maven project)
 * Add the following dependancies in your pom.xml for Hibernate One to Many example

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;SpringORMExample&lt;/groupId&gt;
	&lt;artifactId&gt;SpringORMExample&lt;/artifactId&gt;
	&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;

	&lt;properties&gt;
		&lt;spring.version&gt;4.0.1.RELEASE&lt;/spring.version&gt;
		&lt;aspectj.version&gt;1.7.4&lt;/aspectj.version&gt;
		&lt;hibernate.version&gt;4.0.1.Final&lt;/hibernate.version&gt;
	&lt;/properties&gt;

	&lt;repositories&gt;
		&lt;repository&gt;
			&lt;id&gt;jboss&lt;/id&gt;
			&lt;url&gt;http://repository.jboss.org/maven2&lt;/url&gt;
		&lt;/repository&gt;
	&lt;/repositories&gt;

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
		&lt;/plugins&gt;
	&lt;/build&gt;

	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-core&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-beans&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- This dependancy is required for spring ApplicationContext container --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-context&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- Spring datasource --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-orm&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- Hibernate Dependencies --&gt;
		&lt;!-- Hibernate core --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.hibernate&lt;/groupId&gt;
			&lt;artifactId&gt;hibernate-core&lt;/artifactId&gt;
			&lt;version&gt;${hibernate.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- Hibernate annotation --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;hibernate-annotations&lt;/groupId&gt;
			&lt;artifactId&gt;hibernate-annotations&lt;/artifactId&gt;
			&lt;version&gt;3.3.0.GA&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;hibernate-commons-annotations&lt;/groupId&gt;
			&lt;artifactId&gt;hibernate-commons-annotations&lt;/artifactId&gt;
			&lt;version&gt;3.0.0.GA&lt;/version&gt;
		&lt;/dependency&gt;
		
		&lt;!-- Hibernate library dependecy start --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;dom4j&lt;/groupId&gt;
			&lt;artifactId&gt;dom4j&lt;/artifactId&gt;
			&lt;version&gt;1.6.1&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;commons-logging&lt;/groupId&gt;
			&lt;artifactId&gt;commons-logging&lt;/artifactId&gt;
			&lt;version&gt;1.1.1&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;commons-collections&lt;/groupId&gt;
			&lt;artifactId&gt;commons-collections&lt;/artifactId&gt;
			&lt;version&gt;3.2.1&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;cglib&lt;/groupId&gt;
			&lt;artifactId&gt;cglib&lt;/artifactId&gt;
			&lt;version&gt;2.2&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;!-- Hibernate library dependecy end --&gt;

		&lt;!-- HSQL database --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;hsqldb&lt;/groupId&gt;
			&lt;artifactId&gt;hsqldb&lt;/artifactId&gt;
			&lt;version&gt;1.8.0.10&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
&lt;/project&gt;
</code></pre>

 * Create other files as shown below
<img src="https://cloud.githubusercontent.com/assets/11231867/7809927/82b723fc-03bb-11e5-8038-1520b27e7126.png"/>

The purpose of each files are described in the below table

SL NO | Class Name | Description
:---: | --- | ---
1 | spring-config.xml | This file contains data source and session factory configuration. This is the replacement of hibernate.cfg.xml file in traditinal hibernate programming
2 | com.ashish.entity.EmployeeEntity and com.ashish.entity.EmployeeAllocationEntity | These two hibernate entity classes are having one to many relationsship. In EmployeeEntity class @OneToMany and in EmployeeAllocationEntity class @ManyToOne annotations are used to established the relationship in hibernate
3 | com.ashish.dao.EmployeeDAO and com.ashish.dao.EmployeeDAOImpl | EmployeeDAOImpl implements **insertRecords()** and **listRecords()** methods of EmployeeDAO interface.
4 | com.ashish.main.MainApp | This class contains the main method and calls DAO services

* **spring-config.xml**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;

&lt;beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
	xmlns:aop="http://www.springframework.org/schema/aop"
	xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
  http://www.springframework.org/schema/context
  http://www.springframework.org/schema/context/spring-context-3.0.xsd
  http://www.springframework.org/schema/aop
  http://www.springframework.org/schema/aop/spring-aop.xsd"&gt;

	
	&lt;bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource"&gt;
		&lt;property name="driverClassName" value="org.hsqldb.jdbcDriver" /&gt;
		&lt;property name="url" value="jdbc:hsqldb:mem:ashish" /&gt;
		&lt;property name="username" value="sa" /&gt;
		&lt;property name="password" value="" /&gt;
	&lt;/bean&gt;
	
	&lt;bean id="sessionFactory" class="org.springframework.orm.hibernate4.LocalSessionFactoryBean"&gt;
    	&lt;property name="dataSource"&gt;
    		&lt;ref bean="dataSource"/&gt;
    	&lt;/property&gt;
    	&lt;property name="hibernateProperties"&gt;
    		&lt;props&gt;
				&lt;prop key="hibernate.dialect"&gt;org.hibernate.dialect.HSQLDialect&lt;/prop&gt;
				&lt;prop key="hibernate.show_sql"&gt;true&lt;/prop&gt;
				&lt;prop key="hibernate.archive.autodetection"&gt;class&lt;/prop&gt;
				&lt;prop key="hibernate.hbm2ddl.auto"&gt;create&lt;/prop&gt;
    		&lt;/props&gt;
    	&lt;/property&gt;
    	
		&lt;property name="annotatedClasses"&gt;
			&lt;list&gt;
				&lt;value&gt;com.ashish.entity.EmployeeEntity&lt;/value&gt;
				&lt;value&gt;com.ashish.entity.EmployeeAllocationEntity&lt;/value&gt;
			&lt;/list&gt;
		&lt;/property&gt;
		
    &lt;/bean&gt;

	&lt;bean id="employeeDao" class="com.ashish.dao.EmployeeDAOImpl"&gt;
		&lt;property name="sessionFactory" ref="sessionFactory"&gt;&lt;/property&gt;
	&lt;/bean&gt;
&lt;/beans&gt;
</code></pre>

* **EmployeeEntity.java:** This class has a set to hold the one to many relationship.
 
``` java
@Entity
@org.hibernate.annotations.Entity(dynamicUpdate = true)
@Table(name = "EMPLOYEE", uniqueConstraints = {
		@UniqueConstraint(columnNames = "ID"),
		@UniqueConstraint(columnNames = "EMAIL") })

public class EmployeeEntity implements Serializable {
	private static final long serialVersionUID = -1798070786993154676L;
	@Id
	@Column(name = "ID", unique = true, nullable = false)
	private Integer employeeId;
	@Column(name = "EMAIL", unique = true, nullable = false, length = 100)
	private String email;
	@Column(name = "FIRST_NAME", unique = false, nullable = false, length = 100)
	private String firstName;
	@Column(name = "LAST_NAME", unique = false, nullable = false, length = 100)
	private String lastName;
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "allocationId")
	private Set<EmployeeAllocationEntity> empAllocations = new HashSet<EmployeeAllocationEntity>();

	public EmployeeEntity(int empId, String firstName, String lastName, String emailId) {
		this.employeeId = empId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = emailId;
	}
	
	// All getter and setter methods
}
```

 * **EmployeeAllocationEntity.java:** @ManyToOne annotation is used to to establish the relationship.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
@Entity
@org.hibernate.annotations.Entity(dynamicUpdate = true)
@Table(name = "EMPLOYEE_ALLOCATION", uniqueConstraints = {
		@UniqueConstraint(columnNames = "ID") })
		
public class EmployeeAllocationEntity implements Serializable {
	private static final long serialVersionUID = -1798070786993154676L;
	@Id
	@Column(name = "ID", unique = true, nullable = false)
	private Integer allocationId;
	@Column(name = "ALLOCATION_NAME", unique = true, nullable = false, length = 100)
	private String allocationName;
	@ManyToOne
	@JoinColumn(name="employeeId")
	private EmployeeEntity empEntity;
	
	public EmployeeAllocationEntity(int allocationId, String allocationName, EmployeeEntity emp) {
		this.allocationId = allocationId;
		this.allocationName = allocationName;
		this.empEntity = emp;
	}
	
	// All getter and setter methods
}
</code></pre>


* **EmployeeDAOImpl.java:** EmployeeDAOImpl implements **insertRecords()** and **listRecords()** methods of EmployeeDAO interface
 
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.dao;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.sql.DataSource;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.ashish.entity.EmployeeAllocationEntity;
import com.ashish.entity.EmployeeEntity;

public class EmployeeDAOImpl implements EmployeeDAO {
	
	private SessionFactory sessionFactory = null;

	@Override
	public void insertEmpRecords() {
		Session session = sessionFactory.openSession();
		session.beginTransaction();
			
		// Add new Employee object
	      EmployeeEntity emp = new EmployeeEntity(1, "Ashish", "Mondal", "ashismo@gmail.com");
	      
	      // Ashish Mondal has two allocations called Project1 and Project2
	      EmployeeAllocationEntity empAllocation = new EmployeeAllocationEntity(1, "Project1", emp);
	      emp.setEmpAllocations(empAllocation);
	      empAllocation = new EmployeeAllocationEntity(2, "Project2", emp);
	      emp.setEmpAllocations(empAllocation);
	      
	      session.save(emp);
	      
	   // Add another Employee object
	      emp = new EmployeeEntity(2, "Ujan", "Mondal", "ujanmo@gmail.com");
	      
	      // Ujan Mondal has two allocations called Project2 and Project3. 
	      // Also note that: In project 2, Ashish and Ujan both are allocated
	      emp.setEmpAllocations(empAllocation);
	      
	      empAllocation = new EmployeeAllocationEntity(3, "Project3", emp);
	      emp.setEmpAllocations(empAllocation);
	      
	      session.save(emp);
	      
	      // After saving all employees, commit the transaction
	      session.getTransaction().commit();
	      session.close();
	}

	@Override
	public void listEmployees() {
		// Select Employee
			Session session = sessionFactory.openSession();
	     List<EmployeeEntity> empList = session.createQuery("from EmployeeEntity").list();
	     for(EmployeeEntity emp : empList) {
	    	 System.out.println("==================Employee Details======================");
	    	 System.out.println("Employee Name: " + emp.getFirstName() + " " + emp.getLastName());
	    	 System.out.println("Email : " + emp.getEmail());
	    	 
	    	 System.out.println("+++++++++++++Employee Allocation Details+++++++++++++");
	    	 Set<EmployeeAllocationEntity> empAllocationSet = emp.getEmpAllocations();
	    	 Iterator<EmployeeAllocationEntity> it = empAllocationSet.iterator();
	    	 while(it.hasNext()) {
	    		 System.out.println("Allocation: " + it.next().getAllocationName());
	    	 }
	     }
	     session.close();
	}

	@Override
	public void releaseResources() {
		sessionFactory.close();
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
}
</code></pre>


## Output

<img src="https://cloud.githubusercontent.com/assets/11231867/7800594/6852e16c-0335-11e5-9594-a74ac711e715.PNG"/>
