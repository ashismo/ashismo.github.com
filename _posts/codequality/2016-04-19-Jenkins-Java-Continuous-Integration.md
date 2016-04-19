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
* 
## Important Terminologies

SL NO | Terminology | Description
:---:|:---|:---
1 | Pipeline | Pipeline refers to each promotional stage (e.g. development/stage/production environment) of an application
2 | Continuos Integration | It refers to the modified code getting added into the pipeline continuously.
3 | Continuous Delivery | It refers to the logical step to ship the production ready code
4 | Continous Deployment | Production ready code gets deployed at this stage automatically.
