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

_______________________  
| Web application     |  
_______________________  
          |  
		 \/  
__________________________________________  
| Web browsers IE, Firefox, Chrome etc   |  
__________________________________________  
          |  
		 \/  
________________________  
| Selenium WebDriver   |  
________________________  
          |  
		 \/  
____________________________________________  
| Selenium Test (Java, C#, Ruby, Python)   |  
____________________________________________  

#### Selenium Grid


* Selenium Grid can execute testcases in multiple browsers in multiple operating systems in parallel.
* Selenium Grid is used only for test case execution but not for test case design.