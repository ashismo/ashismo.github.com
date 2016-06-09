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


## Requeired Software


 * JDK 1.8
 * Eclipse for J2EE
 * Maven 3.x or above
 * SonarQube 5.4 or above
 * Sonar-runner-dist 2.4
  
## Stepts to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/sonar/custom-sonar-java-plugin.zip" target="_blank">custom-sonar-java-plugin</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/sonar/custom-sonar-java-plugin" target="_blank">custom-sonar-java-plugin</a>
	</span>
</div>

* Create a simple maven project with the following files (described below)
SL No | Class/File Name | Description
:---: | --- | ---
1 | pom.xml | Required dependencies are added in this file. The packaging type of the plugin is **sonar-plugin**. Sonar plugin version is 3.13.1 in this case.
2 | **com.ashish.custom.sonar.java.plugin.CustomJavaRulesEntry** | This class is the entry point for the SONAR plugin. This class is extended from org.sonar.api.SonarPlugin class. This class includes **server extension** which gets instanciated during sonarqube startup and **batch extensions** which gets instantiated during the code analysis.
3 | **com.ashish.custom.sonar.java.plugin.CustomRulesDefinition** | This class is a **Server extension** which gets instanciated at the time of sonarqube startup. The repository name and supported language name is mentioned in this class
4 | **com.ashish.custom.sonar.java.plugin.CustomJavaFileCheckRegistrar** | This class is the **batch extension** which gets instanciated during the code analysis. This class registers all custom rule classes.
5 | **com.ashish.custom.sonar.java.plugin.RulesList** | This class lists all custom rules and provides the list to the **CustomJavaFileCheckRegistrar** class to register them with sonarqube
6 | **com.ashish.custom.sonar.java.rules.AvoidSmallerLengthVariableNameRule** | This is the sample custom rule that I have implemented in this example i.e. the lenth of the variable name should be more than 4 characters long.


**pom.xml**
