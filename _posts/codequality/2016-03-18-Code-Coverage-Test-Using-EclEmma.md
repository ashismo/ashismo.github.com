---
layout: post
category : java-Code Quality Analyzer
tags : [Code Quality Tutorial]
weight: 120
---
{% include JB/setup %}

## Introduction

EclEmma is a free Java code coverage tool for Eclipse. It displays the coverage report in Eclipse directly. EclEmma is based on the JaCoCo code coverage library. EclEmma is one of the suitable tools for Test Driven Development (TDD).

Snapshot of the code coverage in Eclipse is shown below

<img src="https://cloud.githubusercontent.com/assets/11231867/13877707/95e316a0-ed32-11e5-902d-dd3f21656bba.png"/>

## Install EclEmma plugin into your eclipse

Download the latest eclemma zip file from [this location](http://eclemma.org/download.html){:target="_blank"} and extract the content into dropins folder inside eclipse. Restart the eclipse. On successful installation, the following image will be visible.

<img src="https://cloud.githubusercontent.com/assets/11231867/13877951/0a04de6e-ed34-11e5-9687-6fae9a82263d.png"/>

## Test the Code Coverage

Open any junit test suite, right click on the file-> coverage as -> junit test.  
Open **Coverage view** from Window->Showview->Other->Coverage to see the report.  
You can export the report from **Coverage View**.
