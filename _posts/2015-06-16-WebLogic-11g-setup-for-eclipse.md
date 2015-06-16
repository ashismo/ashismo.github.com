---
layout: post
category : java-Misc
tags : [Weblogic11g]
weight: 99
---

## Introduction

We are quite familiar with the tomcat server setup in eclipse for our development and deployment. By default eclipse provides the adapter for tomcat server. In this tutorial I am going to show how to use weblogic 11g in eclipse in Windows platform.

## Steps to setup


 * Download the zip distribution from [this url](http://www.oracle.com/technetwork/middleware/ias/downloads/wls-main-097127.html){:target="_blank"}.  
Extract the zip into some folder which is goint to be considered as your **Weblogic Home**
<img src="https://cloud.githubusercontent.com/assets/11231867/8182282/91de0fe4-144b-11e5-8108-65a72f7147a9.png"/>
 * Go to the folder -> Press Shift + Right click -> Open Command Window Here -> set JAVA_HOME to **JDK1.6 path** because WLS 11g supports JDK1.6 -> execute **configure.cmd**
