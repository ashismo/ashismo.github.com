---
layout: post
category : java-Hibernate
tags : [Hibernate Tutorial]
weight: 60
---

{% include JB/setup %}

## Introduction

In case of second level caching, object persists at the Session Factory Level. Hence, the persistance object will be accessible across all sessions once the data is cached. In this example, second level caching is implememted using **EHCache**. Once the application is looking for any persistance object, first it checks in the first level cache. If the data is not found then it goes to the second level cache. If not found in the second level cache also then it hits the database. This example shows the statistics of second level cache hit and miss.  
Also note that in this example in memory database (HSQLDB) is used.

## Required Software

 * JDK 1.7
 * Maven 2.2.x
 * Eclipse
 * Hibernate
 * EH Cache for second level caching

## Step to write Code

In this example HSQLDB jar has been used. So no real database is required to run the stand alone application. Two employee records have been inserted into the in memory database using one session and retrieved the same data from the different session.
 
<div class="download-view"> 
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/hibernate/Hibernate2ndLevelCaching.zip" target="_blank">Hibernate2ndLevelCaching zip(24kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/hibernate/Hibernate2ndLevelCaching" target="_blank">Hibernate2ndLevelCaching</a>
	</span>
</div>

Create a maven project as shown below. If you are new to create maven project then [follow this blog](http://ashismo.github.io/java-build/2015/05/09/Setting%20up%20a%20Maven%20Build/){:target="_blank"}

<img src="https://cloud.githubusercontent.com/assets/11231867/8007241/22d2407a-0bb8-11e5-8528-da40eeb2654d.png"/>

The description of the files given below

SL NO | File Name | Description
:---: | --- | ---
1 | **pom.xml** | Hibernate and EHCache dependency added in this file
2 | **hibernate.cfg.xml** | EHCache second level caching is plugged into this file
3 | **ehCache.xml** | EHCache second level configuration is done in this file
4 | **com.ashish.entity.EmployeeEntity** | This is the entity class where the concurrency strategy (**Read only, read write, Nonrestricted Read Write, Transactional**) is defined.
5 | **com.ashish.util.HibernateUtil** | This class will read configuration from hibernate.cfg.xml file and returns SessionFactory
6 | **com.ashish.main.MainApp** | This class contains the main method and inserts the record of two employees called Ashish, Ujan. Data is retrieved from the database using secong level caching strategy

**pom.xml:** Hibernate and EHCache dependency added in this file

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;com.ashish.hibernate&lt;/groupId&gt;
	&lt;artifactId&gt;Hibernate2ndLevelCaching&lt;/artifactId&gt;
	&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;

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

		&lt;!-- EHCache Core APIs --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;net.sf.ehcache&lt;/groupId&gt;
			&lt;artifactId&gt;ehcache-core&lt;/artifactId&gt;
			&lt;version&gt;2.6.9&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;!-- Hibernate EHCache API --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.hibernate&lt;/groupId&gt;
			&lt;artifactId&gt;hibernate-ehcache&lt;/artifactId&gt;
			&lt;version&gt;4.3.5.Final&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;!-- EHCache uses slf4j for logging --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.slf4j&lt;/groupId&gt;
			&lt;artifactId&gt;slf4j-simple&lt;/artifactId&gt;
			&lt;version&gt;1.7.5&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
&lt;/project&gt;
</code></pre>

**hibernate.cfg.xml:** EHCache second level caching is plugged into this file

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;!DOCTYPE hibernate-configuration PUBLIC
"-//Hibernate/Hibernate Configuration DTD 3.0//EN"
"http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd"&gt;
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

		&lt;!-- EhCache is plugged in to the hibernate.cfg.xml --&gt;
		&lt;property name="hibernate.cache.region.factory_class"&gt;org.hibernate.cache.ehcache.EhCacheRegionFactory&lt;/property&gt;
		
		&lt;!-- enable second level cache and query cache --&gt;
		&lt;property name="hibernate.cache.use_second_level_cache"&gt;true&lt;/property&gt;
		&lt;property name="hibernate.cache.use_query_cache"&gt;true&lt;/property&gt;
		&lt;property name="net.sf.ehcache.configurationResourceName"&gt;ehCache.xml&lt;/property&gt;

		&lt;mapping class="com.ashish.entity.EmployeeEntity"&gt;&lt;/mapping&gt;
	&lt;/session-factory&gt;
&lt;/hibernate-configuration&gt;
</code></pre>

**ehCache.xml:** EHCache second level configuration is done in this file

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:noNamespaceSchemaLocation="ehcache.xsd" updateCheck="true"
	monitoring="autodetect" dynamicConfig="true"&gt;

	&lt;!-- EHCache stores data into memory. In case of over flow of data, it writes 
		into file system --&gt;
	&lt;diskStore path="D:\Ashish\ehcache" /&gt;

	&lt;!-- defaultCache is the mandatory configuration. --&gt;
	&lt;defaultCache maxEntriesLocalHeap="10000" eternal="false"
		timeToIdleSeconds="120" timeToLiveSeconds="120" diskSpoolBufferSizeMB="30"
		maxEntriesLocalDisk="10000000" diskExpiryThreadIntervalSeconds="120"
		memoryStoreEvictionPolicy="LRU" statistics="true"&gt;
		&lt;!--localTempSwap: Enables temporary local disk usage. This option provides 
			an extra tier for storage during cache operation, but this disk storage is 
			not persisted. After a restart, the disk tier is cleared of any cache data --&gt;
		&lt;persistence strategy="localTempSwap" /&gt;
	&lt;/defaultCache&gt;

	&lt;!-- cache: defines the region for the second level caching. In the entity class this needs to be annotated --&gt;
	&lt;!-- timeToIdleSeconds: Defines how many seconds the object can be idle 
		in the second level cache --&gt;
	&lt;!-- timeToLiveSeconds: It defines that how many seconds object can be stored 
		in the second level cache whether it is idle or not. --&gt;
	&lt;cache name="com.ashish.entity.EmployeeEntity"
		maxEntriesLocalHeap="100" eternal="false" timeToIdleSeconds="1"
		timeToLiveSeconds="1"&gt;
		&lt;persistence strategy="localTempSwap" /&gt;
	&lt;/cache&gt;

	&lt;cache name="org.hibernate.cache.internal.StandardQueryCache"
		maxEntriesLocalHeap="5" eternal="false" timeToLiveSeconds="120"&gt;
		&lt;persistence strategy="localTempSwap" /&gt;
	&lt;/cache&gt;

	&lt;cache name="org.hibernate.cache.spi.UpdateTimestampsCache"
		maxEntriesLocalHeap="5000" eternal="true"&gt;
		&lt;persistence strategy="localTempSwap" /&gt;
	&lt;/cache&gt;
&lt;/ehcache&gt;
</code></pre>

**com.ashish.entity.EmployeeEntity:** This is the entity class where the concurrency strategy (Read only, read write, Nonrestricted Read Write, Transactional) is defined.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
 
@Entity
@Table(name = "Employee", uniqueConstraints = {@UniqueConstraint(columnNames = "ID"), @UniqueConstraint(columnNames = "EMAIL")})
@Cache(usage=CacheConcurrencyStrategy.READ_ONLY, region="com.ashish.entity.EmployeeEntity")
public class EmployeeEntity implements Serializable
{
   private static final long serialVersionUID = -1798070786993154676L;
   @Id
   @Column(name = "ID", unique = true, nullable = false)
   private Integer           employeeId;
   @Column(name = "EMAIL", unique = true, nullable = false, length = 100)
   private String            email;
   @Column(name = "FIRST_NAME", unique = false, nullable = false, length = 100)
   private String            firstName;
   @Column(name = "LAST_NAME", unique = false, nullable = false, length = 100)
   private String            lastName;
 
   public EmployeeEntity() {}
   
   public EmployeeEntity(int employeeId, String firstName, String lastName, String email) {
	   this.employeeId = employeeId;
	   this.firstName = firstName;
	   this.lastName = lastName;
	   this.email = email;
   }
   public Integer getEmployeeId()
   {
      return employeeId;
   }
 
   public void setEmployeeId(Integer employeeId)
   {
      this.employeeId = employeeId;
   }
 
   public String getEmail()
   {
      return email;
   }
 
   public void setEmail(String email)
   {
      this.email = email;
   }
 
   public String getFirstName()
   {
      return firstName;
   }
 
   public void setFirstName(String firstName)
   {
      this.firstName = firstName;
   }
 
   public String getLastName()
   {
      return lastName;
   }
 
   public void setLastName(String lastName)
   {
      this.lastName = lastName;
   }
}
</code></pre>

**com.ashish.util.HibernateUtil:** This class will read configuration from hibernate.cfg.xml file and returns SessionFactory

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
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

**com.ashish.main.MainApp:** This class contains the main method and inserts the record of two employees called Ashish, Ujan. Data is retrieved from the database using secong level caching strategy

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.main;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.stat.Statistics;

import com.ashish.entity.EmployeeEntity;
import com.ashish.util.HibernateUtil;
 
 
public class MainApp
{
	private static SessionFactory sf = null;
	private static Statistics stats = null;
	private static Session session1 = null;
	private static Session session2 = null;
	
	private static Transaction tx1 = null;
	
   public static void main(String[] args)
   {
	  sf = HibernateUtil.getSessionFactory();
	  session1 = sf.openSession();
	  session2 = sf.openSession();;
	  
	  tx1 = session1.beginTransaction();
	  stats = sf.getStatistics();
	  stats.setStatisticsEnabled(true);
      insertRecord();
      tx1.commit();
      
      loadRecords();
      
      sf.close();
   }

	private static void insertRecord() {
		
		// Add new Employee object
	    EmployeeEntity emp = new EmployeeEntity(1, "Ashish", "Mondal", "ashismo@gmail.com");
	    session1.save(emp);
	    
	   // Add another Employee object
	    emp = new EmployeeEntity(2, "Ujan", "Mondal", "ujanmo@gmail.com");
	    session1.save(emp);
	}
	
	private static void loadRecords() {
		printStats("We haven't hit the database so hit=0, miss=0 \n"
				+ "and put=2 because 2 Employee data \n"
				+ "got saved via this session factory");
		
        EmployeeEntity emp = (EmployeeEntity) session1.load(EmployeeEntity.class, 1);
        printRecord(emp, "EmployeeId=1 data is available in session1 so \n"
        		+ "the hit, miss and put count remains same");
        
        emp = (EmployeeEntity) session2.load(EmployeeEntity.class, 1);
        printRecord(emp,  "EmployeeId=1 data is not available in level 1 cache for session2 so \n"
        		+ "the hit, miss and put count remains same");
         
        try {
        	System.out.println("**** Thread is going to sleep for 2 sec so Employee data will get removed from 2nd level cache. \n "
        			+ "Next time it is going to hit database****");
			Thread.sleep(2000);
		} catch (Exception e) {
			e.printStackTrace();
		}
        emp = (EmployeeEntity) session2.load(EmployeeEntity.class, 2);
        printRecord(emp, "EmployeeId=2 data is not available in level 1 and level 2 cache for session2 so \n"
        		+ "the fetch=1, hit=1, miss=1 and put=3");
        
        emp = (EmployeeEntity) session2.get(EmployeeEntity.class, 3); // This data is not available in database
        printRecord(emp, "EmployeeId=3 data is not available in DB so \n"
        		+ "the fetch=1, hit=1, miss=2 and put=3");
	}
	
	private static void printStats(String msg) {
		if(msg != null) {
			System.out.println("=========\n" + msg + "\n===========");
		}
		System.out.println("Fetch Count=" + stats.getEntityFetchCount());
		System.out.println("Second Level Hit Count= " + stats.getSecondLevelCacheHitCount());
		System.out.println("Second Level Miss Count=" + stats.getSecondLevelCacheMissCount());
		System.out.println("Second Level Put Count=" + stats.getSecondLevelCachePutCount());
		System.out.println("---------------------------\n\n");
	}
	private static void printRecord(EmployeeEntity emp, String msg) {
		System.out.println("=========\n" + msg);
		if(emp != null) {
			System.out.println("Data from database - EmpId: " + emp.getEmployeeId() + " Name: " + emp.getFirstName() + " " + emp.getLastName() + " Email: " + emp.getEmail());
		}
		System.out.println("==========");
		printStats(null);
	}
}
</code></pre>

## Output

Below is the output of the above program. Go through the output and match with the MainApp.loadRecords() method to understand the concept.

<img src="https://cloud.githubusercontent.com/assets/11231867/8006249/adb3de32-0baf-11e5-99b2-bf8bef6560e4.png"/>
