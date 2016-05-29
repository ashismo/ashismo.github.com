---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 3
---

{% include JB/setup %}

## Introduction

Java 8 is a major release for JAVA programming language. The new features in Java 8 includes


* **Functunal programming** with Lamda Expression
* **Default method:** Allows developer to add new methods to the interfaces without breaking the existing implementation of these interface.
* **Method reference** : Referencing functions by their names instead of invoking them directly
* **Javascript engine:** A Java based engine to execute Javascript code
* **Date time API:** New set of API o manipulate date and time

<div class="download-view"> 
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/java/Java8Features.zip" target="_blank">Java8 Features ZIP(7kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/java/Java8Features" target="_blank">Java8 Features</a>
	</span>
</div>

#### Functunal Programming

In traditional java programing there are some limitations. E.g.


* There was no way to define a java method on the fly. Generally, the method will be inside a class. An instance needs to be created to call the method. In Java8 using **lamda expression** this problem is addressed. A method can be created on the fly.
* There was no way to pass method as an argument of a function or returning a method body for that instance.
* **Lamda Expression** is
  * an anonymous function
  * a method without declaration, i.e. access modifier, return value declaration, and names
  * a way to save effort in writing method (in a class) which may not be used repeatedly. The method is defined at the same place.
* Few different types of **Lamda Expression** examples are given below.  



##### Foreach loop

{% highlight java %}
package com.ashish.java8.lamda.expr;

import java.util.ArrayList;
import java.util.List;

public class ForEachLoopMain {
	public static void main(String args[]) {
		List<Integer> list = new ArrayList<Integer>();
		list.add(10);
		list.add(20);
		list.add(30);
		
		System.out.println("Traditional Loop START");
		for(int i : list) {
			System.out.println(i);
		}
		System.out.println("Traditional Loop END");
		
		System.out.println("ForEach Loop START");
		
		list.forEach(n -> {System.out.println(n);});
		
		System.out.println("ForEach Loop END");
		
		System.out.println("Another way to write ForEach Loop START");
		
		list.forEach(System.out::println);
		
		System.out.println("Another way to write ForEach Loop END");
	}
}
{% endhighlight %}

  
  
#### Default Method Example

Suppose there are two different companies **Sony** and **Erricson** manufactures cell phones. Hence they have two seperate interfaces called **ErricsonPhoneIntf** and **SonyPhoneIntf**. In both the interfaces have **makeCall()** default method implemented. Now while manufacturing **Sony Experia C** model by default **ErricsonPhoneIntf.makeCall()** default implementation will get inherited.  
While manufacturing **Sony Experia Z** model, the company wants to add some additional features then **makeCall()** method has to be inherited.  
Now suppose these two brands merged and rebranded as **SonyErricson**. Now **SonyErricson** will inherit from both **SonyIntf** and **ErricsonIntf**. Now there will be a confusion in **makeCall()** method selection. This problem is called **Diamond Problem** in java. In Java8, this problem is addressed. Please have a look into **SonyErricsonPhone** class given below.

**SonyPhoneIntf.java**
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.java8.defaultMethods;

public interface SonyPhoneIntf {
	default void makeCall() {
		System.out.println("Make call implemented by Sony");
	}
}
</code></pre>
<br/>

**SonyExperiaCPhone.java**
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.java8.defaultMethods;

public class SonyExperiaCPhone implements SonyPhoneIntf {
	
}

</code></pre>
<br/>

**SonyExperiaZPhone.java**
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.java8.defaultMethods;

public class SonyExperiaZPhone implements SonyPhoneIntf {
	
	/**
	 * Below method overrides the makeCall() method in parent interface
	 */
	@Override
	public void makeCall() {
		System.out.println("Make call implemented by Sony. Also some new features added");
	}
}
</code></pre>
<br/>

**ErricsonPhoneIntf.java**
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.java8.defaultMethods;

public interface ErricsonPhoneIntf {
	default void makeCall() {
		System.out.println("Make call implemented by Erricson");
	}
}
</code></pre>
<br/>

**SonyErricsonPhone.java**
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.java8.defaultMethods;

public class SonyErricsonPhone implements SonyPhoneIntf, ErricsonPhoneIntf {
	
	/**
	 * This method breaks the java diamond problem at the time of multiple inheritance.
	 * This method clearly specifies the which version of makeCall() method to be taken
	 */
	public void makeCall() {
		ErricsonPhoneIntf.super.makeCall();
	}
}

</code></pre>
<br/>

**DefaultMainMethod.java**
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.java8.defaultMethods;

public class DefaultMainMethod {
	public static void main(String args[]) {
		SonyErricsonPhone sonyErricsonPhone = new SonyErricsonPhone();
		sonyErricsonPhone.makeCall();
		
		SonyExperiaCPhone sonyExperiaCPhone = new SonyExperiaCPhone();
		sonyExperiaCPhone.makeCall();
		
		SonyExperiaZPhone sonyExperiaZPhone = new SonyExperiaZPhone();
		sonyExperiaZPhone.makeCall();
	}
}

</code></pre>

##### Output
The output of the program is given below

<img src="https://cloud.githubusercontent.com/assets/11231867/15616453/7a9b9050-2461-11e6-9f7a-83033512d80d.PNG"/>
