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

<div class="download-view"> 
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/maven/ParentMavenProject.zip" target="_blank">ParentMavenProject zip(3kb)</a> 
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/maven/ParentMavenProject" target="_blank">ParentMavenProject</a>
	</span>
</div>

<div class="download-view"> 
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/maven/ChildJavaProject.zip.zip" target="_blank">ChildJavaProject zip(13kb)</a> 
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/maven/ChildJavaProject.zip" target="_blank">ChildJavaProject</a>
	</span>
</div>

<div class="download-view"> 
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/maven/ChildWebProject.zip.zip" target="_blank">ChildWebProject zip(22kb)</a> 
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/maven/ChildWebProject.zip" target="_blank">ChildWebProject</a>
	</span>
</div>
Create all three projects in the workspace at same level as shown below
<img src="https://cloud.githubusercontent.com/assets/11231867/7978153/e1765566-0aaf-11e5-9340-a32a688c8d71.png"/>

### Parent Maven Project


* Create **ParentMavenProject** project and convert into maven project (Right click on the project->Configure->Convert into Maven project) in eclipse
* **pom.xml** file should be as shown below. Please go through the inline comments for better understanding. The parent project includes the child projects. All dependencies (jars) to be added in this parent POM and child projects will use the required dependencies without specifying version in the child POM. Whenever version needs to be changed, just change in the parent project. Child projects will automatically inherit them during compilation and packaging.

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;com.ashish.maven&lt;/groupId&gt;
	&lt;artifactId&gt;ParentMavenProject&lt;/artifactId&gt;
	&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
	&lt;!-- packaging should be "pom" in the parent POM to include child modules --&gt;
	&lt;packaging&gt;pom&lt;/packaging&gt;

	&lt;pluginRepositories&gt;
		&lt;pluginRepository&gt;
			&lt;id&gt;maven-repository.dev.java.net&lt;/id&gt;
			&lt;name&gt;Java.net Maven 2 Repository&lt;/name&gt;
			&lt;url&gt;http://download.java.net/maven/2&lt;/url&gt;
		&lt;/pluginRepository&gt;
	&lt;/pluginRepositories&gt;
	&lt;dependencyManagement&gt;
		&lt;dependencies&gt;
			&lt;!-- All dependencies to be added in the parent pom.xml. Version to be 
				specified here. Child projects will add the required dependencies without 
				version --&gt;
			&lt;dependency&gt;
				&lt;groupId&gt;javax.servlet&lt;/groupId&gt;
				&lt;artifactId&gt;servlet-api&lt;/artifactId&gt;
				&lt;version&gt;2.3&lt;/version&gt;
				&lt;!-- scope "provided" means the jar will be used during compile time 
					but will not get packaged --&gt;
				&lt;scope&gt;provided&lt;/scope&gt;
			&lt;/dependency&gt;
		&lt;/dependencies&gt;
	&lt;/dependencyManagement&gt;

	&lt;!-- Included both the child projects to build. Order of dependency should 
		be maintained --&gt;
	&lt;modules&gt;
		&lt;module&gt;../ChildJavaProject&lt;/module&gt;
		&lt;module&gt;../ChildWebProject&lt;/module&gt;
	&lt;/modules&gt;
&lt;/project&gt;
</code></pre>

### Child Java Project


 * Create **ChildJavaProject** project and convert into maven project (Right click on the project->Configure->Convert into Maven project) in eclipse. Project structure is shown below.
<img src="https://cloud.githubusercontent.com/assets/11231867/7978098/66f31716-0aaf-11e5-8c35-32626b2e8ed6.png"/>
 * **pom.xml** file should be as shown below. Please go through the inline comments for better understanding.

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;

	&lt;!-- Parent pom.xml has to be specified to inherit configuration from parent 
		pom.xml --&gt;
	&lt;parent&gt;
		&lt;groupId&gt;com.ashish.maven&lt;/groupId&gt;
		&lt;artifactId&gt;ParentMavenProject&lt;/artifactId&gt;
		&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
		&lt;relativePath&gt;../ParentMavenProject/pom.xml&lt;/relativePath&gt;
	&lt;/parent&gt;

	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;artifactId&gt;ChildJavaProject&lt;/artifactId&gt;
	&lt;pluginRepositories&gt;
		&lt;pluginRepository&gt;
			&lt;id&gt;maven-repository.dev.java.net&lt;/id&gt;
			&lt;name&gt;Java.net Maven 2 Repository&lt;/name&gt;
			&lt;url&gt;http://download.java.net/maven/2&lt;/url&gt;
		&lt;/pluginRepository&gt;
	&lt;/pluginRepositories&gt;
	&lt;dependencies&gt;
		&lt;!-- Only dependency has to be mentioned. Version not required to specify 
			here. Version will get inherited from pom.xml --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;javax.servlet&lt;/groupId&gt;
			&lt;artifactId&gt;servlet-api&lt;/artifactId&gt;
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
		&lt;/plugins&gt;
	&lt;/build&gt;
&lt;/project&gt;
</code></pre>



 * **com.ashish.servlet.ServletInOtherModule**
 
<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ServletInOtherModule extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ServletInOtherModule() {
        super();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.sendRedirect("newJSP.jsp");
	}

}
</code></pre>

 
### Child Web project


 * Create **ChildWebProject** project and convert into maven project (Right click on the project->Configure->Convert into Maven project) in eclipse. You can follow this <a href="/java-build/2015/05/27/Web-Application-Build-And-Deployment-Using-Maven/">Web Application Build And Deployment Using Maven</a> post. Below is the project structure
<img src="https://cloud.githubusercontent.com/assets/11231867/7978086/480530d2-0aaf-11e5-8033-e14a11cdd3b8.png"/>
 * Create a **index.jsp** file with the below content. Once you click on the button it will call a servlet (**com.ashish.servlet.ServletInOtherModule**) which is present in another project (**ChildJavaProject.jar**)

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


 * **web.xml**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://java.sun.com/xml/ns/javaee"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
	id="WebApp_ID" version="3.0"&gt;
	&lt;display-name&gt;ChildWebProject&lt;/display-name&gt;
	&lt;welcome-file-list&gt;
		&lt;welcome-file&gt;index.html&lt;/welcome-file&gt;
		&lt;welcome-file&gt;index.htm&lt;/welcome-file&gt;
		&lt;welcome-file&gt;index.jsp&lt;/welcome-file&gt;
		&lt;welcome-file&gt;default.html&lt;/welcome-file&gt;
		&lt;welcome-file&gt;default.htm&lt;/welcome-file&gt;
		&lt;welcome-file&gt;default.jsp&lt;/welcome-file&gt;
	&lt;/welcome-file-list&gt;
	&lt;servlet&gt;
		&lt;servlet-name&gt;ServletInOtherModule&lt;/servlet-name&gt;
		&lt;!-- This servlet class belongs to another project which will get packaged 
			into this war --&gt;
		&lt;servlet-class&gt;com.ashish.servlet.ServletInOtherModule&lt;/servlet-class&gt;
	&lt;/servlet&gt;
	&lt;servlet-mapping&gt;
		&lt;servlet-name&gt;ServletInOtherModule&lt;/servlet-name&gt;
		&lt;url-pattern&gt;/ServletInOtherModule&lt;/url-pattern&gt;
	&lt;/servlet-mapping&gt;
&lt;/web-app&gt;
</code></pre>


 * Your **pom.xml** should be like this. Please go through the inline comments for better understanding.

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


## Output

Once you deploy the **ChildWebProject** in tomcat then you can see the below output.

<img src="https://cloud.githubusercontent.com/assets/11231867/7978315/aafe9744-0ab1-11e5-8c84-a6a798f2e3e8.png"/>
