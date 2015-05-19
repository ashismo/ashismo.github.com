---
layout: post
category : misc-Angular JS
tags : [AngularJS Tutorial]
weight: 10
---

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
