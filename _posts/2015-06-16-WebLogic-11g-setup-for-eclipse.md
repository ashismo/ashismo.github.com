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
 * Lets say I have extracted my zip file into **D:\ashish\softwares\wls1036_dev** folder so open command prompt (Go to the folder -> Press Shift + Right click -> Open Command Window Here) -> set the following 
   * set JAVA_HOME=C:\Progra~1\Java\jdk1.7.0_65
   * set PATH=%JAVA_HOME%\bin;%PATH%
   * set MW_HOME=D:\ashish\softwares\wls1036_dev
   * execute **configure.cmd**
 * Execute the following command: **%MW_HOME%\wlserver\server\bin\setWLSEnv.cmd** to setup WLS environment in the current shell. 
 * Create a folder called **mydomain** inside MW_HOME and cd mydomain folder. Then execute the following command: **%JAVA_HOME%\bin\java.exe -Xmx1024m -XX:MaxPermSize=128m weblogic.Server**. This will create weblogic domain inside **%MW_HOME%\mydomain**. You need to set user name and password. Once done, automatically the server will startup.
 * Once done hit the following URL from browser **http://localhost:7001/console** to open the admin console of 11g
