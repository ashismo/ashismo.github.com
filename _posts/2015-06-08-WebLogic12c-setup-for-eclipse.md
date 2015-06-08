---
layout: post
category : java-Misc
tags : [Weblogic12c]
weight: 100
---

## Introduction

We are quite familiar with the tomcat server setup in eclipse for our development and deployment. By default eclipse provides the adapter for tomcat server. In this tutorial I am going to show how to use weblogic 12c in eclipse in Windows platform.

## Steps to setup


 * Download the zip distribution from [this url](http://www.oracle.com/technetwork/middleware/weblogic/downloads/wls-main-097127.html){:target="_blank"}.  
Extract the zip into some folder which is goint to be considered as your **Weblogic Home**
<img src="https://cloud.githubusercontent.com/assets/11231867/8035478/b6af7184-0e0e-11e5-9d3c-bc9e9d4b27d4.png"/>
 * Go to the folder -> Press Shift + Right click -> Open Command Window Here -> set JAVA_HOME -> execute **configure.cmd**
 * Once setup is completed then it will ask you to create a domain. Press Y -> Provice user name and password (user name and password should not be same). Default domain location will be **%WEBLOGIC_HOME%\user_projects\domains\mydomain**. Weblogic 12c server is ready to use in eclipse.
 * Open eclipse. Go to server console. Right click -> New -> Server -> Select Oracle 12c adapter. (If the adapter is not available then "download additional server adapter" as shown in the below image.
<img src="https://cloud.githubusercontent.com/assets/11231867/8036125/59ab68da-0e13-11e5-8e3e-837c7287a7dd.png"/>
 * In the next page specify the weblogic server home and java home (must be JDK1.7 and above)
<img src="https://cloud.githubusercontent.com/assets/11231867/8036165/bbf0b414-0e13-11e5-8f82-a76c8a8287ea.png"/>
 * In the next page specify domain that you have just created
<img src="https://cloud.githubusercontent.com/assets/11231867/8036171/c39f7786-0e13-11e5-99f3-c6ed2104d840.png"/>
 * Follow screens it till the end. Start the server if it is not automatically started. Then hit [http://localhost:7001/console](http://localhost:7001/console){:target="_blank"} URL to open the admin console.
 * Create a simple web project with index.jsp as welcome file and right click on the project and deploy in weblogic. Hit the **http://localhost:7001/your_context_root** URL to test your deployment.
