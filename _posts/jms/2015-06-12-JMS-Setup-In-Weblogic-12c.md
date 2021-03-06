---
layout: post
category : java-Misc
tags : [Weblogic12c]
weight: 110
---

{% include JB/setup %}

## Introduction


 * JMS stands for **Java Message Service**. JMS is an API that provides facility to read, create and send messages. JMS is **asynchronous** (To receive the message, client is not required to send request. Message will arrive automatically to the client) communication. 
 * JMS is mainly used to send and receive message from one application to another.
 * Following are the messaging domain in JMS
   * **Point-to-Point messaging domain:** In this model, one message is delivered to one receiver only. There will be a **QUEUE** to hold the message until the receiver is ready.
 <img src="https://cloud.githubusercontent.com/assets/11231867/8129519/9a5422ac-1127-11e5-9ba7-c1106f4320e9.png"/>
   * **Publisher/Subscriber (Pub/Sub) Messaging domain:** In this model, one message is delivered to all the subscribers. There will be a **TOPIC** to hold and deliver messages.
 <img src="https://cloud.githubusercontent.com/assets/11231867/8129517/97f8b2ca-1127-11e5-8cc8-490508a724d3.png"/>

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


#### Create JMS Server


 * Login to the weblogic admin console (localhost:7001/console)
 * Click on JMS server as shown below and create the server called **myJMSServer**. Select available target in the next page
<img src="https://cloud.githubusercontent.com/assets/11231867/8130315/f161728c-112e-11e5-9ea5-4ff32071c7bf.png"/>

#### Create JMS Module

Follow the below screenshot to create JMS Module
<img src="https://cloud.githubusercontent.com/assets/11231867/8158341/ebe65bb8-1379-11e5-82ad-5ddb25736683.png"/>

#### Create Subdeployment
Follow the below screenshot to create Subdeployment
<img src="https://cloud.githubusercontent.com/assets/11231867/8159073/0cec15c6-1381-11e5-9919-6c828ad7a85c.png"/>  

<img src="https://cloud.githubusercontent.com/assets/11231867/8159076/0e8a7134-1381-11e5-8127-30b39decc823.png"/>

#### Create Connection factory
Follow the below screenshot to create Connection Factory
<img src="https://cloud.githubusercontent.com/assets/11231867/8158562/cc523edc-137b-11e5-80d6-1b2cd24dbf32.png"/>  

<img src="https://cloud.githubusercontent.com/assets/11231867/8158563/cd8b07e8-137b-11e5-9074-9644eb00ffc7.png"/>

#### Create JMS Queue
Follow the below screenshot to create JMS Queue
<img src="https://cloud.githubusercontent.com/assets/11231867/8158664/bfed7890-137c-11e5-9609-5f9192b053ed.png"/>  

<img src="https://cloud.githubusercontent.com/assets/11231867/8158666/c0fe76ee-137c-11e5-97c8-b355f5c037b8.png"/>

#### Done with configuration

If you see below two screens that means you are done with the configuration

Connection factory and JMS Queue under JMS module will look like this
<img src="https://cloud.githubusercontent.com/assets/11231867/8159164/a6d6d2ca-1381-11e5-93da-c998dba74820.png"/>  

Connection factory and JMS Queue under Subdeployment will look like this
<img src="https://cloud.githubusercontent.com/assets/11231867/8159114/5e76bd7e-1381-11e5-86f8-bbb2eb6d8df8.png"/>


## JMS Sernder and Receiver Code

In this example, we shall be sending message from sender to receiver via JMS queue

<div class="download-view"> 
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/jms/JMSProject.zip" target="_blank">JMSProject zip(34kb)</a> 
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/jms/JMSProject.zip" target="_blank">JMSProject</a>
	</span>
</div>

#### Required Software


 * JDK 1.7
 * Maven 3.0.x
 * Eclipse
 * Weblogic Server 12c

#### Steps to write code


 * Create a maven java project with the following project structure as shown below
<img src="https://cloud.githubusercontent.com/assets/11231867/8159588/c812785a-1385-11e5-846b-3dcf924489f8.png"/>
 * No need to add any additional dependency in the pom.xml
 * Download jms-1.1.jar from internet. Add **jms-1.1.jar** and **weblogic.jar** from server path(SERVER_HOME\wlserver\server\lib) as the dependency of the project as shown below
<img src="https://cloud.githubusercontent.com/assets/11231867/8159636/422a4406-1386-11e5-90fd-e85785f93329.png"/>
 * Below are the important files as shown in the table

SL NO | Class Name | Description
:---: | :--- | :---
1 | **com.ashish.jms.JMSUtil** | This utility class defines JNDI_FACTORY, JMS_CONNECTION_FACTORY, JMS_QUEUE and Weblogic server URL
2 | **com.ashish.jms.sender.JMSSender** | This class establishes a connection and send message to the JMS Queue
3 | **com.ashish.jms.receiver.JMSReceiver** | This class establishes a connection and receive message from the JMS Queue

Note that both **com.ashish.jms.sender.JMSSender** and **com.ashish.jms.receiver.JMSReceiver** classes have main() method because we need to run sender and receiver program one after another. Programs will stop once sender sends **quit** in the stream from the sender. Make sure your weblogic server is running before executing the above mentioned classes.

#### com.ashish.jms.JMSUtil

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.jms;

import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class JMSUtil {

	// JNDI context factory.
	public final static String JNDI_FACTORY = "weblogic.jndi.WLInitialContextFactory";

	// JMS context factory.
	public final static String JMS_CONNECTION_FACTORY = "jms/myConnectionFactory";

	// JMS queue.
	public final static String JMS_QUEUE = "jms/myJMSQueue";
	
	// JMS queue.
	public final static String URL = "t3://127.0.0.1:7001";

	public static InitialContext getInitialContext()
			throws NamingException {
		Hashtable env = new Hashtable();
		env.put(Context.INITIAL_CONTEXT_FACTORY, JNDI_FACTORY);
		env.put(Context.PROVIDER_URL, URL);
		return new InitialContext(env);
	}
}
</code></pre>

#### com.ashish.jms.sender.JMSSender


<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.jms.sender;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.jms.JMSException;
import javax.jms.Queue;
import javax.jms.QueueConnection;
import javax.jms.QueueConnectionFactory;
import javax.jms.QueueSender;
import javax.jms.QueueSession;
import javax.jms.Session;
import javax.jms.TextMessage;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import com.ashish.jms.JMSUtil;

/** This example shows how to establish a connection
* and send messages to the JMS queue.
*
*/
public class JMSSender
{
 

 private QueueConnectionFactory qconFactory;
 private QueueConnection qcon;
 private QueueSession qsession;
 private QueueSender qsender;
 private Queue queue;
 private TextMessage msg;

 /**
  * Creates all the necessary objects for sending
  * messages to a JMS queue.
  */
 public void init(Context ctx, String queueName)
    throws NamingException, JMSException
 {
    qconFactory = (QueueConnectionFactory) ctx.lookup(JMSUtil.JMS_CONNECTION_FACTORY);
    qcon = qconFactory.createQueueConnection();
    qsession = qcon.createQueueSession(false, Session.AUTO_ACKNOWLEDGE);
    queue = (Queue) ctx.lookup(queueName);
    qsender = qsession.createSender(queue);
    msg = qsession.createTextMessage();
    qcon.start();
 }

 /**
  * Sends a message to a JMS queue.
  *
  * @param message  message to be sent
  * @exception JMSException if JMS fails to send message due to internal error
  */
 public void send(String message) throws JMSException {
    msg.setText(message);
    qsender.send(msg);
 }

 /**
  * Closes JMS objects.
  * @exception JMSException if JMS fails to close objects due to internal error
  */
 public void close() throws JMSException {
    qsender.close();
    qsession.close();
    qcon.close();
 }

 public static void main(String[] args) throws Exception {
    InitialContext ic = JMSUtil.getInitialContext();
    JMSSender qs = new JMSSender();
    qs.init(ic, JMSUtil.JMS_QUEUE);
    readAndSend(qs);
    qs.close();
 }

 private static void readAndSend(JMSSender qs)
    throws IOException, JMSException
 {
    BufferedReader msgStream = new BufferedReader(new InputStreamReader(System.in));
    String line=null;
    boolean quitNow = false;
    do {
     System.out.print("Enter message (\"quit\" to quit): \n");
     line = msgStream.readLine();
     if (line != null && line.trim().length() != 0) {
       qs.send(line);
       System.out.println("JMS Message Sent: "+line+"\n");
       quitNow = line.equalsIgnoreCase("quit");
     }
    } while (! quitNow);

 }
}
</code></pre>


#### com.ashish.jms.receiver.JMSReceiver

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.jms.receiver;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.Queue;
import javax.jms.QueueConnection;
import javax.jms.QueueConnectionFactory;
import javax.jms.QueueReceiver;
import javax.jms.QueueSession;
import javax.jms.Session;
import javax.jms.TextMessage;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import com.ashish.jms.JMSUtil;

/**
* This example shows how to establish a connection to
* and receive messages from a JMS queue. 
*/
public class JMSReceiver implements MessageListener
{
	 
 private QueueConnectionFactory qconFactory;
 private QueueConnection qcon;
 private QueueSession qsession;
 private QueueReceiver qreceiver;
 private Queue queue;
 private boolean quit = false;

/**
 * Message listener interface.
 * @param msg  message
 */
 public void onMessage(Message msg)
 {
    try {
     String msgText;
     if (msg instanceof TextMessage) {
       msgText = ((TextMessage)msg).getText();
     } else {
       msgText = msg.toString();
     }

     System.out.println("Message Received: "+ msgText );

     if (msgText.equalsIgnoreCase("quit")) {
       synchronized(this) {
         quit = true;
         this.notifyAll(); // Notify main thread to quit
       }
     }
    } catch (JMSException jmse) {
     System.err.println("An exception occurred: "+jmse.getMessage());
    }
 }

 /**
  * Creates required objects 
  */
 public void init(Context ctx, String queueName)
    throws NamingException, JMSException
 {
    qconFactory = (QueueConnectionFactory) ctx.lookup(JMSUtil.JMS_CONNECTION_FACTORY);
    qcon = qconFactory.createQueueConnection();
    qsession = qcon.createQueueSession(false, Session.AUTO_ACKNOWLEDGE);
    queue = (Queue) ctx.lookup(queueName);
    qreceiver = qsession.createReceiver(queue);
    qreceiver.setMessageListener(this);
    qcon.start();
 }

 /**
  * Closes JMS objects.
  */
 public void close()throws JMSException
 {
    qreceiver.close();
    qsession.close();
    qcon.close();
 }

 public static void main(String[] args) throws Exception {
    InitialContext ic = JMSUtil.getInitialContext();
    JMSReceiver qr = new JMSReceiver();
    qr.init(ic, JMSUtil.JMS_QUEUE);

    System.out.println(
        "JMS is ready To Receive Messages (To quit, send a \"quit\" message).");

    // Wait until a "quit" message has been received.
    synchronized(qr) {
	     while (! qr.quit) {
	       try {
	         qr.wait();
	       } catch (InterruptedException ie) {}
	     }
    }
    qr.close();
 }
}
</code></pre>

### Output

Run both sender and receiver together and the output of the programs shown below

##### JMS Sender output

<img src="https://cloud.githubusercontent.com/assets/11231867/8159590/ca7ce4cc-1385-11e5-8be6-10e8fd3e060c.png"/>  

##### JMS Receiver output

<img src="https://cloud.githubusercontent.com/assets/11231867/8159591/cc097c74-1385-11e5-8e58-05bdfd16a293.png"/>
