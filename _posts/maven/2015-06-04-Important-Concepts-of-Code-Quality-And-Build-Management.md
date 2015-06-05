---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 70
---

## What is Java Code Analyzer?

Analyzing java source code is an important aspest of good coding. It helps developer to findout the unused variables, dead code, deviation from the coding standard, possible bugs and many more. There are many open source Java code analyzers are available in the market. Few of them are **PMD, SONAR, Find Bugs, QJ-Pro, JDiff, CheckStyle** etc. **PMD** and **SONAR** are very popular in the industry.

## What is PMD?

PMD is a static rule set based Java source code analyzer that identifies the potential problems like:


 * Possible bugs - Empty try/catch/finally/switch blocks
 * Dead code - Unused variables
 * Duplicate code
 * Empty if/while statements

PMD report shows the indicative issues. It is upto the developer to decide whether the issue to be fixed. However, it is advisable that the developpers should fix priority 1 and 2 violations.

## What is SONAR?

SONAR (Currently known as SonarQube) is an open source platform to inspect code quality. It identifies the problems as mentioned in the below image.

<img src="https://cloud.githubusercontent.com/assets/11231867/7565993/0190cab2-f812-11e4-8412-8acbc253d291.png"/>

Sonar report shows the indicative issues. It is upto the developer to decide whether the issue to be fixed. However, it is advisable that the developpers should fix priority 1 and 2 violations

## What is Continuous Integration (CI)?

A complementary practice to CI (Continuous Integration) is that before submitting work, each programmer must do a complete build and run (and pass) all unit tests. Integration tests are usually run automatically on a CI server when it detects a new commit. All programmers should start the day by updating the project from the repository.  
**Jenkins, Hudson** are the CI tools for Java, which runs in a servlet container in Tomcat, Glassfish etc. **Hudson** was started by Sun Microsystem and later on it was rebranded to **Jenkins** by Oracle. However, **Hudson** is currently maintained by Eclipse Foundation.
