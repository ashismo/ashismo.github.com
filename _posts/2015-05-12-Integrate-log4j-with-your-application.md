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
1 | **log4j.properties** | log4J configuration is defined here. This file should be created inside **src/main/resources** folder as shown above
2 | **Log4JIntegration.java** | Contains main() method of the class. This class belongs to com.ashish.log4jIntegration. For our testing we have enabled TRACE level for this class
3 | **AnotherClass.java** | This class belongs to com.ashish.anotherpackage. For our testing we have enabled FATAL level for this class
4 | **CustomLog4JAppender.java** | This is a custom log4j appender. This class creates new log file by appending time stamp in every execution. This custom log4J appender has been used for the logging from **AnotherClass** class

<img src="https://cloud.githubusercontent.com/assets/11231867/7747961/aa7f830c-ffdd-11e4-98c5-bf3cf17eee3a.png"/>

Content of each file is given below. Please go through the inline comments with the code snippets


 * **log4j.properties: ** log4j configuration is done here. Please go through the inline comments to understand the configuration

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
########################################################
# OBJECTIVES
# 1. Log file path and it's properties 
#	 (i.e. max log file size, max backup index etc) to be defined
# 2. Two log files will get generated for two different packages
# 3. The log will get printed on the CONSOLE as well
# 4. Use of custom log file appender for the 2nd log file 
#    instead of the default one. Custom appender will add 
#	 the time stamp with the log file
########################################################


#****************************************************
# Root logger option. To change log level, change here
# Log level is TRACE. Log will be printed on CONSOLE and 
# log file as configured in log4j.appender.logfile
#****************************************************
log4j.rootLogger=TRACE, CONSOLE, logfile

#****************************************************
# Package logger option
# Log level is FATAL. Log will be printed on CONSOLE and 
# log file as configured in log4j.appender.logfile
#****************************************************
log4j.logger.com.ashish.anotherpackage=FATAL, another


########################################################
# Redirect log messages to CONSOLE
########################################################
log4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender
log4j.appender.CONSOLE.Target=System.out
log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout
######
#Below configuration append "2015-05-21 16:06:42 <LEVEL>  Log4JIntegration:16" before the message
######
log4j.appender.CONSOLE.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n
 

########################################################
# Redirect log messages to a log file, support file rolling.
########################################################
log4j.appender.logfile=org.apache.log4j.RollingFileAppender
#log4j.appender.logfile=com.ashish.customlog4j.CustomLog4JAppender
log4j.appender.logfile.File=D:\\logs\\output.log
log4j.appender.logfile.Append=true
log4j.appender.logfile.MaxFileSize=2MB
log4j.appender.logfile.MaxBackupIndex=10
log4j.appender.logfile.layout=org.apache.log4j.PatternLayout
######
#Below configuration append "2015-05-21 16:06:42 <LEVEL>  Log4JIntegration:16" before the message
######
log4j.appender.logfile.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n




########################################################
# Another Log file for another package
########################################################

log4j.appender.another=com.ashish.customlog4j.CustomLog4JAppender
log4j.appender.another.File=D:\\logs\\output_another.log
log4j.appender.another.layout=org.apache.log4j.PatternLayout
######
#Below configuration append "2015-05-21 16:06:42 <LEVEL>  Log4JIntegration:16" before the message
######
log4j.appender.another.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n

</code></pre>
  
  
 * **Log4JIntegration: ** Log level is set to **TRACE** so this class will print all logs.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.log4jIntegration;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.log4j.LogManager;
import com.ashish.anotherpackage.AnotherClass;

public class Log4JIntegration {
	// org.apache.commons.logging.Log and org.apache.log4j.spi.LoggerFactory comes from commons-logging.jar
	private static final Log LOG = LogFactory.getLog(Log4JIntegration.class);
	public static void main(String args[]) {
		// Want to print this below line always. So LOG.fatal() is used
		LOG.fatal("Log level; for com.ashish.log4jIntegration package is : " + LogManager.getRootLogger().getLevel());
		LOG.trace("TRACE: Rank 6");
		LOG.debug("DEBUG: Rank 5");
		LOG.info("INFO: Rank 4");
		LOG.warn("WARN: Rank 3");
		LOG.error("ERROR: Rank 2");
		LOG.fatal("FATAL: Rank 1");
		
		AnotherClass.anotherMethod();
	}
}
</code></pre>


 * **AnotherClass: ** Log level is set to **FATAL** so this class will print only LOG.fatal() and ignores other logs

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.anotherpackage;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.log4j.LogManager;

public class AnotherClass {
	// org.apache.commons.logging.Log and org.apache.log4j.spi.LoggerFactory comes from commons-logging.jar
	private static final Log LOG = LogFactory.getLog(AnotherClass.class);
	public static void anotherMethod() {
		LOG.fatal("Log level; for com.ashish.anotherpackage package is : " + LogManager.getLogger(AnotherClass.class).getEffectiveLevel());
		LOG.trace("TRACE: Rank 6");
		LOG.debug("DEBUG: Rank 5");
		LOG.info("INFO: Rank 4");
		LOG.warn("WARN: Rank 3");
		LOG.error("ERROR: Rank 2");
		LOG.fatal("FATAL: Rank 1");
	}
}
</code></pre>


 * **CustomLog4JAppender: ** In every execution this class creates new file by appending timestamp with the log file name.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.customlog4j;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Layout;
import org.apache.log4j.RollingFileAppender;
import org.apache.log4j.spi.ErrorCode;



public class CustomLog4JAppender extends RollingFileAppender  {
	public CustomLog4JAppender() {
	}
	
	public CustomLog4JAppender(Layout layout, String filename,
	        boolean append) throws IOException {
	    super(layout, filename, append);
	}

	public CustomLog4JAppender(Layout layout, String filename)
	        throws IOException {
	    super(layout, filename);
	}
	
	public void activateOptions() {
		if (fileName != null) {
		    try {
		    	fileName = getNewLogFileName();
		        setFile(fileName, fileAppend, bufferedIO, bufferSize);
		    } catch (Exception e) {
		        errorHandler.error("Error while activating log options", e,
		                ErrorCode.FILE_OPEN_FAILURE);
		    }
		}
		}

		private String getNewLogFileName() {
			DateFormat df = new SimpleDateFormat("dd-MMM-yyyy-HH-mm-ss");
			
			if (fileName != null) {
			    final String DOT = ".";
			    final String HIPHEN = "-";
			    final File currentLogFile = new File(fileName);
			    final String fileName = currentLogFile.getName();
			    String newLogFileName = fileName;
			    
			    final int dotIndex = fileName.indexOf(DOT);
			    if (dotIndex != -1) {
			        // the file name has an extension. so, insert the time stamp
			        // between the file name and the extension
			        newLogFileName = fileName.substring(0, dotIndex)  + HIPHEN +
			                   df.format(new Date())  + DOT +
			                  fileName.substring(dotIndex+1);
			    } else {
			        // the file name has no extension. So, just append the timestamp
			        // at the end.
			        newLogFileName = fileName + HIPHEN  + System.currentTimeMillis();
			    }
			    return currentLogFile.getParent() + File.separator + newLogFileName;
			}
			return null;
		}
}
</code></pre>

#### Output of this project

 * Console output will look like as shown below. Two classes, **Log4JIntegration** and **AnotherClass** have same log messages but log level is configured differently (**TRACE** and **FATAL** respectively) for two different classes. Hence the **Log4JIntegration** class is printing all log messages and **AnotherClass** is printing only one message.  
 
<img src="https://cloud.githubusercontent.com/assets/11231867/7748321/11b61c22-ffe1-11e4-9fe2-a428dfdba058.png"/>  
 * Two log files got created. One file name is without time stamp (e.g.: output.log) and another log file name is with time stamp appended (e.g. output_another-21-May-2015-16-39-59.log) in it and have multiple copies. Log files will get created under D:\logs\ folder as configured in the **log4j.properties** file. The log from **Log4JIntegration** class goes to **output.log** file and the logs from **AnotherClass** class goes to **output_another-21-May-2015-16-39-59.log** file. Also note that both the mentioned classes prints the log message in CONSOLE.
 
<img src="https://cloud.githubusercontent.com/assets/11231867/7748453/67786ac4-ffe2-11e4-99eb-faaf6f652b1f.png"/>
 
