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

The description of the files given below

SL NO | File Name | Description
:---: | --- | ---
1 | **pom.xml** | Hibernate and EHCache dependency added in this file
2 | **hibernate.cfg.xml** | EHCache second level caching is plugged into this file
3 | **ehCache.xml** | EHCache secong level configuration is done in this file
4 | **com.ashish.entity.EmployeeEntity** | This is the entity class where the concurrency strategy (**Read only, read write, Nonrestricted Read Write, Transactional**) is defined.
5 | **com.ashish.util.HibernateUtil** | This class will read configuration from hibernate.cfg.xml file and returns SessionFactory
6 | **com.ashish.main.MainApp** | This class contains the main method and inserts the record of two employees called Ashish, Ujan. Data is retrieved from the database using secong level caching strategy

**pom.xml**

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

**hibernate.cfg.xml**

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

**ehCache.xml**

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



## Output

Below is the output of the above program. Go through the output and match with the MainApp.loadRecords() method to understand the concept.

<img src="https://cloud.githubusercontent.com/assets/11231867/8006249/adb3de32-0baf-11e5-99b2-bf8bef6560e4.png"/>
