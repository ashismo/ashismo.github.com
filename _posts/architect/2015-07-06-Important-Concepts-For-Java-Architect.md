---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 120
---

{% include JB/setup %}

## Introduction

Web application scalability is very common problem that most of the java architect faces. In this blog, some of the important concepts will be discussed that an architect should know.

## Some of the important concepts

#### High Availibity

Availibility of an application means the application to be available without interruption to the user. High availibility is the need for any businees. Clustering of an application is the common and popular way of making an application highly available.

#### Scalability

When load of an application grows then current infrastructure may not be able to handle the load. So the infrastructure (e.g. system/network/processes etc) should be able to handle a growing amount of load if the infrastructure is scalable.   

Adding resource is the most common way of enhancing scalability of an application. It can be achieved in the following ways


* **Scaling Up:** Add more resources (e.g. RAM, storage, processing power etc) to the existing node
* **Scaling Out:** Adding more nodes to support more users

An architect should take a call considering the cost of scaling up/out a system. Poorly designed application is always expensive to scaling up/out an application because the required resource/user is very high

### RPC vs RMI vs CORBA

RPC - Remote Procedure Call
RMI - Remote Method Invocation
CORBA - Common Object Request Broket Architecture

All of these work for distributed system (application requires communication with multiple systems). **RPC** is used for Java and C based system. **RMI** is for Java based system. **CORBA** supports communication with multiple systems having many different languages.

JAX-RPC was the standard for SOAP web services. However JAX-RPC is obsole now once JAX-WS standard has been evolved.

**CORBA** is much faster and much secure than RMI


## JAX-RPC, JAX-WS vs JAX-RS
