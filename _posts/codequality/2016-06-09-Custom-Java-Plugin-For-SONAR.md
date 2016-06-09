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


**pom.xml** : Packaging type is **sonar-plugin**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
	&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

	&lt;groupId&gt;com.ashish.sonar.custom.java&lt;/groupId&gt;
	&lt;artifactId&gt;java-custom-rules&lt;/artifactId&gt;
	&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
	&lt;packaging&gt;sonar-plugin&lt;/packaging&gt;

	&lt;properties&gt;
		&lt;java.plugin.version&gt;3.13.1&lt;/java.plugin.version&gt;
	&lt;/properties&gt;

	&lt;name&gt;Java Custom Rules&lt;/name&gt;
	&lt;description&gt;Java Custom Rules&lt;/description&gt;

	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.codehaus.sonar&lt;/groupId&gt;
			&lt;artifactId&gt;sonar-plugin-api&lt;/artifactId&gt;
			&lt;version&gt;4.5.6&lt;/version&gt;
			&lt;scope&gt;provided&lt;/scope&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.sonarsource.java&lt;/groupId&gt;
			&lt;artifactId&gt;sonar-java-plugin&lt;/artifactId&gt;
			&lt;type&gt;sonar-plugin&lt;/type&gt;
			&lt;version&gt;${java.plugin.version}&lt;/version&gt;
			&lt;scope&gt;provided&lt;/scope&gt;
		&lt;/dependency&gt;
		
		&lt;dependency&gt;
			&lt;groupId&gt;org.sonarsource.java&lt;/groupId&gt;
			&lt;artifactId&gt;java-frontend&lt;/artifactId&gt;
			&lt;version&gt;${java.plugin.version}&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.sonarsource.sslr-squid-bridge&lt;/groupId&gt;
			&lt;artifactId&gt;sslr-squid-bridge&lt;/artifactId&gt;
			&lt;version&gt;2.6.1&lt;/version&gt;
			&lt;exclusions&gt;
				&lt;exclusion&gt;
					&lt;groupId&gt;org.codehaus.sonar.sslr&lt;/groupId&gt;
					&lt;artifactId&gt;sslr-core&lt;/artifactId&gt;
				&lt;/exclusion&gt;
			&lt;/exclusions&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.sonarsource.java&lt;/groupId&gt;
			&lt;artifactId&gt;java-checks-testkit&lt;/artifactId&gt;
			&lt;version&gt;${java.plugin.version}&lt;/version&gt;
			&lt;scope&gt;test&lt;/scope&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.codehaus.sonar.sslr&lt;/groupId&gt;
			&lt;artifactId&gt;sslr-testing-harness&lt;/artifactId&gt;
			&lt;version&gt;1.19.2&lt;/version&gt;
			&lt;scope&gt;test&lt;/scope&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;junit&lt;/groupId&gt;
			&lt;artifactId&gt;junit&lt;/artifactId&gt;
			&lt;version&gt;4.11&lt;/version&gt;
			&lt;scope&gt;test&lt;/scope&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.easytesting&lt;/groupId&gt;
			&lt;artifactId&gt;fest-assert&lt;/artifactId&gt;
			&lt;version&gt;1.4&lt;/version&gt;
			&lt;scope&gt;test&lt;/scope&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;ch.qos.logback&lt;/groupId&gt;
			&lt;artifactId&gt;logback-classic&lt;/artifactId&gt;
			&lt;version&gt;0.9.30&lt;/version&gt;
			&lt;scope&gt;test&lt;/scope&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;

	&lt;build&gt;
		&lt;plugins&gt;
			&lt;plugin&gt;
				&lt;groupId&gt;org.sonarsource.sonar-packaging-maven-plugin&lt;/groupId&gt;
				&lt;artifactId&gt;sonar-packaging-maven-plugin&lt;/artifactId&gt;
				&lt;version&gt;1.15&lt;/version&gt;
				&lt;extensions&gt;true&lt;/extensions&gt;
				&lt;configuration&gt;
					&lt;pluginClass&gt;com.ashish.custom.sonar.java.plugin.CustomJavaRulesEntry&lt;/pluginClass&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;

			&lt;plugin&gt;
				&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
				&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
				&lt;version&gt;3.1&lt;/version&gt;
				&lt;configuration&gt;
					&lt;source&gt;1.7&lt;/source&gt;
					&lt;target&gt;1.7&lt;/target&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;

			&lt;plugin&gt;
				&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
				&lt;artifactId&gt;maven-dependency-plugin&lt;/artifactId&gt;
				&lt;version&gt;2.10&lt;/version&gt;
				&lt;executions&gt;
					&lt;execution&gt;
						&lt;id&gt;copy&lt;/id&gt;
						&lt;phase&gt;test-compile&lt;/phase&gt;
						&lt;goals&gt;
							&lt;goal&gt;copy&lt;/goal&gt;
						&lt;/goals&gt;
						&lt;configuration&gt;
							&lt;artifactItems&gt;
								&lt;artifactItem&gt;
									&lt;groupId&gt;org.apache.commons&lt;/groupId&gt;
									&lt;artifactId&gt;commons-collections4&lt;/artifactId&gt;
									&lt;version&gt;4.0&lt;/version&gt;
									&lt;type&gt;jar&lt;/type&gt;
								&lt;/artifactItem&gt;
							&lt;/artifactItems&gt;
							&lt;outputDirectory&gt;${project.build.directory}/test-jars&lt;/outputDirectory&gt;
						&lt;/configuration&gt;
					&lt;/execution&gt;
				&lt;/executions&gt;
			&lt;/plugin&gt;
		&lt;/plugins&gt;
	&lt;/build&gt;

&lt;/project&gt;
</code></pre>


* **com.ashish.custom.sonar.java.plugin.CustomJavaRulesEntry** : This class is the entry point for the SONAR plugin. This class is extended from org.sonar.api.SonarPlugin class. This class includes server extension which gets instanciated during sonarqube startup and batch extensions which gets instantiated during the code analysis.
 

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.custom.sonar.java.plugin;

import java.util.Arrays;
import java.util.List;

import org.sonar.api.SonarPlugin;

/*********************************
 * Entry point of the sonar plugin
 ********************************/
public class CustomJavaRulesEntry extends SonarPlugin {

  @Override
  public List getExtensions() {
    return Arrays.asList(
      // server extensions -> objects are instantiated during sonarqube startup
      CustomRulesDefinition.class,

      // batch extensions -> objects are instantiated during the code analysis
      CustomJavaFileCheckRegistrar.class);
  }
}
</code></pre>


* **com.ashish.custom.sonar.java.plugin.CustomRulesDefinition:** This class is a Server extension which gets instanciated at the time of sonarqube startup. The repository name and supported language name is mentioned in this class

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.custom.sonar.java.plugin;

import org.sonar.api.server.rule.RulesDefinition;
import org.sonar.plugins.java.Java;
import org.sonar.squidbridge.annotations.AnnotationBasedRulesDefinition;

/**
 * Declare rule metadata in server repository of rules. 
 * That allows to list the rules in the page "Rules".
 */
public class CustomRulesDefinition implements RulesDefinition {

  public static final String REPOSITORY_KEY = "customRepo";

  @Override
  public void define(Context context) {
    NewRepository repository = context.createRepository(REPOSITORY_KEY, Java.KEY);
    repository.setName("CustomRepo");

    AnnotationBasedRulesDefinition.load(repository, "java", RulesList.getChecks());
    repository.done();
  }
}	
</code></pre>


* **com.ashish.custom.sonar.java.plugin.CustomJavaFileCheckRegistrar:** This class is the batch extension which gets instanciated during the code analysis. This class registers all custom rule classes.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">
package com.ashish.custom.sonar.java.plugin;

import java.util.Arrays;

import org.sonar.plugins.java.api.CheckRegistrar;
import org.sonar.plugins.java.api.JavaCheck;

import com.ashish.custom.sonar.java.rules.AvoidSmallerLengthVariableNameRule;

/**
 * Provide the "checks" (implementations of rules) classes that are going to get executed during the source code analysis.
 *
 * This class is a batch extension by implementing the {@link org.sonar.plugins.java.api.CheckRegistrar} interface.
 */
public class CustomJavaFileCheckRegistrar implements CheckRegistrar {

  /**
   * Register the classes that will be used to instantiate checks during analysis.
   */
  @Override
  public void register(RegistrarContext registrarContext) {
    // Call to registerClassesForRepository to associate the classes with the correct repository key
    registrarContext.registerClassesForRepository(CustomRulesDefinition.REPOSITORY_KEY, Arrays.asList(checkClasses()), Arrays.asList(testCheckClasses()));
  }

  /**
   * Lists all the checks provided by the plugin
   */
  public static Class<? extends JavaCheck>[] checkClasses() {
    return new Class[] { // List of rules to be included here
      AvoidSmallerLengthVariableNameRule.class
    };
  }

  /**
   * Lists all the test checks provided by the plugin
   */
  public static Class<? extends JavaCheck>[] testCheckClasses() {
    return new Class[] {};
  }
}
</code></pre>
