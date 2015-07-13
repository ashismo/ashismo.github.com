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

In multi threading programming, threads use resources (instances of classes) to perform a set of tasks. Once a thread enters into a synchronized block means the thread acquires the object level/class level lock (as applicable) then no other thread can access the resource.

Now, lets assume wait() and notify in **Object** class and **Thread** class seperately. 

wait(), notify() and notifyAll() are the used for inter thread communication. As mentioned above, once a thread acquires the lock of an object/class (which internally is inherited from **Object** class) then other threads will wait until the lock gets released. Once the lock gets released then it is the responsibility of the resource to notify (using notify() or notifyAll()) other threads which are waiting for the resource. That is why these methods are the part of the **Object** class.

If wait() and notify() were on the Thread instead then each thread would have to know the status of every other thread. How would thread1 know that thread2 was waiting for access to a particular resource? If thread1 needed to call thread2.notify() it would have to somehow find out that thread2 was waiting. There would need to be some mechanism for threads to register the resources or actions that they need so others could signal them when stuff was ready or available

## sleep() vs wait()

sleep() belongs to **Thread** class and wait() belongs to **Object** class (reason is given above)
sleep() method does not releases the lock but wait() method releases the lock

## join() in thread
It causes the currently running threads to stop executing until the thread it joins with completes its task.  
In the below example t1 thread will complete its task then t2 and t3 will start.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
class JoinTest extends Thread {  
 public void run(){  
  for(int i=1;i<=5;i++){  
   try{  
       Thread.sleep(1000);  
   } catch(Exception e){System.out.println(e);}  
  System.out.println(i);  
  }  
 }  
public static void main(String args[]){  
 	JoinTest t1=new JoinTest();  
 	JoinTest t2=new JoinTest();  
 	JoinTest t3=new JoinTest();  
 	t1.start();  
 	try{  
		t1.join();  
	} catch(Exception e){
		System.out.println(e);
	}  
  
 	t2.start();  
 	t3.start();  
   }  
}  
</code></pre>

## Enumeration vs Iterator

Both Enumeration vs Iterator gives successive elements. However, Iterator allows the caller to remove element. So Iterator giver you more features compared to Enumerator.  
Below are the available methods in both Enumerator and Iterator class

Enumerator &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iterator
_____________________________________________________________________________
hasMoreElements()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hasNext()  
nextElement()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next()  
N/A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**remove()**  
