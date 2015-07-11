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
Suppose you are sharing an instance of a class (e.g. Message) with two threads. The class has a non-static synchronized method (e.g. setMessage() ). Then only one thread would be able to access the method because the object acquire the lock once executing the synchronized block. Now create two instances of the **Message** class and share them with two threads. In this situation both the threads can access the same methods at a given point of time because two objects acquired two locks at object level.
* **class level lock** for static methods  
In the above mentioned scenario suppose **setMessage()** is a static method. Even though two objects are shared with two threads but once one thread is executing synchronized block of code then the other thread won't be able to execute the synchronized block because of the acquired lock at class level.

The following sample code explains the concept of object level lock and class level lock

<div class="download-view"> 
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/java/ThreadTest.zip" target="_blank">Class/Object Level Lock zip(7kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/java/ThreadTest" target="_blank">Class/Object Level Lock</a>
	</span>
</div>

SL NO | Class name | Description
:---: | --- | ---
1 | **com.ashish.bean.Message** | This class has a synchronized NON static and a synchronized static method
2 | **com.ashish.thread.MyThread** | This is the thread class. The run() method calls non static method of the Message class then there is pause of 2 sec then calls the static method of Message class.
3 | **com.ashish.thread.Main** | Creates two instances of the Message class for two threads. The output shows that the non static, synchronized method got called from two different threads concurrently. But the static, synchronized method got completed one after another by two threads because of the Class level locking

The output shows that the non static, synchronized method got called from two different threads concurrently. But the static, synchronized method got completed one after another by two threads because of the Class level locking
<img src="https://cloud.githubusercontent.com/assets/11231867/8633525/54490e10-27ea-11e5-9f4d-28f1d8f66e01.PNG"/>


## Concept behind putting wait(),notify() methods in Object class
