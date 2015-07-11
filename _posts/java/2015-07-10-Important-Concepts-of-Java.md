---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 1
---

{% include JB/setup %}

## Class level lock vs Object level lock in multithreading

In java multithreading, there are two types of locks


* **object level lock** for non static methods  
Suppose you are sharing an instance of a class (e.g. Message) with two threads. The the class has a non-static synchronized method (e.g. setMessage() ). Then only one thread would be able to access the method because the object acquire the lock once executing the synchronized block. Now create two instances of the **Message** class and share them with two threads. In this situation both the threads can access the same methods at a given point of time because two objects acquired two locks at object level.
* **class level lock** for static methods  
In the above mentioned scenario suppose **setMessage()** is a static method. Even though two objects are shared with two threads but once one thread is executing synchronized block of code then the other thread won't be able to execute the synchronized block because of the acquired lock at class level.



## Concept behind putting wait(),notify() methods in Object class
