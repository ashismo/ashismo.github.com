---
layout: post
category : java-Code Quality Analyzer
tags : [Code Quality Tutorial]
weight: 125
---
{% include JB/setup %}

## Introduction

This blog describe how to integrate SONAR with maven build. As a result, once a maven build is complete, the code quality will be visible in the SONAR dashboard.

## Steps to configure

Below are the steps to integrate SONAR with maven build


  * Install SONAR in your machine
  * Add configuration in maven settings.xml
  * Add configuration in project pom.xml
  * Maven build with sonar:sonar option
  * Check your SONAR dashboard
 

#### Install Sonar
Install SONAR in your machine and run SONAR server. Make sure http://localhost:9000 is accessible. Follow this [blog](/java-code%20quality%20analyzer/2015/05/12/SONAR-the-Java-Code-Analyzer){:target="_blank"}

#### Add configuration in maven's setting.xml

Locate your maven's settings.xml file and add the following configuration under <profiles> tag

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;profile&gt;
       &lt;id&gt;sonar&lt;/id&gt;
       &lt;activation&gt;
            &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
       &lt;/activation&gt;
       &lt;properties&gt;
           &lt;sonar.host.url&gt;
                http://localhost:9000
           &lt;/sonar.host.url&gt;
       &lt;/properties&gt;
&lt;/profile&gt;
</code></pre>

#### Add configuration in project pom.xml
Open the pom.xml file of your project and add the following properties to indicate your source and test folders

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;properties&gt;
	&lt;sonar.sources&gt;src/main&lt;/sonar.sources&gt;
        &lt;sonar.tests&gt;src/test&lt;/sonar.tests&gt;
&lt;/properties&gt;
</code></pre>

#### Maven build with sonar:sonar option
Add the following goal to run your build

```
clean install sonar:sonar
```

#### Check your SONAR dashboard

Once the maven build is successful, the project will get visible in the SONAR dashboard as mentioned in my other [blog](/java-code%20quality%20analyzer/2015/05/12/SONAR-the-Java-Code-Analyzer){:target="_blank"}
