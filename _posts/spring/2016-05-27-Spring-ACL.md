---
layout: post
category : java-Spring
tags : [Spring ACL]
weight: 107
---

{% include JB/setup %}

## Introduction


* ACL stands for Access Control List
* In Spring, access control can be done at
  * Web request level (URL pattern authorization)
  * Method invocation level (Specific URL authorization)
  * At domain object instance level (record level permission check to secure domain objects)
 First two are the simplest form of authorization whereas the last one is quite complex to implement.
* **Example:** Suppose there are two managers and 5 + 5 = 10 employees are there under them. So Manager 1 should be able to view/approve employees under him and Manager 2 would be also able to view/approve employees under him. No manager should be able to view/update employess under his peer manager.
* Every domain instance in your application has its own ACL (Access Control List) 


#### ACL Implemention
By default there are four main tables required to implement ACL i.e.

* **ACL_SID**: This table lists all users in the system. In Spring security, a "Security Id" (SID) is assigned to each user role. So SID may correspond to a granted authority such as role. This table has following columns
 * **ID** : Primary key
 * **PRINCIPLE**: boolean field. True means the SID is a user and false means SID is a granted authority (typically a role)
 * **SID**: SID stands for Security ID. It is assigned to each user or role. SID is attached with ACL to specify which actions can the user with that SID perform on the desired objects
