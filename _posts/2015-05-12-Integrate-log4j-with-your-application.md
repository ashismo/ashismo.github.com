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
1 | OFF | Turn off the log
2 | FATAL | Severe errors that cause premature termination. Expect these to be immediately visible on a status console
3 | ERROR | Other runtime errors or unexpected conditions. Expect these to be immediately visible on a status console.
4 | WARN | Use of deprecated APIs, poor use of API, 'almost' errors, other runtime situations that are undesirable or unexpected, but not necessarily "wrong". Expect these to be immediately visible on a status console
5 | INFO | Interesting runtime events (startup/shutdown). Expect these to be immediately visible on a console, so be conservative and keep to a minimum.
6 | DEBUG | Detailed information on the flow through the system. Expect these to be written to logs only.
7 | TRACE | Most detailed information. Expect these to be written to logs only. Since version 1.2.12

## Objectives


 * Log file path and it's properties (i.e. max log file size, max backup index etc) to be defined
 * Two log files will get generated for two different packages
 * The log will get printed on the CONSOLE as well
 * Use of custom log file appender for the 2nd log file instead of the default one. Custom appender will add the time stamp with the log file
  
 
