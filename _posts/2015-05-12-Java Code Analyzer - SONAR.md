---
layout: post
category : java-code quality analyzer
tags : [Code Quality Tutorial]
---
{% include JB/setup %}

## Java Code Analyzer
Analyzing java source code is an important aspest of good coding. It helps developer to findout the unused variables, dead code, deviation from the coding standard, possible bugs and many more. There are many open source Java code analyzers are available in the market.Few of them are PMD, SONAR, Find Bugs, QJ-Pro, JDiff, CheckStyle etc. PMD and SONAR are very popular in the industry. This tutorial gives brief on SONAR setup.

## SONAR
PMD is a static rule set based Java source code analyzer that identifies the potential problems like:
<ul>
 <li> Possible bugs - Empty try/catch/finally/switch blocks</li>
 <li> Dead code - Unused variables </li>
 <li> Duplicate code </li>
 <li> Empty if/while statements </li>
</ul>
PMD report shows the indicative issues. It is upto the developer to decide whether the issue to be fixed. However, it is advisable that the developpers should fix priority 1 and 2 violations.
