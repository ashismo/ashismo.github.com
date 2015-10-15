---
layout: post
category : java-Misc
tags : [dozer]
weight: 120
---

{% include JB/setup %}

## Introduction

Dozer is a Java Bean to Java Bean mapper that recursively copies data from one object to another. Typically, these Java Beans will be of different complex types.
Dozer supports 


* simple property mapping, 
* complex type mapping, 
* bi-directional mapping, 
* implicit-explicit mapping, as well as 
* recursive mapping. 
This includes mapping collection attributes that also need mapping at the element level.  

Dozer is mainly used when your model in UI is different from the JPA Entities. Dozer sits between UI model and JPA Entities and maps UI data into entities or vice versa.

In this example, I am going to cover the basics of dozer configuration and custom dozer converter which helps to map data for exceptional scenarios when a simple way can not be used.

## Required Software


* Eclipse
* JDK 1.7 or above
* Maven 2.2.x or above
 
## Steps to write code
