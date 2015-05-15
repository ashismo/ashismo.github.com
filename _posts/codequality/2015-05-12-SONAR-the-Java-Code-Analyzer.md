---
layout: post
category : java-code quality analyzer
tags : [Code Quality Tutorial]
---
{% include JB/setup %}

## Java Code Analyzer
Analyzing java source code is an important aspest of good coding. It helps developer to findout the unused variables, dead code, deviation from the coding standard, possible bugs and many more. There are many open source Java code analyzers are available in the market.Few of them are PMD, SONAR, Find Bugs, QJ-Pro, JDiff, CheckStyle etc. PMD and SONAR are very popular in the industry. This tutorial gives brief on SONAR setup.

## SONAR
SONAR (Currently known as SonarQube) is an open source platform to inspect code quality. It identifies the problems as mentioned in the below image.

<img src="https://cloud.githubusercontent.com/assets/11231867/7565993/0190cab2-f812-11e4-8412-8acbc253d291.png" style="border:1px solid black">

Sonar report shows the indicative issues. It is upto the developer to decide whether the issue to be fixed. However, it is advisable that the developpers should fix priority 1 and 2 violations.

### Sonar Setup

#### Sonar Installation


- Download sonarqube-5.1.zip and sonar-runner-dist-2.4.zip from the [official website](http://www.sonarqube.org/downloads/) and place them together inside a folder (%SOME_PATH%/sonar/).
- Unzip both the files into the same folder.
- sonarqube-5.1 is the server here and sonar-runner-dist-2.4 is the client here. I have placed server and client at the same location.
- Configure the below environment variables
 
```
SONAR_RUNNER_HOME=%SONAR_PATH%/sonar/sonar-runner-2.4  
PATH=%PATH%;%SONAR_PATH%/sonar/sonar-runner-2.4/bin  
SONAR_RUNNER_OPTS=-Xmx512m -XX:MaxPermSize=128m    (This is optional)  
```


 - It is advisable to run using JDK1.7 to avoid compiler version specific errors.
 
#### Sonar Configuration

##### Configure and start the Server

By default we are going to use h2 DB. However, Sonar supports other databases like MySQL, Oracle, SQL Server etc  


 - Open **sonar.properties** file from %SONAR_PATH%\sonar\sonarqube-5.1\conf location
 - Make sure you have minimal setup as shown below
 
``` 
sonar.jdbc.url=jdbc:h2:tcp://localhost:9092/sonar  
sonar.web.port=9000  
http.proxyHost=proxy.abc.com    (if you are behind proxy server)  
http.proxyPort=8080  
```


 * You are done with the server configuration.
 * To start the server go inside **%SONAR_PATH%\sonar\sonarqube-5.1\bin** and open appropriate folder as per your OS. I have gone inside **windows-x86-32** folder for my system. Then execute StartSonar.bat file 
 * **http://localhost:9000/** URL should be accessiable once the server starts successfully
 * admin/admin is the default user name and password

##### Configure client

Assumption is that our server and client are running in the same server.


 * Open **sonar-runner.properties** file from %SONAR_PATH%/sonar/sonar-runner-2.4/conf folder
 * Specify the Sonar server URL here. In our case below is the configuration

```
sonar.host.url=http://localhost:9000  
```

##### Sonar Setup for the project


* Go to your eclipse project location.
* Create a file called **sonar-project.properties** file as shown in the below image.
* Make sure the project key is unique among the all sonar projects analized by your server  
  
<img style="border:1px solid black" src="https://cloud.githubusercontent.com/assets/11231867/7565197/9a24c41a-f80b-11e4-9136-62b1a71ef22a.png" height="250" width="850">  
  
#### Analyze the project using sonar-runner


* Open command prompt from project path, set **JDK1.7** path (if not set) and execute **sonar-runner** command
* Once the client is started up then the project will be visible in the dashboard

**Important Note**
 As we are not using any database so the analysis report will get stored in **sonar.h2** file @%SONAR_PATH%\sonar\sonarqube-5.1\data. After stopping the server you can delete the file from the location so all previous analysis reports will get deleted.

#### Generate Sonar Report for Analysis
 
 The generated report is purely based on the defined rules in the server. To check the defined rules:


  * Login to http://localhost:9000 (User name - admin, password - admin)
  * Go to **Quality Profile** tab
  * Default Java profile is **Sonar Way**
  * Check the Rules. (You can deactivate rules if not required)
  
Run the **sonar-runner** command from the [project path](#project-setup-and-start-the-client). Once the command gets executed successfully, the project will be visible in the dashboard.

<img style="border:1px solid black" src="https://cloud.githubusercontent.com/assets/11231867/7565830/b6b9cd78-f810-11e4-9119-e53bd1d6a534.png">

Click on the project available in the dashboard to see Blocking/Critical/Major/Minor violations. It is advisable to fix Blocking/Critical one. It is good to fix major violations as well.

<img style="border:1px solid black" src="https://cloud.githubusercontent.com/assets/11231867/7565865/0901db52-f811-11e4-8a96-122c8bab57f8.png">


#### Share the sonar report

You can share the Sonar report in html/pdf format. In this example I am going to show the required configuration to generate report in html


- Open **sonar-project.properties** file present inside the [project] (#sonar-setup-for-the-project) and add the below configuration

```
# Generate sonar issues report in html and console
sonar.issuesReport.html.enable=true
sonar.issuesReport.console.enable=true

# Incremental mode performs a fully analysis only on changed code, and does not save the results to the database. 
# It is used on the developer's machine to check the quality of code changes before checking them in
sonar.analysis.mode=incremental
```

- Open the command prompt from the same location and execute **sonar-runner** command
- The console will display the summary of the report because of the *sonar.issuesReport.console.enable=true* property
  
<img src="https://cloud.githubusercontent.com/assets/11231867/7583513/9c45acde-f8b3-11e4-97dc-758e1de9aefe.png"/>
  
- A detailed html report will get generated (because of *sonar.issuesReport.html.enable=true* property) at the following location : %PROJECT_PATH%\.sonar\issues-report. By default two html files get generated **issues-report.html** and **issues-report-light.html**
- The sample html file looks like as shown below.
  
<img style="border:1px solid black" src="https://cloud.githubusercontent.com/assets/11231867/7583648/f0974e7c-f8b4-11e4-875c-bc0a77cfc241.png"/>

## Common issues during SONAR setup

SL NO | Issue | Solution
:---:|:---|:---
1 | **sonar-runner** command is successful but the project is not getting displayed in the SONAR dashboard | Comment out **sonar.analysis.mode=incremental** property then execute **sonar-runner** command again and check the project should be available in the SONAR dashboard
