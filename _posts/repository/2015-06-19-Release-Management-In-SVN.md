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
<img src="https://cloud.githubusercontent.com/assets/11231867/8251541/0e66fcf0-169b-11e5-81c7-079c4b59eb3b.png"/>  
Also know the below important terminologies


* **Trunk:** Development takes place here.
* **Trunk Tags**: Places on the trunk that are **stable** (can be checked out as a set and will build). Trunk tags look like European dates (year.month.day)
* **Branch:** Releases are each on their own branch. Each release is denoted by ''major''.''minor'' and for any release we might have several beta versions, several release candidates and then several final versions. Ideally, there would be just one version, but reality often has other ideas...
* **Branch tags:** Places on the branch that mark beta versions, release candidates and the final version(s). Branch tags look like software version numbers of the form ''major''.''minor''.''change'' ''[modifier]'' where ''modifier'' is ''b'' for beta or ''rc'' for a release candidate.

<img src="https://cloud.githubusercontent.com/assets/11231867/8252824/121c8598-16a7-11e5-97e9-f923203c8fcb.png"/>
