---
layout: post
category : java-Logging Mechanism
tags : [log4j]
weight: 100
---

## Introduction

Logging is the process of writing log messages during the execution of a program to a central place. Application log is very important for code debugging and data analysis. Log4J is the most populalar logging framework

The following table defines the log levels and messages in log4j, in decreasing order of severity.

Rank | Log Level | Description
:---: | --- | ---
1 | **OFF** | Turn off the log
2 | **FATAL** | Severe errors that cause premature termination. Expect these to be immediately visible on a status console
3 | **ERROR** | Other runtime errors or unexpected conditions. Expect these to be immediately visible on a status console.
4 | **WARN** | Use of deprecated APIs, poor use of API, 'almost' errors, other runtime situations that are undesirable or unexpected, but not necessarily "wrong". Expect these to be immediately visible on a status console
5 | **INFO** | Interesting runtime events (startup/shutdown). Expect these to be immediately visible on a console, so be conservative and keep to a minimum.
6 | **DEBUG** | Detailed information on the flow through the system. Expect these to be written to logs only.
7 | **TRACE** | Most detailed information. Expect these to be written to logs only. Since version 1.2.12

## Objectives


 * Log file path and it's properties (i.e. max log file size, max backup index etc) to be defined
 * Two log files will get generated for two different packages
 * The log will get printed on the CONSOLE as well
 * Use of custom log file appender for the 2nd log file instead of the default one. Custom appender will add the time stamp with the log file
  
## Steps to Integrate property file based Log4J


 * Create a simple java project with **src/main/java, src/main/resources** as the source directory. Once project is created, you can add source directory from the below screen (Right click on project -> properties)  
<img src="https://cloud.githubusercontent.com/assets/11231867/7747899/da6fa93a-ffdc-11e4-9993-8a0ca0843577.png"/>  
 * Convert the project into maven project (Right click on the project -> Configure -> Convert to Maven project)
 * Add the following dependancies in your pom.xml for log4J integration
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;commons-logging&lt;/groupId&gt;
			&lt;artifactId&gt;commons-logging&lt;/artifactId&gt;
			&lt;version&gt;1.1&lt;/version&gt;
	    &lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;log4j&lt;/groupId&gt;
			&lt;artifactId&gt;log4j&lt;/artifactId&gt;
			&lt;version&gt;1.2.14&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
&lt;/project&gt;

</code></pre>


 * Create 4 files as shown below
SL No | File Name | Purpose
:---: | --- | ---
1 | **log4j.properties** | log4J configuration is defined here
2 | **Log4JIntegration.java** | Contains main() method of the class. This class belongs to com.ashish.log4jIntegration. For our testing we have enabled TRACE level for this class
3 | **AnotherClass.java** | This class belongs to com.ashish.anotherpackage. For our testing we have enabled FATAL level for this class
4 | **CustomLog4JAppender.java** | This is a custom log4j appender. This class creates new log file by appending time stamp in every execution. This custom log4J appender has been used for the logging from **AnotherClass** class

<img src="https://cloud.githubusercontent.com/assets/11231867/7747961/aa7f830c-ffdd-11e4-98c5-bf3cf17eee3a.png"/>
