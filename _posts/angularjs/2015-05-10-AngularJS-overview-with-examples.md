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
 
## ng-directives

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
		An alternative to ng-bind is: {{name}}
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

Example of ** ng-bind, ng-init, ng-repeat**
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

