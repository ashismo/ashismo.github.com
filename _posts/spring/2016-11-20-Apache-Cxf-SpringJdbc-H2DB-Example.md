---
layout: post
category : java-Spring
tags : [Apache-CXF Spring JDBC H2DB Tutorial]
weight: 94
---

{% include JB/setup %}

## Introduction

In this post, Spring JDBC is integrated with apache cxf RESTful webservice. H2DB has been used as in-memory/filebased databse. There are two sql scripts, one to create table structure required for this example and another sql script to populate tables during application startup. The data can be persisted in a filebased database supported by H2DB. Also the same data can be persisted in-memory i.e.the data will persist, as long as the application is running.


## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/cxf-restful-spring-jdbc-h2db" target="_blank">CXF-Restful-Spring-JDBC-H2DB Example Zip(--kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/cxf-restful-spring-jdbc-h2db" target="_blank">CXF-Restful-Spring-JDBC-H2DB Example</a>
	</span>
</div>


* In this example, followings have been implemented
  * Apache CXF based RESTful webservice
  * Log4j integration
  * Spring AOP integration
  * Spring JDBC integration
  * Database transaction control using Spring JDBC
  * H2DB integration as a backend file based database (Also have an option to use H2DB as in-memory database)
  