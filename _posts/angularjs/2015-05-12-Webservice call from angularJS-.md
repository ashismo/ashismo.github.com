---
layout: post
category : misc-Angular JS
tags : [AngularJS Tutorial]
weight: 40
---

## Introduction

AngularJS


 * is an open source web application framework
 * extends HTML with ng-directives
 * latest version is 1.3.14
 * is the best candidate for data binding with browser
 * is the cross browser compliant
 * helps to write the client side code in a clean MVC way

The Objective of this blog is to call GET and POST RESTful webservice.

## Required Software


 * JDK 1.7
 * Maven 2.2.x
 * Eclipse for J2EE
 
## Steps to write code

Click here to see [my project at github](https://github.com/ashismo/repositoryForMyBlog/tree/master/angularjs/AngularJS-RESTfulWS){:target="_blank"}
 

 * Write [GET and POST RESTful webservices](/java-web%20service/2015/05/12/RESTful%20webservice/){:target="_block"} from my another blog
 * replace **index.jsp** with the following content. From this JSP file we are calling GET and POST RESTful webservice. In the below file **&lt;html ng-app="empRecordApp"&gt;** indicates that this is the root element of angular JS application
 
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;%@page contentType="text/html" pageEncoding="UTF-8"%&gt;
&lt;!DOCTYPE html&gt;
&lt;html ng-app="empRecordApp"&gt;
	&lt;head&gt;
		&lt;meta charset="UTF-8"&gt;
		&lt;title&gt;Integrate HTML5 and Angular JS&lt;/title&gt;
		&lt;script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"&gt;&lt;/script&gt;
		&lt;!-- &lt;script src="&lt;%=request.getContextPath()%&gt;/angularjs/angular.min.js"&gt;&lt;/script&gt; --&gt;
		&lt;script src="&lt;%=request.getContextPath()%&gt;/angularjs/employee.js"&gt;&lt;/script&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;div&gt;
		   GET restful Webservice call&lt;br/&gt;
		   ============================
		&lt;/div&gt;
		&lt;div ng-controller="getEmployee"&gt;
			&lt;div&gt;
				&lt;p&gt;The Employee ID is {{employeeData.empId}}&lt;/p&gt;
				&lt;p&gt;The Employee Name is {{employeeData.name}}&lt;/p&gt;
			&lt;/div&gt;
			&lt;div&gt;
				EmpId: &lt;input type="text" placeholder="Emp Id" ng-model="employeeData.empId"&gt;
				Name: &lt;input type="text" placeholder="Name" ng-model="employeeData.name"&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;br/&gt;&lt;br/&gt;
		&lt;div&gt;
		   POST restful Webservice call&lt;br/&gt;
		   ===========================
		&lt;/div&gt;
		&lt;br&gt;
		&lt;div ng-controller="getSalary"&gt;
			&lt;div&gt;
				EmpId: &lt;input type="text" placeholder="Name" ng-model="employeeData.name"&gt;
				Salary: &lt;input type="text" placeholder="Salary" ng-model="employeeData.salary"&gt;
			&lt;/div&gt;
			&lt;div&gt;
				&lt;p&gt;The Employee Name is {{employeeData.name}}&lt;/p&gt;
				&lt;p&gt;The Employee Salary is {{employeeData.salary}}&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/body&gt;
&lt;/html&gt;
</code></pre>

 * **employee.js**: GET and POST RESTful webservice call is here. Place this file under **WebContent/angularjs** folder
 
<pre class="prettyprint highlight"><code class="language-js" data-lang="js">
/*
 * In this below example, the GET webservice got called
 */
var empRecordAppCtrl = angular.module('empRecordApp', []);

empRecordAppCtrl.controller('getEmployee', function($scope, $http) {
    $http.get("http://localhost:8080/angularjs/rest/hello/getEmployee/123")
	    .success(function(response) {
	    	$scope.employeeData = response;
	    });
});


/*
 * In this below example, the POST webservice got called
 */

empRecordAppCtrl.controller('getSalary', function($scope, $http) {
    $http.post("http://localhost:8080/angularjs/rest/hello/getSalary", {empId:'123'})
    .success(function(response) {
    	$scope.employeeData = response;
    });
});

</code></pre>

 * Below is the screenshot of the application
 <img src="https://cloud.githubusercontent.com/assets/11231867/7682182/cb2287ae-fd93-11e4-8e2f-2f854db24542.png"/>
