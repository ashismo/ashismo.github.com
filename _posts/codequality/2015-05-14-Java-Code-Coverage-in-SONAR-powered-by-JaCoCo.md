---
layout: post
category : java-code quality analyzer
tags : [Code Quality Tutorial]
---
{% include JB/setup %}

## Introduction

In my another [blog](/java-code%20quality%20analyzer/2015/05/12/SONAR-the-Java-Code-Analyzer/), I have covered how to test code quality using SONAR. Analyzing the code coverage is another 
important aspect in the industry. To achieve the code coverage in SONAR dashboard we need to integrate JaCoCo plugin. 
In this blog I am going to discuss about the code coverage by JaCoCo and display the report in SONAR.

## Generate Code Coverage Report and Integrate with SONAR

Below are the high level steps to accomplish our goal


* Create a Java maven project. 
* Write a class called Calculator which has add, substract, modify and delete methods.
* Write a junit Test class, called CalculatorTest for testing the above mentioned methods.
* Write a pom.xml to build and the project and generate the code coverage report.
* Integrate the report with SONAR
 
#### Create a Java Maven Project


* Create a Java project in eclipse and convert into Maven project. For more details, follow my [another blog](/java-build/2015/05/09/Setting%20up%20a%20Maven%20Build/){:target="_blank"}
* In my example, **src/main/java** and **src/test/java** are the src folders for java and junit respectively in eclipse as shown below
<img src="https://cloud.githubusercontent.com/assets/11231867/7649932/285fb0ea-fb0f-11e4-84c9-1c63e5ca2220.png" style="border: 1px solid black"/>

* Create Calculator.java and CalculatorTest.java as shown below
<img src="https://cloud.githubusercontent.com/assets/11231867/7649997/d0065e5c-fb0f-11e4-825d-35b0c77bac47.png"/>

* The content of the Calculator.java is 

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.calc;

public class Calculator {
	public static int add(int a, int b) {
		return (a + b);
	}
	
	public static int substract(int a, int b) {
		return (a - b);
	}
	
	public static int multiply (int a, int b) {
		return (a * b);
	}
	
	// This method has a if condition. Your test case should cover both 
	// if and else block to achieve 100% coverage in this method
	public static int divide(int a, int b) {
		if(b > 0) {
			return (a/b);
		} else {
			return -1;
		}
	}
}
</code></pre>

* The content of the CalculatorTest.java is

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

package com.ashish.calcTest;

import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;

import com.ashish.calc.Calculator;

public class CalculatorTest {
	@Before
	public void setUp() {
		
	}
	
	@Test
	public void addTest() {
		assertTrue("Sum:-", Calculator.add(5, 5) == 10);
	}
	
	@Test
	public void substractTest() {
		assertTrue("Substract:-", Calculator.substract(5, 5) == 0);
	}
	
	@Test
	public void multiplyTest() {
		assertTrue("Multiply:-", Calculator.multiply(5, 5) == 25);
	}
	
	@Test
	public void divideTest() {
		// Below tow lines test the both if and else block of Claculator.divide() method
		// You can comment one line of the code and will see there is a change in coverage report
		assertTrue("Divide by non zero:-", Calculator.divide(5, 5) == 1);
		assertTrue("Divide by zero:-", Calculator.divide(5, 0) == -1);
	}
}
</code></pre>

* Write a pom.xml file to build the code. In the next topic we shall see what is required for JaCoCo code coverage report

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;JaCoCoCodeCoverage&lt;/groupId&gt;
	&lt;artifactId&gt;JaCoCoCodeCoverage&lt;/artifactId&gt;
	&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;

	&lt;repositories&gt;
		&lt;repository&gt;
			&lt;id&gt;maven2-repository.java.net&lt;/id&gt;
			&lt;name&gt;Java.net Repository for Maven&lt;/name&gt;
			&lt;url&gt;http://repo1.maven.org/maven2&lt;/url&gt;
			&lt;layout&gt;default&lt;/layout&gt;
		&lt;/repository&gt;
	&lt;/repositories&gt;

	&lt;build&gt;
		&lt;sourceDirectory&gt;src&lt;/sourceDirectory&gt;
		&lt;plugins&gt;
			&lt;plugin&gt;
				&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
				&lt;version&gt;3.1&lt;/version&gt;
				&lt;configuration&gt;
					&lt;source&gt;1.7&lt;/source&gt;
					&lt;target&gt;1.7&lt;/target&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;

			
		&lt;/plugins&gt;
	&lt;/build&gt;

	&lt;dependencies&gt;
		&lt;!-- Junit dependancy --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;junit&lt;/groupId&gt;
			&lt;artifactId&gt;junit&lt;/artifactId&gt;
			&lt;version&gt;4.8.1&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
&lt;/project&gt;

</code></pre>

So you are done with the project setup.

#### Configure JaCoCo plugin for code coverage


* Add below JaCoCo plugin in your pom.xml file. The complete pom.xml for my project look [like this](https://github.com/ashismo/repositoryForMyBlog/blob/master/JaCoCoCodeCoveragePOM.xml){:target="_blank"}

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

&lt;!-- Configuring The JaCoCo Maven Plugin --&gt;
&lt;plugin&gt;
	&lt;groupId&gt;org.jacoco&lt;/groupId&gt;
	&lt;artifactId&gt;jacoco-maven-plugin&lt;/artifactId&gt;
	&lt;version&gt;0.6.3.201306030806&lt;/version&gt;
	&lt;executions&gt;
		&lt;!-- Prepares the property pointing to the JaCoCo runtime agent which 
			is passed as VM argument when Maven the Surefire plugin is executed. --&gt;
		&lt;execution&gt;
			&lt;id&gt;pre-unit-test&lt;/id&gt;
			&lt;goals&gt;
				&lt;goal&gt;prepare-agent&lt;/goal&gt;
			&lt;/goals&gt;
			&lt;configuration&gt;
				&lt;!-- Sets the path to the file which contains the execution data. --&gt;
				&lt;destFile&gt;${project.build.directory}/coverage-reports/jacoco-ut.exec&lt;/destFile&gt;
				&lt;!-- Sets the name of the property containing the settings for JaCoCo 
					runtime agent. --&gt;
				&lt;propertyName&gt;surefireArgLine&lt;/propertyName&gt;
			&lt;/configuration&gt;
		&lt;/execution&gt;
		&lt;!-- Ensures that the code coverage report for unit tests is created 
			after unit tests have been run. --&gt;
		&lt;execution&gt;
			&lt;id&gt;post-unit-test&lt;/id&gt;
			&lt;phase&gt;test&lt;/phase&gt;
			&lt;goals&gt;
				&lt;goal&gt;report&lt;/goal&gt;
			&lt;/goals&gt;
			&lt;configuration&gt;
				&lt;!-- Sets the path to the file which contains the execution data. --&gt;
				&lt;dataFile&gt;${project.build.directory}/coverage-reports/jacoco-ut.exec&lt;/dataFile&gt;
				&lt;!-- Sets the output directory for the code coverage report. --&gt;
				&lt;outputDirectory&gt;${project.reporting.outputDirectory}/jacoco-ut&lt;/outputDirectory&gt;
			&lt;/configuration&gt;
		&lt;/execution&gt;
	&lt;/executions&gt;
&lt;/plugin&gt;
&lt;!-- Configuring The Maven Surefire Plugin --&gt;
&lt;plugin&gt;
	&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
	&lt;artifactId&gt;maven-surefire-plugin&lt;/artifactId&gt;
	&lt;version&gt;2.15&lt;/version&gt;
	&lt;configuration&gt;
		&lt;!-- Sets the VM argument line used when unit tests are run. --&gt;
		&lt;argLine&gt;${surefireArgLine}&lt;/argLine&gt;
		&lt;!-- Skips unit tests if the value of skip.unit.tests property is true --&gt;
		&lt;skipTests&gt;${skip.unit.tests}&lt;/skipTests&gt;
		&lt;!-- Excludes integration tests when unit tests are run. --&gt;
		&lt;excludes&gt;
			&lt;exclude&gt;**/IT*.java&lt;/exclude&gt;
		&lt;/excludes&gt;
	&lt;/configuration&gt;
&lt;/plugin&gt;
&lt;!-- Configuring The Maven Failsafe Plugin --&gt;
&lt;plugin&gt;
	&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
	&lt;artifactId&gt;maven-failsafe-plugin&lt;/artifactId&gt;
	&lt;version&gt;2.15&lt;/version&gt;
	&lt;executions&gt;
		&lt;!-- Ensures that both integration-test and verify goals of the Failsafe 
			Maven plugin are executed. --&gt;
		&lt;execution&gt;
			&lt;id&gt;integration-tests&lt;/id&gt;
			&lt;goals&gt;
				&lt;goal&gt;integration-test&lt;/goal&gt;
				&lt;goal&gt;verify&lt;/goal&gt;
			&lt;/goals&gt;
			&lt;configuration&gt;
				&lt;!-- Sets the VM argument line used when integration tests are run. --&gt;
				&lt;argLine&gt;${failsafeArgLine}&lt;/argLine&gt;
				&lt;!-- Skips integration tests if the value of skip.integration.tests 
					property is true --&gt;
				&lt;skipTests&gt;${skip.integration.tests}&lt;/skipTests&gt;
			&lt;/configuration&gt;
		&lt;/execution&gt;
	&lt;/executions&gt;
&lt;/plugin&gt;
			
</code></pre>

* You are done with the configuration. Now execute **mvn clean test** from the command prompt.
	* Command for unit test coverage report: **mvn clean test**
	* Command for integration test coverage report: **mvn clean verify -P integration-test**
	* Command for unit teat and integration test coverage report: **mvn clean verify -P all-tests**
<img src="https://cloud.githubusercontent.com/assets/11231867/7651112/8397a796-fb1a-11e4-9e76-5962800200ae.png"/>
* Then go to **target/site/jacoco-ut** path and see the files generated with code coverage report as shown below.
<img src="https://cloud.githubusercontent.com/assets/11231867/7651092/4d2bde84-fb1a-11e4-9249-a4bff49241e3.png"/>

#### Display Code coverage report in SONAR dashboard

If you are not confortable with the sonar configuration then [follow my another blog](/java-code%20quality%20analyzer/2015/05/12/SONAR-the-Java-Code-Analyzer/){:target="_blank"}


* Start the Sonar server
* Create **sonar-project.properties** file in the project root path with the following configuration

<pre class="prettyprint highlight"><code class="language-java" data-lang="java">

# must be unique in a given SonarQube instance
sonar.projectKey=JaCoCoCodeCoverage
# this is the name displayed in the SonarQube UI
sonar.projectName=JaCoCoCodeCoverage
sonar.projectVersion=1.0
 
# Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.
# Since SonarQube 4.2, this property is optional if sonar.modules is set. 
# If not set, SonarQube starts looking for source code from the directory containing 
# the sonar-project.properties file.
sonar.sources=src/main/java
 
# Encoding of the source code. Default is default system encoding
#sonar.sourceEncoding=UTF-8
sonar.java.source=1.5

# Generate sonar issues report in html and console
sonar.issuesReport.html.enable=true
sonar.issuesReport.console.enable=true

# Display Jacoco report into SonarQube dashboard
# Comma-separated paths to directories with tests (optional)
sonar.tests=src/test/java
sonar.jacoco.reportPath=target/coverage-reports/jacoco.exec
sonar.dynamicAnalysis=reuseReports
sonar.java.coveragePlugin=jacoco
sonar.jacoco.reportMissing.force.zero=true
sonar.binaries=target/classes

</code></pre>

* Execute the **sonar-runner** command from the project root path as shown below
<img src="https://cloud.githubusercontent.com/assets/11231867/7651265/3ffd8396-fb1c-11e4-9103-58ea0cc262c4.png"/>

* You are good to see the coverage report in the SONAR dashboard
