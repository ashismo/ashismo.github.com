---
layout: post
category : misc-Angular JS
tags : [AngularJS Tutorial]
weight: 1
---

## Introduction

AngularJS


 * is an open source web application framework
 * extends HTML with ng-directives
 * latest version is 1.3.14
 * is the best candidate for data binding with browser
 * is the cross browser compliant
 * helps to write the client side code in a clean MVC way
 
## Write your first AngularJS application

AngularJS application has two major parts called **modules** and **controllers**
**Module(ng-app)** defines the Angular js application
**Controller(ng-controller)** controls AngularJS application

**Code snippet** and **output** given below

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
&lt;script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;p&gt;Try to change the name&lt;/p&gt;

&lt;div ng-app="angularJSApp" ng-controller="agularJSController"&gt;

First Name: &lt;input type="text" ng-model="firstName"&gt;&lt;br/&gt;
Last Name: &lt;input type="text" ng-model="lastName"&gt;&lt;br/&gt;
&lt;br/&gt;
Full Name: {{firstName + " " + lastName}}

&lt;/div&gt;

&lt;script&gt;
  var app = angular.module('angularJSApp', []);  // This is angular js module
  app.controller('agularJSController', function($scope) { // This is angular js controller
      $scope.firstName= 'Ashish';
      $scope.lastName= 'Mondal';
 });
&lt;/script&gt;

&lt;/body&gt;

</code></pre>

**Output** of the above code
<img src="https://cloud.githubusercontent.com/assets/11231867/7700093/e47cb3f4-fe39-11e4-8133-390319cd9a43.png"/>


## Know different types of ng-directives...

### ng-app, ng-model, ng-bind

#### ng-app

Defines an AngularJS application


 * This is root element of angularJS application
 * This will auto-bootstrap (automatically initialize) the application when a web page is loaded
 * can have a value (like ng-app="directiveExample "), to connect code modules
  
#### ng-model

Binds the value of HTML controls (input, select, textarea) to application data.


 * Provide type validation for application data (number, email, required).
 * Provide status for application data (invalid, dirty, touched, error).
 * Provide CSS classes for HTML elements
 * Bind HTML elements to HTML forms

#### ng-bind

Binds application data to the HTML view

Example of **ng-app, ng-model, ng-bind**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;script
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;div ng-app="directiveExample"&gt;
		&lt;p&gt;Input something in the input box:&lt;/p&gt;
		&lt;p&gt;
			Name: &lt;input type="text" ng-model="name"&gt;
		&lt;/p&gt;
		ng-bind example:
		&lt;p ng-bind="name"&gt;&lt;/p&gt;
		An alternative to ng-bind is: { { name } }
	&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

**snapshot**  

<img src="https://cloud.githubusercontent.com/assets/11231867/7699334/c8bc8ce8-fe34-11e4-9a92-2ccb7c57b655.png"/>


### ng-bind, ng-init, ng-repeat

#### ng-bind

Binds application data to the HTML view

#### ng-init

Defines **initial values** for an AngularJS application

#### ng-repeat

Repeats an HTML element

Example of **ng-bind, ng-init, ng-repeat**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

&lt;div ng-app="" ng-init="names=['Ashish','Dona','Ujan']"&gt;
  &lt;p&gt;Looping with ng-repeat:&lt;/p&gt;
  &lt;ul&gt;
    &lt;li ng-repeat="x in names"&gt;
      Name: {{ x }} &lt;br/&gt;
      Alternative way: &lt;span ng-bind="x"/&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</code></pre>

**snapshot**  

<img src="https://cloud.githubusercontent.com/assets/11231867/7699459/aab42124-fe35-11e4-9564-6fd779ee9e58.png"/>


### ng-disabled

Binds AngularJS application data to the disabled attribute of HTML elements

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
&lt;script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div ng-app="" ng-init="mySwitch=true"&gt;
	&lt;p&gt;
	&lt;button ng-disabled="mySwitch"&gt;Click Me!&lt;/button&gt;
	&lt;/p&gt;
	&lt;p&gt;
	&lt;input type="checkbox" ng-model="mySwitch"/&gt;Button
	&lt;/p&gt;
	&lt;p&gt;
	Button disabled: {{ mySwitch }}
	&lt;/p&gt;
&lt;/div&gt; 
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

**snapshot**  

<img src="https://cloud.githubusercontent.com/assets/11231867/7699523/1cdcec4a-fe36-11e4-9809-047f3840b569.png"/>

### ng-show/ng-hide, ng-click, ng-if

#### ng-show/ng-hide

Shows or hides an HTML element

#### ng-click

Defines an AngularJS click event

#### ng-if

Defines condition

Example of **ng-show/ng-hide, ng-click, ng-if**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;body&gt;
&lt;div ng-app="myUserCtrlApp" ng-controller="personCtrl"&gt;
 &lt;div ng-if="displayUser"&gt;
   &lt;button ng-click="toggleUserDtls()"&gt;Display user&lt;/button&gt;
 &lt;/div&gt;
 &lt;div ng-if="!displayUser"&gt;
   &lt;button ng-click="toggleUserDtls()"&gt;Hide user&lt;/button&gt;
 &lt;/div&gt;

 &lt;p ng-hide="displayUser"&gt;
  First Name: &lt;input type=text ng-model="fName"&gt;&lt;br&gt;
  Last Name: &lt;input type=text ng-model="lName"&gt;&lt;br&gt;&lt;br&gt;
  Full Name: {{fName + " " + lName}}
 &lt;/p&gt;

&lt;/div&gt;

&lt;script&gt;
var app = angular.module('myUserCtrlApp', []);
app.controller('personCtrl', function($scope) {
    $scope.fName = "Ashish",
    $scope.lName = "Mondal"
    $scope.displayUser = false;
    $scope.toggleUserDtls = function() {
        $scope.displayUser = !$scope.displayUser;
    }
});
&lt;/script&gt; 

&lt;/body&gt;
</code></pre>

**snapshot**  

<img src="https://cloud.githubusercontent.com/assets/11231867/7699626/cdadb824-fe36-11e4-8e8b-03346517aeef.png"/>

## AngularJS filters

AngularJS filters are currency, filter, lowercase, orderBy, uppercase  
**currency:** Format a number to a currency format
**filter:** Select a subset of items from an array
**lowercase:** Format a string to lower case
**orderBy:** Orders an array by an expression
**uppercase:** Format a string to upper case

Below is the example of filter implementation

**filter.html**

Download and include **angular.js** as shown in the code snippet. Write your own js file called **controller.js**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;!DOCTYPE html&gt;
&lt;html ng-app="myFilterApp"&gt;
&lt;head&gt;
&lt;title&gt;&lt;/title&gt;
&lt;script type="text/javascript" src="lib/angular.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="js/controller.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form&gt;
&lt;div ng-controller="myFilterController"&gt;
	
    Enter principal amount : &lt;input type="text"  ng-model="principal" placeholder="Principle Amount" maxlength="10" autocomplete="off"/&gt; &lt;br/&gt;
    Enter rate of interest : &lt;input type="text"  ng-model="rate" placeholder="Rate of Interest" maxlength="2" autocomplete="off"/&gt;&lt;br/&gt;
    Enter Tenure of the loan (Years) : &lt;input type="text"  ng-model="duration" placeholder="Tenure of the Loan" maxlength="2" autocomplete="off"/&gt;&lt;br/&gt;
    &lt;br/&gt;&lt;br/&gt;&lt;span&gt;Interest amount using ng-bind&lt;/span&gt;
    &lt;h3 ng-bind="((principal * rate * duration) /100) | currency"&gt;&lt;/h3&gt;
    &lt;h2&gt;Interest amount is {{((principal * rate * duration) /100) | currency}}&lt;/h2&gt;
	
&lt;/div&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt; 

</code></pre>  

**controller.js**

<pre class="prettyprint highlight"><code class="language-js" data-lang="js"> 
var myFilterController = angular.module('myFilterApp', []);
myFilterController.controller('myFilterController', function($scope) {
	$scope.principal = '';
	$scope.rate='';
	$scope.duration='';
	$scope.interest = $scope.principal * ($scope.rate/100) * $scope.duration;
  }); 
</code></pre>  

**Output**

<img src="https://cloud.githubusercontent.com/assets/11231867/7700282/36d69c4a-fe3b-11e4-987a-28c322dba086.png"/>

## Compile and Link phase in AngularJS

AngularJS parser parses the angular directives and render the HTML output. Angular parser works in three steps  
**Step 1:** HTML browser parses the HTML and creates a DOM
**Step 2:** Angular framework runs over the DOM to find out the ng-directives and manipulates the DOM
**Step 3:** This manipulated DOM will be rendered as HTML in the browser.  
Above mentioned three steps happens in two phases called **Compile** and **Link**  
**Compile:** In this phase the angular parser parses the DOM and creates a function as soon as it encounters ng-directives. These functions are called as **template or compiled function**. In this phase we do not have access to the **$scope** data  
**Link:** In this phase **$scope** will get attached with the template function and gets executed to get the final HTML output.


## AngularJS Routes

AngularJS routes enable you to create different URLs for different content in your application. Having different URLs for different content enables the user to bookmark and share URLs to specific content. In AngularJS each such bookmarkable URL is called a route.
