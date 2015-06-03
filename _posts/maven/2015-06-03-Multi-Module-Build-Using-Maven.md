---
layout: post
category : java-build
tags : [Build Tutorial]
weight: 30
---
{% include JB/setup %}

## Introduction

In real life maven projects, most of the cases you will see multi modules build done by Maven. In this example, I have created one child web project (ChildWebProject), one java project (ChildJavaProject) and a parent project (ParentMavenProject). Parent project will include the web project which will include the jar (ChildJavaProject.jar) of the java project.
