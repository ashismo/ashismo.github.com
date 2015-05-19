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

### ng-show/ng-hide, ng-click, ng-if

#### ng-show/ng-hide

Shows or hides an HTML element

#### ng-click

Defines an AngularJS click event

#### ng-if

Defines condition

Example of ** ng-show/ng-hide, ng-click, ng-if **

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


## Dependency Injection

Following are the core component can be injected into each other as dependencies


 * Value
 * Factory
 * Service
 * Provider
 * Constants

#### Value

Value is simple javascript object and it is used to pass values to controller during config phase

<pre class="prettyprint highlight"><code class="language-js" data-lang="js"> 
//define a module
var mainApp = angular.module("mainApp", []);
//create a value object as "defaultInput" and pass it a data.
mainApp.value("defaultInput", 5);
...
//inject the value in the controller using its name "defaultInput"
mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
      $scope.number = defaultInput;
      $scope.result = CalcService.square($scope.number);

      $scope.square = function() {
          $scope.result = CalcService.square($scope.number);
      }
});

</code></pre>  


#### Factory

factory is a function which is used to return value. It creates value on demand whenever a service or controller requires. It normally uses a factory function to calculate and return the value

<pre class="prettyprint highlight"><code class="language-js" data-lang="js"> 
//define a module
var mainApp = angular.module("mainApp", []);
//create a factory "MathService" which provides a method multiply to return multiplication of two numbers
mainApp.factory('MathService', function() {     
   var factory = {};  
   factory.multiply = function(a, b) {
      return a * b 
   }
   return factory;
}); 

//inject the factory "MathService" in a service to utilize the multiply method of factory.
mainApp.service('CalcService', function(MathService){
      this.square = function(a) { 
         return MathService.multiply(a,a); 
      }
});
...
</code></pre>  

#### Service

Service is a singleton javascript object containing a set of functions to perform certain tasks. Services are defined using service() functions and then injected into controllers.

<pre class="prettyprint highlight"><code class="language-js" data-lang="js"> 
//define a module
var mainApp = angular.module("mainApp", []);
...
//create a service which defines a method square to return square of a number.
mainApp.service('CalcService', function(MathService){
      this.square = function(a) { 
         return MathService.multiply(a,a); 
      }
});
//inject the service "CalcService" into the controller
mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
      $scope.number = defaultInput;
      $scope.result = CalcService.square($scope.number);

      $scope.square = function() {
      $scope.result = CalcService.square($scope.number);
   }
});
</code></pre> 

#### Provider

Provider is used by AngularJS internally to create services, factory etc. during config phase(phase during which AngularJS bootstraps itself). Below mention script can be used to create MathService that we've created earlier. Provider is a special factory method with a method get() which is used to return the value/service/factory

<pre class="prettyprint highlight"><code class="language-js" data-lang="js"> 
//define a module
var mainApp = angular.module("mainApp", []);
...
//create a service using provider which defines a method square to return square of a number.
mainApp.config(function($provide) {
   $provide.provider('MathService', function() {
      this.$get = function() {
         var factory = {};  
         factory.multiply = function(a, b) {
            return a * b; 
         }
         return factory;
      };
   });
});
</code></pre> 

#### Constant

constants are used to pass values at config phase considering the fact that value can not be used to be passed during config phase.

<pre class="prettyprint highlight"><code class="language-js" data-lang="js"> 
mainApp.constant("configParam", "constant value");
</code></pre> 

#### Example

Below code has used all of the above mentioned Dependency Injection core components

<pre class="prettyprint highlight"><code class="language-html" data-lang="html"> 
&lt;html&gt;
&lt;head&gt;
   &lt;title&gt;AngularJS Dependency Injection&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
   &lt;h2&gt;AngularJS Sample Application&lt;/h2&gt;
   &lt;div ng-app="mainApp" ng-controller="CalcController"&gt;
      &lt;p&gt;Enter a number: &lt;input type="number" ng-model="number" /&gt;
      &lt;button ng-click="square()"&gt;X&lt;sup&gt;2&lt;/sup&gt;&lt;/button&gt;
      &lt;p&gt;Result: {{result}}&lt;/p&gt;
   &lt;/div&gt;
   &lt;script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"&gt;&lt;/script&gt;
   &lt;script&gt;
      var mainApp = angular.module("mainApp", []);
	  
      mainApp.config(function($provide) {
         $provide.provider('MathService', function() {
            this.$get = function() {
               var factory = {};  
               factory.multiply = function(a, b) {
                  return a * b; 
               }
               return factory;
            };
         });
      });

      mainApp.value("defaultInput", 5);

      mainApp.factory('MathService', function() {     
         var factory = {};  
         factory.multiply = function(a, b) {
            return a * b; 
         }
         return factory;
      }); 

      mainApp.service('CalcService', function(MathService){
            this.square = function(a) { 
               return MathService.multiply(a,a); 
            }
      });

      mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
            $scope.number = defaultInput;
            $scope.result = CalcService.square($scope.number);

            $scope.square = function() {
                $scope.result = CalcService.square($scope.number);
            }
      });
   &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre>  

**Output**

<img src="https://cloud.githubusercontent.com/assets/11231867/7700465/780f6632-fe3c-11e4-98a2-4eaadb1f9c28.png"/>
