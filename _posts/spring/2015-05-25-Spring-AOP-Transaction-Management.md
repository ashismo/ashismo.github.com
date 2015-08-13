---
layout: post
category : java-Spring
tags : [Spring Tutorial]
weight: 92
---

{% include JB/setup %}

## Introduction


## Required Software


 * JDK 1.7
 * Maven 2.2.x
 * Eclipse for J2EE 

## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/SpringAOP-TransactionManagement.zip" target="_blank">SpringAOP-TransactionManagement zip(33kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/SpringAOP-TransactionManagement" target="_blank">SpringAOP-TransactionManagement</a>
	</span>
</div>


 * Create a simple java project with src/main/java, src/main/resources as the source directory. Once project is created, you can add source directory from the below screen (Right click on project -> properties)
<img src="https://cloud.githubusercontent.com/assets/11231867/7817897/c5fe3918-03f5-11e5-83db-75b695b1ffc0.PNG"/>
 * Convert the project into maven project (Right click on the project -> Configure -> Convert to Maven project)
 * Add the following dependancies in your pom.xml for Hibernate One to Many example

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;SpringAOP-TransactionManagement&lt;/groupId&gt;
	&lt;artifactId&gt;SpringAOP-TransactionManagement&lt;/artifactId&gt;
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

		&lt;!-- Spring AOP dependency --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-aop&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;!-- AspectJ dependencies --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.aspectj&lt;/groupId&gt;
			&lt;artifactId&gt;aspectjrt&lt;/artifactId&gt;
			&lt;version&gt;${aspectj.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.aspectj&lt;/groupId&gt;
			&lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;
			&lt;version&gt;${aspectj.version}&lt;/version&gt;
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
<img src="https://cloud.githubusercontent.com/assets/11231867/7817858/8008510a-03f5-11e5-8dc2-c2f2cf6744e3.PNG"/>

The purpose of each files are described in the below table

SL NO | Class Name | Description
:---: | --- | ---
1 | spring-config.xml | Data source, session factory and transaction management is configured in this file. In this file we can configure the methods for which the transaction management will be applied. Spring AOP and Dependency Injection configuration is done in this file
2 | com.ashish.entity.EmployeeEntity and com.ashish.entity.EmployeeAllocationEntity | These two hibernate entity classes are having one to many relationsship. In EmployeeEntity class @OneToMany and in EmployeeAllocationEntity class @ManyToOne annotations are used to established the relationship in hibernate
3 | com.ashish.dao.EmployeeDAO and com.ashish.dao.EmployeeDAOImpl | EmployeeDAOImpl implements **insertRecords()** and **listRecords()** methods of EmployeeDAO interface.
4 | com.ashish.service.EmployeeService and com.ashish.service.EmployeeServiceImpl | EmployeeServiceImpl implements **insertRecords()** and **listRecords()** methods of EmployeeService interface. The Spring framework controlled transaction management is configured for **insertRecords()** method. If database the transaction fails it will get rolled back automatically.
5 | com.ashish.aop.LoggingAspect | Audit Logging is done in this file. @Before and @AfterThrowing advises are implemented in this file.
6 | com.ashish.main.MainApp | This class contains the main method and calls Employee services to insert records.

* **spring-config.xml**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;

&lt;beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
	xmlns:p="http://www.springframework.org/schema/p" xmlns:tx="http://www.springframework.org/schema/tx"
	xmlns:aop="http://www.springframework.org/schema/aop"
	xsi:schemaLocation="http://www.springframework.org/schema/beans 
	http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
	http://www.springframework.org/schema/context 
	http://www.springframework.org/schema/context/spring-context-3.0.xsd
	http://www.springframework.org/schema/tx
	http://www.springframework.org/schema/tx/spring-tx-3.0.xsd
	http://www.springframework.org/schema/aop
	http://www.springframework.org/schema/aop/spring-aop-3.0.xsd"&gt;

	&lt;context:component-scan base-package="com.ashish" /&gt;
	
	&lt;!-- AspectJ: Audit Logging Aspect --&gt;
	&lt;aop:aspectj-autoproxy /&gt;
    &lt;bean id="loggingAspect" class="com.ashish.aop.LoggingAspect"&gt;&lt;/bean&gt;
  	
	&lt;!-- Data source: DB connection properties --&gt;
	&lt;bean id="dataSource"
		class="org.springframework.jdbc.datasource.DriverManagerDataSource"&gt;
		&lt;property name="driverClassName" value="org.hsqldb.jdbcDriver" /&gt;
		&lt;property name="url" value="jdbc:hsqldb:mem:ashish" /&gt;
		&lt;property name="username" value="sa" /&gt;
		&lt;property name="password" value="" /&gt;
	&lt;/bean&gt;

	&lt;!-- Session Factory for the integration with Hibernate ORM --&gt;
	&lt;bean id="sessionFactory"
		class="org.springframework.orm.hibernate4.LocalSessionFactoryBean"&gt;
		&lt;property name="dataSource"&gt;
			&lt;ref bean="dataSource" /&gt;
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

	&lt;!-- TransactionManager and TransactionInterceptor is used for the Spring 
		AOP Transaction Management --&gt;
	&lt;tx:annotation-driven transaction-manager="transactionManager"/&gt;
	&lt;bean id="transactionManager"
		class="org.springframework.orm.hibernate4.HibernateTransactionManager"&gt;
		&lt;property name="dataSource" ref="dataSource" /&gt;
		&lt;property name="sessionFactory" ref="sessionFactory" /&gt;
	&lt;/bean&gt;


	&lt;!-- We can manage transaction in two ways
		1. By adding @Transactional(readOnly = false) on top of a method OR
		2. By regex matching method name in the tx:advice as shown below
	 --&gt;
	&lt;tx:advice id="txAdvice" transaction-manager="transactionManager"&gt;
		&lt;tx:attributes&gt;
			&lt;tx:method name="*" propagation="REQUIRED" read-only="true" /&gt;
			&lt;tx:method name="insert*" propagation="REQUIRED" read-only="false" /&gt;
		&lt;/tx:attributes&gt;
	&lt;/tx:advice&gt;

	&lt;!-- Below configuration says where we want to apply apply the transaction. In the below example we want to apply the transaction in 
		&lt;aop:advisor advice-ref="txAdvice" pointcut-ref="createOperation" /&gt;
	 --&gt;
	&lt;aop:config&gt;
		&lt;aop:pointcut id="createOperation" expression="execution(* com.ashish.service.EmployeeService.insert*(..))" /&gt;
		&lt;aop:advisor advice-ref="txAdvice" pointcut-ref="createOperation" /&gt;
	&lt;/aop:config&gt;

	&lt;bean id="employeeDao" class="com.ashish.dao.EmployeeDAOImpl"&gt;
		&lt;property name="sessionFactory" ref="sessionFactory"&gt;&lt;/property&gt;
	&lt;/bean&gt;

	&lt;bean id="employeeService" class="com.ashish.service.EmployeeServiceImpl"&gt;
		&lt;property name="employeeDao" ref="employeeDao"&gt;&lt;/property&gt;
	&lt;/bean&gt;
&lt;/beans&gt;
</code></pre>

* **EmployeeEntity.java:** This class has a set to hold the one to many relationship.
 
{% highlight java %}

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
{% endhighlight %}

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
 
{% highlight java %}

package com.ashish.dao;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.sql.DataSource;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;

import com.ashish.entity.EmployeeAllocationEntity;
import com.ashish.entity.EmployeeEntity;

public class EmployeeDAOImpl extends HibernateDaoSupport implements EmployeeDAO {
	
	@Override
	public void insertEmpRecords() {
			
		// Add new Employee object
	      EmployeeEntity emp = new EmployeeEntity(1, "Ashish", "Mondal", "ashismo@gmail.com");
	      
	      // Ashish Mondal has two allocations called Project1 and Project2
	      EmployeeAllocationEntity empAllocation = new EmployeeAllocationEntity(1, "Project1", emp);
	      emp.setEmpAllocations(empAllocation);
	      empAllocation = new EmployeeAllocationEntity(2, "Project2", emp);
	      emp.setEmpAllocations(empAllocation);
	      
	      getHibernateTemplate().save(emp);
	      
	   // Add another Employee object
	      emp = new EmployeeEntity(2, "Ujan", "Mondal", "ujanmo@gmail.com");
	      
	      // Ujan Mondal has two allocations called Project2 and Project3. 
	      // Also note that: In project 2, Ashish and Ujan both are allocated
	      emp.setEmpAllocations(empAllocation);
	      
	      empAllocation = new EmployeeAllocationEntity(3, "Project3", emp);
	      emp.setEmpAllocations(empAllocation);
	      
	      getHibernateTemplate().save(emp);
	      
	      // If we uncomment the below line then the transaction will get automatically rolled back
//	      throw new RuntimeException();
	}

	@Override
	public void listEmployees() {
		// Select Employee
			Session session = getSessionFactory().openSession();
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
		getSessionFactory().close();
	}
	
}
{% endhighlight %}

* **EmployeeServiceImpl.java:** Transaction management is done in the **insertRecords()** method. Transaction management can be done by @Transactional(readOnly = false) annotation or can be configured in the spring-config.xml file. In our example, we have done the configuration in the spring-config.xml file.
 
{% highlight java %}

package com.ashish.service;

import org.springframework.transaction.annotation.Transactional;

import com.ashish.dao.EmployeeDAO;

public class EmployeeServiceImpl implements EmployeeService {
	
	private EmployeeDAO employeeDao = null;
	/**
	 * Declarative Transaction Management using Spring AOP is applied 
	 * on this method by marking the method with @Transactional 
	 */
//	@Transactional(readOnly = false)
	@Override
	public void insertEmpRecords() {
		employeeDao.insertEmpRecords();
		
	}

	@Override
	public void listEmployees() {
		employeeDao.listEmployees();
	}

	@Override
	public void releaseResources() {
		employeeDao.releaseResources();
		
	}
	
	/**
	 * @return the employeeDao
	 */
	public EmployeeDAO getEmployeeDao() {
		return employeeDao;
	}

	/**
	 * @param employeeDao the employeeDao to set
	 */
	public void setEmployeeDao(EmployeeDAO employeeDao) {
		this.employeeDao = employeeDao;
	}

}
{% endhighlight %}

* **LoggingAspect.java:** Audit Logging is done in this file. @Before and @AfterThrowing advises are implemented in this file

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

	@Before("execution(* com.ashish.service.EmployeeService.insert*(..))")
	public void beforeExecution(JoinPoint jp) {
		System.out.println("Before method: " + jp.getSignature().getName()
				+ ". Class: " + jp.getTarget().getClass().getSimpleName());
	}

	@AfterThrowing(pointcut = "execution(* com.ashish.service.EmployeeService.insert*(..))", throwing = "ex")
	public void afterThrowingExecution(JoinPoint jp, Exception ex) {
		System.out.println("After throwing advice: "
				+ jp.getSignature().getName() + ". Class: "
				+ jp.getTarget().getClass().getSimpleName());
		System.out.println("Exception: " + ex.getMessage());
	}
}

</code></pre>

* **MainApp.java:** This class contains the main method and calls DAO services.

{% highlight java %}

package com.ashish.main;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ashish.service.EmployeeService;
import com.ashish.service.EmployeeServiceImpl;
 
 
public class MainApp
{
   public static void main(String[] args)
   {
	   ApplicationContext appContext = new ClassPathXmlApplicationContext("spring-config.xml");
		
	   EmployeeService employeeService = (EmployeeService) appContext.getBean("employeeService");
	   try {
		   employeeService.insertEmpRecords();
	   } catch (Exception e) {
		   e.printStackTrace();
	   }
	   employeeService.listEmployees();
	   employeeService.releaseResources();
   }

	
}
{% endhighlight %}



## Output

<img src="https://cloud.githubusercontent.com/assets/11231867/7800594/6852e16c-0335-11e5-9594-a74ac711e715.PNG"/>
