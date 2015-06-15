---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE Popular Topics]
weight: 120
---

{% include JB/setup %}

## Introduction


 * JMS stands for **Java Message Service**. JMS is an API that provides facility to read, create and send messages. JMS is **asynchronous** (To receive the message, client is not required to send request. Message will arrive automatically to the client) communication. 
 * JMS is mainly used to send and receive message from one application to another.
 * Following are the messaging domain in JMS
   * **Point-to-Point messaging domain:** In this model, one message is delivered to one receiver only. There will be a **QUEUE** to hold the message until the receiver is ready.
 <img src="https://cloud.githubusercontent.com/assets/11231867/8129517/97f8b2ca-1127-11e5-8cc8-490508a724d3.png"/>
   * **Publisher/Subscriber (Pub/Sub) Messaging domain:** In this model, one message is delivered to all the subscribers. There will be a **TOPIC** to hold and deliver messages.
 <img src="https://cloud.githubusercontent.com/assets/11231867/8129519/9a5422ac-1127-11e5-9ba7-c1106f4320e9.png"/>

## JMS Programming Model
<img src="https://cloud.githubusercontent.com/assets/11231867/8129596/6427c390-1128-11e5-9da5-f3f962f5f270.png"/>

## JMS Queue (Point-to-Point messaging domain) configuration

In Case of **Point-to-Point** messaging, **QUEUE** will hold the message until the receiver is ready to receive the message. Here, we shall be creating two JNDI in Weblogic 12c.


 * Create connection factory named **queuedConnFactory**
 * Create destination resource named, **myQueue**

Once JNDI is created, server and receiver application needs to be created. **Server** and **Receiver** needs to run in two different console.

Create the following in Weblogic server

SL NO | Type | Description | Object Name | JNDI Name
:---:|:---|:---|:---|:---
1 | **JMS Server** | JMS Server acts as a management container for resources **(Queue/Topic)** within JMS module. JMS module will be created inside **JMS Server** | **myJMSServer** | |
2 | **JMS Module** | JMS Module contains resources such as **Queues/Topics**. This module is required in order to create JMS Queue | **myJMSModule** | |
3 | **Subdeployment** | JMS modules are targeted to one or more WLS instances or a cluster. A subdeployment is a grouping of such targets. | **mySubdeployment** | |
4 | **Connection Factory** | A connection factory is a resource that enables JMS clients to create connections to JMS destinations. | **myConnectionFactory** | jms/myConnectionFactory |
5 | **JMS Queue** | JMS Queue is a point-to-point destination type | **myJMSQueue** | jms/myJMSQueue |
