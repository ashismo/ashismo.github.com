---
layout: post
category : java-Code Quality Analyzer
tags : [Code Quality Tutorial]
weight: 113
---
{% include JB/setup %}

## Introduction

SonarQube is very popular and powerful tool for static code analysis. It supports many languages like Java, C#, JavaScript, PL/SQL and many more. By default SonarQube provides lots of rules to analyze your code. However, sometimes you might need to write your own rule as per your need. This blog covers how to write the custom rules and package them as sonar plugin.

Suppose, the lenth of variable name less than 4 characters does not follow the coding guideline for your company. Then you might need to write custom rules to achieve this. Below example shows how to achieve this.  
