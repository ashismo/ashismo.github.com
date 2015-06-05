---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 70
---

## What is Java Code Analyzer?

Analyzing java source code is an important aspest of good coding. It helps developer to findout the unused variables, dead code, deviation from the coding standard, possible bugs and many more. There are many open source Java code analyzers are available in the market. Few of them are **PMD, SONAR, Find Bugs, QJ-Pro, JDiff, CheckStyle** etc. **PMD** and **SONAR** are very popular in the industry.

## What is PMD?

PMD is a static rule set based Java source code analyzer that identifies the potential problems like:


 * Possible bugs - Empty try/catch/finally/switch blocks
 * Dead code - Unused variables
 * Duplicate code
 * Empty if/while statements

PMD report shows the indicative issues. It is upto the developer to decide whether the issue to be fixed. However, it is advisable that the developpers should fix priority 1 and 2 violations.

## What is SONAR?

SONAR (Currently known as SonarQube) is an open source platform to inspect code quality. It identifies the problems as mentioned in the below image.

<img src="https://cloud.githubusercontent.com/assets/11231867/7565993/0190cab2-f812-11e4-8412-8acbc253d291.png"/>

Sonar report shows the indicative issues. It is upto the developer to decide whether the issue to be fixed. However, it is advisable that the developpers should fix priority 1 and 2 violations

## What is Continuous Integration (CI)?

A complementary practice to CI (Continuous Integration) is that before submitting work, each programmer must do a complete build and run (and pass) all unit tests. Integration tests are usually run automatically on a CI server when it detects a new commit. All programmers should start the day by updating the project from the repository.  
**Jenkins, Hudson** are the CI tools for Java, which runs in a servlet container in Tomcat, Glassfish etc. **Hudson** was started by Sun Microsystem and later on it was rebranded to **Jenkins** by Oracle. However, **Hudson** is currently maintained by Eclipse Foundation.

## Maven

Maven is a XML based (pom.xml) build tool primarily for Java. However, maven can also be used for other languages like  C#, Ruby, Scala. Maven dynamically downloads Java libraries and Maven plug-ins from one or more repositories such as the Maven 2 Central Repository, and stores them in a local cache (**%USER_HOME%/.m2/Repository** by default).

### Important tags in pom.xml

SL NO | tag name | Description
:---: | --- | ---
1 | **groupId** | This is used to identify the project uniquely. In the below example, **com.ashish.maven** is the group id so the modules under this groupId will get built inside **%REPOSITORY_PATH%\com\ashish\maven** folder.
2 | **artifactId** | Ideally this is the name of the module. The final jar/war will get created by this name.
3 | **version** | This indicates the current artifact version
4 | **packaging** | This indicates the type of the module/project. Values are **pom,war,jar, ear, ejb etc**. For the parent module **pom** should be the packaging type. Similarly, for the war project the packaging is of type war.
5 | **repository** | If the added dependencies not found in the local repository then the pom will try to relove the dependency from the URL mentioned in this tag

```xml
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;HibernateExample&lt;/groupId&gt;
  &lt;artifactId&gt;HibernateExample&lt;/artifactId&gt;
  &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
  
  &lt;repositories&gt;
    &lt;repository&gt;
        &lt;id&gt;jboss&lt;/id&gt;
        &lt;url&gt;http://repository.jboss.org/maven2&lt;/url&gt;
    &lt;/repository&gt;
  &lt;/repositories&gt;

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
  
  &lt;dependencies&gt;
  	&lt;!-- Hibernate core --&gt;
	&lt;dependency&gt;
        &lt;groupId&gt;org.hibernate&lt;/groupId&gt;
        &lt;artifactId&gt;hibernate-core&lt;/artifactId&gt;
        &lt;version&gt;4.3.6.Final&lt;/version&gt;
    &lt;/dependency&gt;
	
	&lt;!-- Hibernate annotation --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;hibernate-annotations&lt;/groupId&gt;
		&lt;artifactId&gt;hibernate-annotations&lt;/artifactId&gt;
		&lt;version&gt;3.3.0.GA&lt;/version&gt;
	&lt;/dependency&gt;
 
	&lt;dependency&gt;
		&lt;groupId&gt;hibernate-commons-annotations&lt;/groupId&gt;
		&lt;artifactId&gt;hibernate-commons-annotations&lt;/artifactId&gt;
		&lt;version&gt;3.0.0.GA&lt;/version&gt;
	&lt;/dependency&gt;
	
	&lt;!-- Hibernate library dependecy start --&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;dom4j&lt;/groupId&gt;
		&lt;artifactId&gt;dom4j&lt;/artifactId&gt;
		&lt;version&gt;1.6.1&lt;/version&gt;
	&lt;/dependency&gt;
 
	&lt;dependency&gt;
		&lt;groupId&gt;commons-logging&lt;/groupId&gt;
		&lt;artifactId&gt;commons-logging&lt;/artifactId&gt;
		&lt;version&gt;1.1.1&lt;/version&gt;
	&lt;/dependency&gt;
 
	&lt;dependency&gt;
		&lt;groupId&gt;commons-collections&lt;/groupId&gt;
		&lt;artifactId&gt;commons-collections&lt;/artifactId&gt;
		&lt;version&gt;3.2.1&lt;/version&gt;
	&lt;/dependency&gt;
 
	&lt;dependency&gt;
		&lt;groupId&gt;cglib&lt;/groupId&gt;
		&lt;artifactId&gt;cglib&lt;/artifactId&gt;
		&lt;version&gt;2.2&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;!-- Hibernate library dependecy end --&gt;
	
	&lt;!-- HSQL database --&gt;
	&lt;dependency&gt; 
        &lt;groupId&gt;hsqldb&lt;/groupId&gt; 
        &lt;artifactId&gt;hsqldb&lt;/artifactId&gt; 
        &lt;version&gt;1.8.0.10&lt;/version&gt; 
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;
```
