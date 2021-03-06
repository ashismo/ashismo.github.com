---
layout: post
category : java-Code Quality Analyzer
tags : [Continuous Integration]
weight: 130
---
{% include JB/setup %}

## Introduction

Jenkins is an open source continuous integration tool written in Java. The project was formerly known as Hudson. Jenkins is a java based tool so it runs into server/web container like Apache Tomcat. It supports Software Configuration Management(SCM) tools including AccuRev, CVS, Subversion, Git, Mercurial, Perforce, Clearcase and RTC.  


* Jenkins works with other tools (Maven, Sonar, JaCoCo, SVN, Selenium) to continuously integrate and deliver code.
* Code builds are performed on a triggering events.
* Jenkins uses pipeline to break down into smaller manageable piece which are configurable by the build manager.


## Important Terminologies

SL NO | Terminology | Description
:---:|:---|:---
1 | Pipeline | Pipeline refers to each promotional stage (e.g. development/stage/production environment) of an application
2 | Continuos Integration | It refers to the modified code getting added into the pipeline continuously.
3 | Continuous Delivery | It refers to the logical step to ship the production ready code
4 | Continous Deployment | Production ready code gets deployed at this stage automatically.


## Jenkins setup


* Install Jenkins from sources available in the internet. You can download the war file and place it in webapps in tomcat and hit [http://localhost:8080/jenkins/](http://localhost:8080/jenkins/)
* Follow the below steps as shown in the image to setup a maven project from SVN.
<img src="https://cloud.githubusercontent.com/assets/11231867/14704213/381e7b5e-07d1-11e6-82d9-61332b26efc8.png"/> <br/><br/>
![jenkinssetup1](https://cloud.githubusercontent.com/assets/11231867/14704639/551fb3f6-07d3-11e6-8f4c-6532bdf52178.png)    <br/><br/>
* The Jenkins dashboard looks like below  
![jenkinsdashboard](https://cloud.githubusercontent.com/assets/11231867/14704885/81faa2d6-07d4-11e6-8693-b06ecbb25f1a.png)
