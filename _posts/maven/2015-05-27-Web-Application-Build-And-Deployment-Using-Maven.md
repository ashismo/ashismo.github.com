---
layout: post
category : java-build
tags : [Build Tutorial]
weight: 20
---
{% include JB/setup %}

## Introduction

In this example, I am going to show you how to build and deploy an web application in Tomcat7 using maven. If you are new to maven setup then check my another blog on [maven settings](http://ashismo.github.io/java-build/2015/05/09/Setting%20up%20a%20Maven%20Build/){:target="_blank"}.  
**tomcat7-maven-plugin** plugin helps to deploy the application into tomcat. In this case we need to execute tomcat7:deploy

## Required Software


 * JDK 1.7
 * Maven 3.3.x
 * Eclipse for J2EE
 * Tomcat 7
 
## Steps to write code and deploy in Tomcat Server

 
<div class="download-view"> 
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/maven/WebAppMavenBuild_Deploy.zip" target="_blank">WebAppMavenBuild_Deploy zip(11kb)</a> 
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/maven/WebAppMavenBuild_Deploy" target="_blank">WebAppMavenBuild_Deploy</a>
	</span>
</div>

 * Create a dynamic web project (Fill information in the below screens as shown below. Other screens will have no change)
 <img src="https://cloud.githubusercontent.com/assets/11231867/7843123/2fd24166-04c5-11e5-9f3a-f9dc0494cec8.png"/>
 
 <img src="https://cloud.githubusercontent.com/assets/11231867/7843126/3149553e-04c5-11e5-86a7-9b3d28dbda48.png"/>
 
 * Create a simple java project with src/main/java, src/main/resources as the source directory. Once project is created, you can add source directory from the below screen (Right click on project -> properties)

 <img src="https://cloud.githubusercontent.com/assets/11231867/7843024/a0ce8e98-04c4-11e5-98d1-33463b6e9502.PNG"/>
 
 * Convert the project into maven project (Right click on the project -> Configure -> Convert to Maven project)
 * Create the below **index.jsp** file as shown in the below image. Once this application is deployed and executed, **This project has been build and deployed in Tomcat server by MAVEN** message will be displayed
<img src="https://cloud.githubusercontent.com/assets/11231867/7843270/35f54420-04c6-11e5-952e-5f6dbed936b7.PNG"/>

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
&lt;title&gt;Hello world&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
 &lt;h1&gt;This project has been build and deployed in Tomcat server by MAVEN&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>


 * Right click on the project -> Run As -> Run on server. Select tomcat7 to deploy. Then Next->Finish.
<img src="https://cloud.githubusercontent.com/assets/11231867/7843393/0397873a-04c7-11e5-8873-0f4e7ad3aea5.png"/> 
 * Once tomcat is started then hit **http://localhost:8080/WebAppMavenBuild_Deploy/** URL and if you get the below screen then you are done with the project setup and your project is running perfectly fine.
 <img src="https://cloud.githubusercontent.com/assets/11231867/7843452/64d3f0ec-04c7-11e5-9206-58c5c7177b0e.png"/>
 * Now the same build and deployment will be done using maven build.
 * Add the following piece of configuration in **c:\user\<user_name>\.m2\settings.xml**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;server&gt;
	&lt;id&gt;TomcatServer&lt;/id&gt;
	&lt;username&gt;root&lt;/username&gt;
	&lt;password&gt;root&lt;/password&gt;
&lt;/server&gt;
</code></pre>

 * Add the following lines in your **tomcat_path\conf\tomcat-users.xml** file

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;role rolename="manager-script"/&gt;
&lt;role rolename="manager-gui"/&gt;
&lt;user username="root" password="root" roles="manager-script,manager-gui"/&gt;
</code></pre>

 * Add the following lines in your **pom.xml**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
..........
&lt;plugin&gt;
	&lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;
	&lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;
	&lt;version&gt;2.0&lt;/version&gt;
	&lt;configuration&gt;
		&lt;url&gt;http://localhost:8080/manager/text&lt;/url&gt; &lt;!-- Do not change --&gt;
		&lt;server&gt;TomcatServer&lt;/server&gt; &lt;!-- Also configured in maven settings.xml file --&gt;
		&lt;path&gt;/WebAppMavenBuild_Deploy&lt;/path&gt;
		&lt;update&gt;true&lt;/update&gt;   &lt;!-- To redeploy the war file --&gt;
		&lt;username&gt;root&lt;/username&gt;
		&lt;password&gt;root&lt;/password&gt;
	&lt;/configuration&gt;
&lt;/plugin&gt;

.............

&lt;dependency&gt;
	&lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;
	&lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;
	&lt;version&gt;2.2&lt;/version&gt;
	&lt;type&gt;maven-plugin&lt;/type&gt;
&lt;/dependency&gt;
</code></pre>
 
 * Start the tomcat server
 * Right click on the project -> Run as -> Run Configurations... then follow the below screen to do maven build and deployment

 <img src="https://cloud.githubusercontent.com/assets/11231867/7844765/62e4807c-04d0-11e5-9672-eccf8966b860.PNG">
 
 * You will see the successful build with the below message
 
```
Uploaded: http://localhost:8080/manager/text/deploy?path=%2WebAppMavenBuild_Deploy (26846 KB at 28169.2 KB/sec)
 
[INFO] tomcatManager status code:200, ReasonPhrase:OK
[INFO] OK - Deployed application at context path /WebAppMavenBuild_Deploy
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
```

 * Once build is successful then hit **http://localhost:8080/WebAppMavenBuild_Deploy/** URL and if you get the below screen then you are done with the project deployment with maven and your project is running perfectly fine.
 <img src="https://cloud.githubusercontent.com/assets/11231867/7843452/64d3f0ec-04c7-11e5-9206-58c5c7177b0e.png"/>
