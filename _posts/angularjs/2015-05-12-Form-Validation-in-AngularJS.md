---
layout: post
category : misc-Angular JS
tags : [AngularJS Tutorial]
weight: 15
---

##Form Validation using AngularJS

Below example validates username and email id.
In the below example **$dirty,$invalid** properties are used. 
**$dirty** means user has interacted with the field, and **$invalid** means the field contains invalid

<pre class="prettyprint highlight"><code class="language-html" data-lang="html"> 
<!DOCTYPE html>
<html ng-app="formValidation">
<head>
<meta charset="UTF-8">
<title>Integrate HTML5 and Angular JS</title>
<script
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
	<form ng-app=""
		ng-init="data={'user':'ashish', 'email':'amo@gmail.com'}"
		name="myForm" novalidate>

		<p>
			Username:<br> <input type="text" name="user"
				ng-model="data.user" required> <span style="color: red"
				ng-show="myForm.user.$dirty && myForm.user.$invalid"> <span
				ng-show="myForm.user.$error.required">Username is required.</span>
			</span>
		</p>

		<p>
			Email:<br> <input type="email" name="email"
				ng-model="data.email" required> <span style="color: red"
				ng-show="myForm.email.$dirty && myForm.email.$invalid"> <span
				ng-show="myForm.email.$error.required">Email is required.</span> <span
				ng-show="myForm.email.$error.email">Invalid email address.</span>
			</span>
		</p>

		<p>
			<input type="submit"
				ng-disabled="myForm.user.$dirty && myForm.user.$invalid ||  
 myForm.email.$dirty && myForm.email.$invalid">
		</p>

	</form>

</body>
</html>

</code></pre>  

**Output**

<img src="https://cloud.githubusercontent.com/assets/11231867/7701052/214cdd0c-fe41-11e4-9a08-d539b6c50b28.png"/>  
<img src="https://cloud.githubusercontent.com/assets/11231867/7701053/22665088-fe41-11e4-85ff-9939178b6b2d.png"/>
