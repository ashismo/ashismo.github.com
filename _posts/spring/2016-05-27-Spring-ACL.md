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
<img src="https://cloud.githubusercontent.com/assets/11231867/15608796/d05f2614-2439-11e6-9637-d6d0b1667349.png"/>

* **ACL_CLASS** : This table allow us to uniquely identify any domain object class in the system. This table has two columns
  * **ID** : Primary key
  * **CLASS** : Fully qualified class name for domain objects
<img src="https://cloud.githubusercontent.com/assets/11231867/15608799/d4da94ee-2439-11e6-93c5-d8a3414dbfcb.png"/>

* **ACL_OBJECT_IDENTITY** : This table stores each and every domain object instance in the system. So there is a one-to-many relation between ACL_CLASS and ACL_OBJECT_IDENTITY. Each object must have an owner and the owner's SID (user or role)
<img src="https://cloud.githubusercontent.com/assets/11231867/15608800/d8497636-2439-11e6-8a22-cfbdba857f53.png"/>

* **ACL_ENTRY** : This table stores individual permission to each recipient. In this table we specify what action can be performed on each domain object instance by the desired user/role.
  * One of the most important field in this table is **MASK** this represents the permissions like CREATE, READ, UPDATE, DELETE, ADMINISTER. This is represnted by 32 bits. Each of these bits represents a permission, and by default the permissions are READ (bit 0), WRITE(bit 1), CREATE(bit 2), DELETE(bit 3) and ADMINISTER (bit 4). It is easy to implement your own permission also.
<img src="https://cloud.githubusercontent.com/assets/11231867/15608801/daf6e850-2439-11e6-9bb2-4ccbbb78fb32.png"/>
