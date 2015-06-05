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

## Output

Below is the output of the above program. Go through the output and match with the MainApp.loadRecords() method to understand the concept.

<img src="https://cloud.githubusercontent.com/assets/11231867/8006249/adb3de32-0baf-11e5-99b2-bf8bef6560e4.png"/>
