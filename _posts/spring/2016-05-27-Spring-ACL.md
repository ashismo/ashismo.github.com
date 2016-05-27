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
  * At domain object instance level (record level permission check)
 First two are the simplest form of authorization whereas the last one is quite complex to implement.
* **Example:** Suppose there are two managers and 5 + 5 = 10 employees are there under them. So Manager 1 should be able to view/approve employees under him and Manager 2 would be also able to view/approve employees under him. No manager should be able to view/update employess under his peer manager.
