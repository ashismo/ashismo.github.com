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


* Create a Java project in eclipse and convert into Maven project. For more details, follow my [another blog](/java-build/2015/05/09/Setting%20up%20a%20Maven%20Build/){target:_blank}
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

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>JaCoCoCodeCoverage</groupId>
	<artifactId>JaCoCoCodeCoverage</artifactId>
	<version>0.0.1-SNAPSHOT</version>

	<repositories>
		<repository>
			<id>maven2-repository.java.net</id>
			<name>Java.net Repository for Maven</name>
			<url>http://repo1.maven.org/maven2</url>
			<layout>default</layout>
		</repository>
	</repositories>

	<build>
		<sourceDirectory>src</sourceDirectory>
		<plugins>
			<plugin>
				<artifactId>maven-compiler-plugin</artifactId>
				<version>3.1</version>
				<configuration>
					<source>1.7</source>
					<target>1.7</target>
				</configuration>
			</plugin>
		</plugins>
	</build>

	<dependencies>
		<!-- Junit dependancy -->
		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.8.1</version>
		</dependency>
	</dependencies>
</project>

</code></pre>

So you are done with the project setup.

#### Configure JaCoCo plugin for code coverage


* Add below JaCoCo plugin in your pom.xml file. The complete pom.xml for my project look [like this] (https://github.com/ashismo/repositoryForMyBlog/blob/master/JaCoCoCodeCoveragePOM.xml){target:_blank}

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

<!-- Configuring The JaCoCo Maven Plugin -->
			<plugin>
				<groupId>org.jacoco</groupId>
				<artifactId>jacoco-maven-plugin</artifactId>
				<version>0.6.3.201306030806</version>
				<executions>
					<!-- Prepares the property pointing to the JaCoCo runtime agent which 
						is passed as VM argument when Maven the Surefire plugin is executed. -->
					<execution>
						<id>pre-unit-test</id>
						<goals>
							<goal>prepare-agent</goal>
						</goals>
						<configuration>
							<!-- Sets the path to the file which contains the execution data. -->
							<destFile>${project.build.directory}/coverage-reports/jacoco-ut.exec</destFile>
							<!-- Sets the name of the property containing the settings for JaCoCo 
								runtime agent. -->
							<propertyName>surefireArgLine</propertyName>
						</configuration>
					</execution>
					<!-- Ensures that the code coverage report for unit tests is created 
						after unit tests have been run. -->
					<execution>
						<id>post-unit-test</id>
						<phase>test</phase>
						<goals>
							<goal>report</goal>
						</goals>
						<configuration>
							<!-- Sets the path to the file which contains the execution data. -->
							<dataFile>${project.build.directory}/coverage-reports/jacoco-ut.exec</dataFile>
							<!-- Sets the output directory for the code coverage report. -->
							<outputDirectory>${project.reporting.outputDirectory}/jacoco-ut</outputDirectory>
						</configuration>
					</execution>
				</executions>
			</plugin>
			<!-- Configuring The Maven Surefire Plugin -->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-surefire-plugin</artifactId>
				<version>2.15</version>
				<configuration>
					<!-- Sets the VM argument line used when unit tests are run. -->
					<argLine>${surefireArgLine}</argLine>
					<!-- Skips unit tests if the value of skip.unit.tests property is true -->
					<skipTests>${skip.unit.tests}</skipTests>
					<!-- Excludes integration tests when unit tests are run. -->
					<excludes>
						<exclude>**/IT*.java</exclude>
					</excludes>
				</configuration>
			</plugin>
			<!-- Configuring The Maven Failsafe Plugin -->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-failsafe-plugin</artifactId>
				<version>2.15</version>
				<executions>
					<!-- Ensures that both integration-test and verify goals of the Failsafe 
						Maven plugin are executed. -->
					<execution>
						<id>integration-tests</id>
						<goals>
							<goal>integration-test</goal>
							<goal>verify</goal>
						</goals>
						<configuration>
							<!-- Sets the VM argument line used when integration tests are run. -->
							<argLine>${failsafeArgLine}</argLine>
							<!-- Skips integration tests if the value of skip.integration.tests 
								property is true -->
							<skipTests>${skip.integration.tests}</skipTests>
						</configuration>
					</execution>
				</executions>
			</plugin>
</code></pre>
