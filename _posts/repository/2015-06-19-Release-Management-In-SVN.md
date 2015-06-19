---
layout: post
category : misc-SVN Setup
tags : [Miscellanous]
weight: 105
---
{% include JB/setup %}

## Introduction

Release management is very important when you are creating a new project repository. In this blog I am trying to demonstrate the best way to create a project repository.  
You can plan to create


 * multiple repositories for multiple projects OR
 * Single repository for multiple projects OR
 * Mix and match of the above approach

All the abobe mentioned approaches have some pros and cons. 
**multiple repository** is more moduler but maintainability of the projects is very difficult.  
Where as the **single repository** approach will help you to manage projects more smoothly. However, if you set triggr of checked-in files, then there is a chance that unrelated people or group of perople will receive email notifications as multiple projects are managed under same repository.  
In case of **Mix and match** approach, you can goup logical projects into single repository so number of repository will get reduced.

## Repository Layout

Suppose you have three projects called Calculator, calendar and spreadsheet. You can layout your project in one of the following ways
<img src="https://cloud.githubusercontent.com/assets/11231867/8251503/b22fc2aa-169a-11e5-8670-449b110b1607.png"/>
 
