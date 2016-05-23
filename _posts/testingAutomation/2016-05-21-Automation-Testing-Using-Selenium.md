---
layout: post
category : java-Automation Testing
tags : [Automation Testing]
weight: 1
---

## Introduction


* Selenium is a suite of software tools that is used for test automation
* It is an open source suite of tools mainly for functional and regration test automation
* Selenium can be used for various operating system like Windows, Linux, Mac etc.
* It supports various browsers like Mozilla Firefox, IE, Google Chrome, Safari, Opera etc. However, Selenium IDE supports Mozilla Firefox only.
* Selenium supports various programming languages like Java, C#, PHP, Python, Ruby and PERL
* Selenium came into the market in 2004. Later in 2006, Google launched Selenium web driver
* In 2008, Selenium team decided to merge selenium webdriver with selenium Remote Control (RC) and released Selenium 2.0
* Selenium 1 consists of Selenium IDE + Selenium RC + Selenium Grid
* Selenium 2 consists of Selenium IDE + Selenium RC + Selenium Webdrivers + Selenium Grid

## Selenium Tool Suite

Selenium is a suite of software tools consists of 


* Selenium IDE
* Selenium RC
* Selenium Web drivers
* Selenium Grid

#### Selenium IDE
It is Firefox plugin used to create and test software. Features of the Selenium IDE includes


* Create Test Cases and Test Suites
* Edit Test Cases
* Execute Test Cases, Test Suites
* Debug Test Cases
* Enhance Test cases
* Export Test Cases to other supporting languages (Java, Ruby, Python etc...)
* Selenium IDE test case default format is .html

Few drawbacks of Selenim IDE includes


* It supports Mozilla Firefox browser only
* It does not support data driven testing
* It is not suitable for complex test case design


#### Selenium RC
Selenium RC stands for Selenium Remote Control which is outdated by now. 

#### Selenium WebDriver


* This sends commands directly to the web browser and retrieves results. It is a programming interface to create and execute test cases. 
* Selenium WebDrivers supports Java, C#, PHP, Python, Ruby, Perl
* Selenium WebDriver supports various operating systems like Windows, Linux, Mac etc
* For the execution of test cases in different browsers, the WebDriver changes but the test cases remain same. 

Selenium architecture is given below

<img src="https://cloud.githubusercontent.com/assets/11231867/15449972/72ef4c12-1fab-11e6-9a86-08d222bcb620.PNG"/>

#### Selenium Grid


* Selenium Grid can execute testcases in multiple browsers in multiple operating systems in parallel.
* Selenium Grid is used only for test case execution but not for test case design.

## Example

The below sample program opens https://university.mongodb.com/ URL and login using correct credential and incorrect credential

#### Required software


* Eclipse
* JDK 1.8
* Selenium jars frm maven repository.

#### Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/selenium/SeleniumTesting.zip" target="_blank">SeleniumTesting zip(4.23kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/selenium/SeleniumTesting" target="_blank">SeleniumTesting</a>
	</span>
</div>


* Write a maven project. The structure will look like below
![Selenium Project](https://cloud.githubusercontent.com/assets/11231867/15458787/efe124d2-20bb-11e6-8135-220621b49de9.png)