---
layout: post
category : misc-Angular JS
tags : [AngularJS Tutorial]
weight: 15
---

## Form Validation using AngularJS

Below example validates username and email id.
In the below example **$dirty,$invalid** properties are used. 
**$dirty** means user has interacted with the field, and **$invalid** means the field contains invalid

<pre class="prettyprint highlight"><code class="language-html" data-lang="html"> 
&lt;!DOCTYPE html&gt;
&lt;html data-ng-app="formValidation"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;Integrate HTML5 and Angular JS&lt;/title&gt;
&lt;script
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;form data-ng-app=""
		ng-init="data={'user':'ashish', 'email':'amo@gmail.com'}"
		name="myForm" novalidate&gt;

		&lt;p&gt;
			Username:&lt;br&gt; &lt;input type="text" name="user"
				ng-model="data.user" required&gt; &lt;span style="color: red"
				ng-show="myForm.user.$dirty && myForm.user.$invalid"&gt; &lt;span
				ng-show="myForm.user.$error.required"&gt;Username is required.&lt;/span&gt;
			&lt;/span&gt;
		&lt;/p&gt;

		&lt;p&gt;
			Email:&lt;br&gt; &lt;input type="email" name="email"
				ng-model="data.email" required&gt; &lt;span style="color: red"
				ng-show="myForm.email.$dirty && myForm.email.$invalid"&gt; &lt;span
				ng-show="myForm.email.$error.required"&gt;Email is required.&lt;/span&gt; &lt;span
				ng-show="myForm.email.$error.email"&gt;Invalid email address.&lt;/span&gt;
			&lt;/span&gt;
		&lt;/p&gt;

		&lt;p&gt;
			&lt;input type="submit"
				ng-disabled="myForm.user.$dirty && myForm.user.$invalid ||  
 myForm.email.$dirty && myForm.email.$invalid"&gt;
		&lt;/p&gt;

	&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre>  

**Output**

<img src="https://cloud.githubusercontent.com/assets/11231867/7701052/214cdd0c-fe41-11e4-9a08-d539b6c50b28.png"/>  
<img src="https://cloud.githubusercontent.com/assets/11231867/7701053/22665088-fe41-11e4-85ff-9939178b6b2d.png"/>
