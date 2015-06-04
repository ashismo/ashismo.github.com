---
layout: post
category : java-build
tags : [Build Tutorial]
weight: 30
---
{% include JB/setup %}

## Introduction

In real life maven projects, most of the cases you will see multi modules build done by Maven. In this example, I have created one child web project **(ChildWebProject)**, one java project **(ChildJavaProject)** and a parent project **(ParentMavenProject)**. Parent project will include the web project which will include the jar **(ChildJavaProject.jar)** of the java project. In the **ChildJavaProject.jar** the servlet class will be packaged to handle web request in this example. So there will be no servlet class in the **ChildWebProject**.

## Steps to write the code


 * Create **ChildWebProject** project and convert into maven project (Right click on the project->Configure->Convert into Maven project) in eclipse. You can follow this <a href="/java-build/2015/05/27/Web-Application-Build-And-Deployment-Using-Maven/">Web Application Build And Deployment Using Maven</a> post.
 * Create a **index.jsp** file with the below content. Once you click on the button it will call a servlet (**com.ashish.servlet.ServletInOtherModule**) which is present in another project (*ChildJavaProject.jar**)

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
&lt;title&gt;Insert title here&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

	&lt;h3&gt;This is a web project includes a jar from another java project.&lt;/h3&gt;
	&lt;form action="ServletInOtherModule" method="post"&gt;
		&lt;div&gt;
			Click this &lt;button&gt;Button&lt;/button&gt; to call servlet method in another module
		&lt;/div&gt;
	&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

 * Create another jsp file called **newJSP.jsp** which will get called from the above mentioned servlet.
 
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
&lt;title&gt;Insert title here&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;h1&gt;Landed to another page&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>


 * Your pom.xml should be like this. Read the inline comments which is self explainatory.

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;!-- Parent pom.xml has to be specified to inherit configurations from parent 
		pom.xml --&gt;
	&lt;parent&gt;
		&lt;groupId&gt;com.ashish.maven&lt;/groupId&gt;
		&lt;artifactId&gt;ParentMavenProject&lt;/artifactId&gt;
		&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
		&lt;relativePath&gt;../ParentMavenProject/pom.xml&lt;/relativePath&gt;
	&lt;/parent&gt;

	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;artifactId&gt;ChildWebProject&lt;/artifactId&gt;
	&lt;packaging&gt;war&lt;/packaging&gt;

	&lt;pluginRepositories&gt;
		&lt;pluginRepository&gt;
			&lt;id&gt;maven-repository.dev.java.net&lt;/id&gt;
			&lt;name&gt;Java.net Maven 2 Repository&lt;/name&gt;
			&lt;url&gt;http://download.java.net/maven/2&lt;/url&gt;
		&lt;/pluginRepository&gt;
	&lt;/pluginRepositories&gt;
	&lt;dependencies&gt;
		&lt;!-- Add ChildJavaProject.jar as the dependency of this project --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;com.ashish.maven&lt;/groupId&gt;
			&lt;artifactId&gt;ChildJavaProject&lt;/artifactId&gt;
			&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;

	&lt;build&gt;
		&lt;plugins&gt;
			&lt;plugin&gt;
				&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
				&lt;version&gt;3.1&lt;/version&gt;
				&lt;configuration&gt;
					&lt;source&gt;1.7&lt;/source&gt;
					&lt;target&gt;1.7&lt;/target&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
			&lt;plugin&gt;
				&lt;artifactId&gt;maven-war-plugin&lt;/artifactId&gt;
				&lt;version&gt;2.3&lt;/version&gt;
				&lt;configuration&gt;
					&lt;warSourceDirectory&gt;WebContent&lt;/warSourceDirectory&gt;
					&lt;failOnMissingWebXml&gt;false&lt;/failOnMissingWebXml&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
			&lt;!-- Below plugin is used to deploy the WAR in the tomcat server --&gt;
			&lt;!-- Note the goal for this maven build is tomcat7:deploy --&gt;
			&lt;plugin&gt;
				&lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;
				&lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;
				&lt;version&gt;2.0&lt;/version&gt;
				&lt;configuration&gt;
					&lt;url&gt;http://localhost:8080/manager/text&lt;/url&gt;
					&lt;server&gt;TomcatServer&lt;/server&gt;
					&lt;path&gt;/ChildWebProject&lt;/path&gt;
					&lt;update&gt;true&lt;/update&gt; &lt;!-- This is to redeploy the WAR --&gt;
					&lt;username&gt;root&lt;/username&gt;
					&lt;password&gt;root&lt;/password&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
		&lt;/plugins&gt;
	&lt;/build&gt;
&lt;/project&gt;
</code></pre>
