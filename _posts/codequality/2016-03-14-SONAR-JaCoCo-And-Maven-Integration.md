---
layout: post
category : java-Code Quality Analyzer
tags : [Code Quality Tutorial]
weight: 125
---
{% include JB/setup %}

## Introduction

This blog describe how to integrate SONAR with maven build. As a result, once a maven build is complete, the code quality and code coverage will be visible in the SONAR dashboard.

## Steps to configure SONAR with Maven

Below are the steps to integrate SONAR with maven build


  * Install SONAR in your machine
  * Add configuration in maven settings.xml
  * Add configuration in project pom.xml
  * Maven build with sonar:sonar option
  * Check your SONAR dashboard
 

#### Install Sonar
Install SONAR in your machine and run SONAR server. Make sure http://localhost:9000 is accessible. Follow my another [blog](/java-code%20quality%20analyzer/2015/05/12/SONAR-the-Java-Code-Analyzer){:target="_blank"} to install and run SONAR in your machine. Please note that the mentioned client configuration in [this blog](/java-code%20quality%20analyzer/2015/05/12/SONAR-the-Java-Code-Analyzer){:target="_blank"} can be ignored.

#### Add configuration in maven's setting.xml

Locate your maven's settings.xml file and add the following configuration under <profiles> tag

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;profile&gt;
       &lt;id&gt;sonar&lt;/id&gt;
       &lt;activation&gt;
            &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
       &lt;/activation&gt;
       &lt;properties&gt;
           &lt;sonar.host.url&gt;
                http://localhost:9000
           &lt;/sonar.host.url&gt;
       &lt;/properties&gt;
&lt;/profile&gt;
</code></pre>

#### Add configuration in project pom.xml
Open the pom.xml file of your project and add the following properties to indicate your source and test folders

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;properties&gt;
	&lt;sonar.sources&gt;src/main&lt;/sonar.sources&gt;
        &lt;sonar.tests&gt;src/test&lt;/sonar.tests&gt;
&lt;/properties&gt;
</code></pre>

#### Maven build with sonar:sonar option
Add the following goal to run your build

```
clean install sonar:sonar
```

#### Check your SONAR dashboard

Once the maven build is successful, the project will get visible in the SONAR dashboard as mentioned in my other [blog](/java-code%20quality%20analyzer/2015/05/12/SONAR-the-Java-Code-Analyzer){:target="_blank"}.
The URL to see SONAR dashboard is : http://localhost:9000/


## Steps to integrate JaCoCo with SONAR

Below are the steps to integrate JaCoCo with SONAR


  * Add JaCoCo configuration in project pom.xml
  * Maven build with sonar:sonar option
  * Check your SONAR dashboard
 
#### Add JaCoCo configuration in project pom.xml
Open the pom.xml file of your project and add the following properties to set some JaCoCo properties 

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;properties&gt;
	&lt;sonar.sources&gt;src/main&lt;/sonar.sources&gt;
	&lt;sonar.tests&gt;src/test&lt;/sonar.tests&gt;
	&lt;!-- Below property indicates the pattern of the test suite --&gt;
	&lt;runSuite&gt;**/*Suite.class&lt;/runSuite&gt;
	&lt;!-- Sonar-JaCoCo properties --&gt;
	&lt;sonar.java.coveragePlugin&gt;jacoco&lt;/sonar.java.coveragePlugin&gt;
	&lt;sonar.dynamicAnalysis&gt;reuseReports&lt;/sonar.dynamicAnalysis&gt;
	&lt;sonar.jacoco.reportPath&gt;${project.basedir}/../target/jacoco.exec&lt;/sonar.jacoco.reportPath&gt;
	&lt;sonar.language&gt;java&lt;/sonar.language&gt;
&lt;/properties&gt;
</code></pre>

Also add the following plugins to execute the test suite and execute the JaCoCo plugin during the maven build. Please go through the inline comments for better understanding.

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;!-- Below plugin ensures the execution of test cases during maven build--&gt;
&lt;plugin&gt;
	&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
	&lt;artifactId&gt;maven-surefire-plugin&lt;/artifactId&gt;
	&lt;configuration&gt;
		&lt;includes&gt;
			&lt;include&gt;${runSuite}&lt;/include&gt;
		&lt;/includes&gt;
	&lt;/configuration&gt;
&lt;/plugin&gt;

&lt;!-- Sonar-JaCoCo integration plugin --&gt;
&lt;plugin&gt;
	&lt;groupId&gt;org.jacoco&lt;/groupId&gt;
	&lt;artifactId&gt;jacoco-maven-plugin&lt;/artifactId&gt;
	&lt;version&gt;0.7.6.201602180812&lt;/version&gt;
	&lt;configuration&gt;
		&lt;destFile&gt;${sonar.jacoco.reportPath}&lt;/destFile&gt;
		&lt;append&gt;true&lt;/append&gt;
	&lt;/configuration&gt;
	&lt;executions&gt;
		&lt;execution&gt;
			&lt;id&gt;agent&lt;/id&gt;
			&lt;goals&gt;
				&lt;goal&gt;prepare-agent&lt;/goal&gt;
			&lt;/goals&gt;
		&lt;/execution&gt;
	&lt;/executions&gt;
&lt;/plugin&gt;
</code></pre>

#### Maven build with sonar:sonar option
Add the same goal (as mentioned above) to generate code coverage report

```
clean install sonar:sonar
```

#### Check your SONAR dashboard for code coverage report

The code coverage report will look like below

<img src="https://cloud.githubusercontent.com/assets/11231867/13774992/0b638cce-eac8-11e5-9acf-3e236ececaf4.png"/>
