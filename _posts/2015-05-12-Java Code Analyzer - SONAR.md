---
layout: post
category : java-code quality analyzer
tags : [Code Quality Tutorial]
---
{% include JB/setup %}

## Java Code Analyzer
Analyzing java source code is an important aspest of good coding. It helps developer to findout the unused variables, dead code, deviation from the coding standard, possible bugs and many more. There are many open source Java code analyzers are available in the market.Few of them are PMD, SONAR, Find Bugs, QJ-Pro, JDiff, CheckStyle etc. PMD and SONAR are very popular in the industry. This tutorial gives brief on SONAR setup.

## SONAR
SONAR (Currently known as SonarQube) is an open source platform to inspect code quality. For Java code it identifies the potential problems like:
<ul>
 <li> Possible bugs - Empty try/catch/finally/switch blocks</li>
 <li> Dead code - Unused variables </li>
 <li> Duplicate code </li>
 <li> Empty if/while statements </li>
</ul>
Sonar report shows the indicative issues. It is upto the developer to decide whether the issue to be fixed. However, it is advisable that the developpers should fix priority 1 and 2 violations.

### Sonar Setup

#### Sonar Installation

* Download sonarqube-5.1.zip and sonar-runner-dist-2.4.zip from the [official website](http://www.sonarqube.org/downloads/) and place them together inside a folder (%SOME_PATH%/sonar/).
 * Unzip both the files into the same folder.
 * sonarqube-5.1 is the server here and sonar-runner-dist-2.4 is the client here. I have placed server and client at the same location.
 * Configure the below environment variables
<pre class="prettyprint lang-java">
SONAR_RUNNER_HOME=%SONAR_PATH%/sonar/sonar-runner-2.4
PATH=%PATH%;%SONAR_PATH%/sonar/sonar-runner-2.4/bin
SONAR_RUNNER_OPTS=-Xmx512m -XX:MaxPermSize=128m    (This is optional)
</pre>

 * It is advisable to run using JDK1.7 to avoid compiler version specific errors.
 
#### Sonar Configuration

##### Configure and start the Server

By default we are going to use h2 DB. However, Sonar supports other databases like MySQL, Oracle, SQL Server etc  
 * Open **sonar.properties** file from %SONAR_PATH%\sonar\sonarqube-5.1\conf location
 * Make sure you have minimal setup as shown below
``` 
sonar.jdbc.url=jdbc:h2:tcp://localhost:9092/sonar  
sonar.web.port=9000  
http.proxyHost=proxy.abc.com    (if you are behind proxy server)  
http.proxyPort=8080
```
 * You are done with the server configuration.
 * To start the server go inside %SONAR_PATH%\sonar\sonarqube-5.1\bin and open appropriate folder as per your OS. I have gone inside windows-x86-32 for my system. Then execute StartSonar.bat file 
 * http://localhost:9000/ URL should be accessiable once the server starts successfully
 * admin/admin is the default user name and password

##### Configure client

Assumption is that our server and client are running in the same server.
 * Open **sonar-runner.properties** file from %SONAR_PATH%/sonar/sonar-runner-2.4/conf folder
 * Specify the Sonar server URL here. In our case below is the configuration
<pre class="prettyprint">
sonar.host.url=http://localhost:9000
</pre>

##### Project setup and start the client

* Go to your eclipse project location.
* Create a file called **sonar-project.properties** file as shown in the below image.
* Make sure the project key is unique for all sonar projects analized by your server
<img style="border:1px solid black" src="https://cloud.githubusercontent.com/assets/11231867/7565197/9a24c41a-f80b-11e4-9136-62b1a71ef22a.png" height="250" width="850">
* Open command prompt from project path, set JDK1.7 path (if not set) and execute **sonar-runner** command
* Once the client is started up then the project will be visible in the dashboard

**Important Note**
 As we are not using any database so the analysis report will get stored in **sonar.h2** file @%SONAR_PATH%\sonar\sonarqube-5.1\data. After stopping the server you can delete the file from the location so all previous analysis reports will get deleted.
