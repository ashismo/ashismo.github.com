---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 80
---

## What is Hibernate?

Hibernate is the implementation of JPA (Java Persistence API). Hibernate is also called **Hibernate ORM**. Hibernate is an object-relational mapping framework for the Java language. Hibernate's primary feature is mapping from Java classes to database tables and vice versa. Hibernate supported query is known as Hibernate Query Language (HQL).

## Core components of Hibernate

Below are the important elements of Hibernate


 * **hibernate.cfg.xml:** This file has database connection details
 * **hbm.xml or Annotation:** Defines the database table mapping with POJO. Also defines the relation between tables in java way.
 * **SessionFactory:** 
   * There will be a session factory per database. 
   * The SessionFacory is built once at startup
   * It is a **thread safe** class
   * SessionFactory will create a new Session object when requested
 * **Session:**
   * The Session object will get physical connection to the database.
   * Session is the java object used for any DB operations.
   * Session is not **thread safe**. Hence do not share hibernate session between threads
   * Session represents unit of work with database
   * Sessino should be closed once the task is completed
