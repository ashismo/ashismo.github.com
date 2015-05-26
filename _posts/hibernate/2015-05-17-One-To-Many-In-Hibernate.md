---
layout: post
category : java-Hibernate
tags : [Hibernate Tutorial]
weight: 40
---

{% include JB/setup %}

## One to Many Relationship in Hibernate

One to many relationship in very common in relational database. In this relationship, parent will be in one table and it will have one or more child in another table. In this example, the consideration is an Employee may be allocated in one or many projects so employee records will be in EMPLOYEE table and the project allocation details will be in another table called EMPLOYEE_ALLOCATION.

<img src="https://cloud.githubusercontent.com/assets/11231867/7801287/f41de304-033f-11e5-9e3f-c678fa23812e.png"/>

In my next blog the same example will be extended to implement many-to-many relationship where one more table will be introduced

## Required Software


 * JDK 1.7
 * Maven 2.2.x
 * Eclipse for J2EE
 * Hibernate

## Steps to write code

 In this example HSQLDB jar has been used. So no real database is required to run the stand alone application
 
<div class="download-view"> 
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/hibernate/HibernateOneToManyExample.zip" target="_blank">HibernateOneToManyExample zip(24kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/hibernate/HibernateOneToManyExample" target="_blank">OneToManyExample</a>
	</span>
</div>


 * Create a simple java project with src/main/java, src/main/resources as the source directory. Once project is created, you can add source directory from the below screen (Right click on project -> properties)
<img src="https://cloud.githubusercontent.com/assets/11231867/7805744/7349b0b8-0395-11e5-9f41-b6dda9b1123f.png"/>
 * Convert the project into maven project (Right click on the project -> Configure -> Convert to Maven project)
 * Add the following dependancies in your pom.xml for Hibernate One to Many example

<pre class="prettyprint highlight prettyprinted"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;HibernateOneToManyExample&lt;/groupId&gt;
	&lt;artifactId&gt;HibernateOneToManyExample&lt;/artifactId&gt;
	&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;

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
		&lt;!-- Hibernate Dependencies --&gt;
		&lt;!-- Hibernate core --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.hibernate&lt;/groupId&gt;
			&lt;artifactId&gt;hibernate-core&lt;/artifactId&gt;
			&lt;version&gt;4.3.6.Final&lt;/version&gt;
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

<img src="https://cloud.githubusercontent.com/assets/11231867/7806088/15b8fbc0-039a-11e5-93e0-905f1304a5a3.png"/>
The purpose of each files are described in the below table

SL NO | Class Name | Description
:---: | --- | ---
1 | com.ashish.util.HibernateUtil | This class will read configuration from hibernate.cfg.xml file and returns SessionFactory
2 | com.ashish.entity.EmployeeEntity and com.ashish.entity.EmployeeAllocationEntity | These two entity classes are having one to many relationsship. In EmployeeEntity class @OneToMany and in EmployeeAllocationEntity class @ManyToOne annotations are used to established the relationship in hibernate
3 | com.ashish.main.MainApp | This class contains the main method and creates two employees called Ashish, Ujan and three allocations called Project1, Project2, Project3. Attach Project1 and Project2 with Ashish and Project2 and Project3 with Ujan

 * **hibernate.cfg.xml**

 <pre class="prettyprint highlight prettyprinted"><code class="language-xml" data-lang="xml">
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;!DOCTYPE hibernate-configuration PUBLIC
"-//Hibernate/Hibernate Configuration DTD 3.0//EN"
"http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd"&gt;
&lt;hibernate-configuration&gt;
    &lt;session-factory&gt;
        &lt;property name="hibernate.archive.autodetection"&gt;class,hbm&lt;/property&gt; 
        &lt;property name="hibernate.dialect"&gt;org.hibernate.dialect.HSQLDialect&lt;/property&gt; 
        &lt;property name="hibernate.show_sql"&gt;true&lt;/property&gt;   
        &lt;property name="hibernate.connection.driver_class"&gt;org.hsqldb.jdbcDriver&lt;/property&gt;   
        &lt;property name="hibernate.connection.username"&gt;sa&lt;/property&gt;   
        &lt;property name="hibernate.connection.password"&gt;&lt;/property&gt;   
        &lt;property name="hibernate.connection.url"&gt;jdbc:hsqldb:mem:ashish&lt;/property&gt;   
        &lt;property name="hibernate.hbm2ddl.auto"&gt;create&lt;/property&gt;   
        &lt;mapping class="com.ashish.entity.EmployeeEntity"&gt;&lt;/mapping&gt;
        &lt;mapping class="com.ashish.entity.EmployeeAllocationEntity"&gt;&lt;/mapping&gt;
    &lt;/session-factory&gt;
&lt;/hibernate-configuration&gt;
</code></pre>


 * **HibernateUtil.java:** This class will read configuration from hibernate.cfg.xml file and returns SessionFactory
 
<pre class="prettyprint highlight prettyprinted"><code class="language-java" data-lang="java">
package com.ashish.util;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
 
public class HibernateUtil
{
   private static SessionFactory sessionFactory = buildSessionFactory();
 
   private static SessionFactory buildSessionFactory()
   {
      try
      {
         if (sessionFactory == null)
         {
            Configuration configuration = new Configuration().configure(HibernateUtil.class.getResource("/hibernate.cfg.xml"));
            StandardServiceRegistryBuilder serviceRegistryBuilder = new StandardServiceRegistryBuilder();
            serviceRegistryBuilder.applySettings(configuration.getProperties());
            ServiceRegistry serviceRegistry = serviceRegistryBuilder.build();
            sessionFactory = configuration.buildSessionFactory(serviceRegistry);
         }
         return sessionFactory;
      } catch (Throwable ex)
      {
         System.err.println("Initial SessionFactory creation failed." + ex);
         throw new ExceptionInInitializerError(ex);
      }
   }
 
   public static SessionFactory getSessionFactory()
   {
      return sessionFactory;
   }
 
   public static void shutdown()
   {
      getSessionFactory().close();
   }
}
</code></pre>


 * **EmployeeEntity.java**: This class has a set to hold the one to many relationship
 
<pre class="prettyprint highlight prettyprinted"><code class="language-java" data-lang="java">
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
</code></pre>


 * **EmployeeAllocationEntity.java**: @ManyToOne annotation is used to to establish the relationship.
 
<pre class="prettyprint highlight prettyprinted"><code class="language-java" data-lang="java">
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


 * **MainApp.java**: This class contains the main method and creates two employees called Ashish, Ujan and three allocations called Project1, Project2, Project3. Attach Project1 and Project2 with Ashish and Project2 and Project3 with Ujan.
 
<pre class="prettyprint highlight prettyprinted"><code class="language-java" data-lang="java">
package com.ashish.main;


import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;

import com.ashish.entity.EmployeeAllocationEntity;
import com.ashish.entity.EmployeeEntity;
import com.ashish.util.HibernateUtil;
 
 
public class MainApp
{
   public static void main(String[] args)
   {
      Session session = HibernateUtil.getSessionFactory().openSession();
      session.beginTransaction();
      insertRecord(session);
      selectRecord(session);
      HibernateUtil.shutdown();
   }

	private static void insertRecord(Session session) {
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
	}
	
	private static void selectRecord(Session session) {
		// Select Employee
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
	     
	}
}
</code></pre>

## Output

<img src="https://cloud.githubusercontent.com/assets/11231867/7800594/6852e16c-0335-11e5-9594-a74ac711e715.PNG"/>
