---
layout: post
category : java-01
tags : [Code Quality Tutorial]
---
{% include JB/setup %}

## Java Code Analyzer
Analyzing java source code is an important aspest of good coding. It helps developer to findout the unused variables, dead code, deviation from the coding standard, possible bugs and many more. There are many open source Java code analyzers are available in the market.Few of them are PMD, SONAR, Find Bugs, QJ-Pro, JDiff, CheckStyle etc. PMD and SONAR are very popular in the industry. This tutorial gives brief on PMD setup.

## PMD
PMD is a static rule set based Java source code analyzer that identifies the potential problems like:
<ul>
 <li> Possible bugs - Empty try/catch/finally/switch blocks</li>
 <li> Dead code - Unused variables </li>
 <li> Duplicate code </li>
 <li> Empty if/while statements </li>
</ul>
PMD report shows the indicative issues. It is upto the developer to decide whether the issue to be fixed. However, it is advisable that the developpers should fix priority 1 and 2 violations.

#### PMD plugin setup in Eclipse
As the Eclipse is the most popular IDE so I have done the PMD setup in eclipse.
Steps to add PMD plugin in Eclipse is given below
<ul>
 <li> Right click on some project and check if PMD is getting displayed on the popup. If displayed then the PMD is already available in your eclipse. </li>
 <br/><img style="border:1px solid black" src="http://www.eclipsezone.com/articles/pmd/images/check_code_pmd.png" height="350" width="350"> <br/>
Otherwise follow the below steps
 <li> Start Eclipse and open a project </li>
 <li> Select "Help"->"Software Updates"->"Find and Install" </li>
 <li> Click "Next", then click "New remote site" </li>
 <li> Enter "PMD" into the Name field and "http://pmd.sf.net/eclipse" into the URL field </li>
 <li> Click through the rest of the dialog boxes to install the plugin </li>
 <li> Restart eclipse </li>
 <li> Right click on some project and check if PMD is getting displayed on the popup(as shown in the above image).</li> 
</ul>

#### PMD Rule setup in Eclipse
As mentioned, PMD is a static rule set based Java source code analyzer. There will be a default set of rules that you can edit/delete. You can add new rules. Also you can import/export a rule set. Go to
 * Window->Preference
 * Expand PMD in the left hand panel
 * Select Rules configuration under PMD
 * All the rules will be visible in the right panel.
Now spend some time with the rules to understand how to edit/modify, import/export rules.

#### Analyze code using PMD

##### Check Violations
 * Change the perspective to "PMD" in Eclipse. (Normally at the top right corner it will be visible)
Righ click on the project->PMD->Check Code with PMD as shown below
<img style="border:1px solid black" src="http://www.eclipsezone.com/articles/pmd/images/check_code_pmd.png" height="350" width="350">
* Now a violation window will open. Check your code violations here.
<br/>
See the below screenshot. All important sections are highlighted. In this example, Violation priority 3 is complaining about the length of the variable is excessively long.
<img style="border:1px solid black" src="https://cloud.githubusercontent.com/assets/11231867/7563166/1b4306c4-f7f8-11e4-84a4-4e5cc051c33d.png" height="600" width="950">

##### Check duplicate Code
Follow the below step to find out the duplicate code that can be refactored into a method.
Right click on Project -> PMD -> Find suspect cut and paste

>> Please note that this tutorial talked about the basic stuffs on PMD. If you want more details on PMD then go to their [Official website](http://pmd.sourceforge.net/)

Next topic will discuss about the SONAR tool which is more powerful and more widely used in the industry.
