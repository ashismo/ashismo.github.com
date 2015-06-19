---
layout: post
category : misc-SVN Setup
tags : [Miscellanous]
weight: 100
---
{% include JB/setup %}

## SVN Setup


* Google and Install 
  * **tortoise SVN** (TortoiseSVN-1.6.10.19898-win32-svn-1.6.12.msi) and 
  * **SVN for windows** (e.g. http://sourceforge.net/projects/win32svn/). You can also download zip distribution which works without installation. URL is : [https://www.visualsvn.com/files/Apache-Subversion-1.8.13.zip](https://www.visualsvn.com/files/Apache-Subversion-1.8.13.zip)
* Create a repository from cmd prompt

```
svnadmin create "F:\ashish.mondal\mySVN\MyProjectRepo"
```
* Modifying Security and Authentication Settings
    
Go to F:\ashish.mondal\mySVN\MyProjectRepo\conf location
	For our purposes, just uncomment out the following lines from **svnserv.conf** file in configuration

```
[general]
anon-access = read
auth-access = write
password-db = passwd

```

Open **passwd** file and define username=password  
e.g.  

	
```
ashismo=root
root=root  
```
 
 
* Start the SVN server (Serving Your Repos for the First Time)

```
svnserve --daemon --root "F:\ashish.mondal\mySVN\MyProjectRepo"  
```


* Creating your First Project folder

```
svn mkdir svn://localhost/medicalStore  
```


* Right click on desktop-> tortoizeSVN -> repo-browser -> svn://localhost
