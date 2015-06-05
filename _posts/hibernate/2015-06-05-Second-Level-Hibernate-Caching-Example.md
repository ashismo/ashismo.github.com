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
 
## Output

Below is the output of the above program. Go through the output and match with the MainApp.loadRecords() method to understand the concept.

<img src="https://cloud.githubusercontent.com/assets/11231867/8006249/adb3de32-0baf-11e5-99b2-bf8bef6560e4.png"/>
