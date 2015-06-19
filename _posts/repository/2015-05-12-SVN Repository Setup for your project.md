---
layout: post
category : misc-SVN Setup
tags : [Miscellanous]
weight: 100
---
{% include JB/setup %}

#### Installation and Setup
  * **tortoise SVN** (TortoiseSVN-1.6.10.19898-win32-svn-1.6.12.msi) and 
  * **SVN for windows** (e.g. http://sourceforge.net/projects/win32svn/). You can also download zip distribution which works without installation. URL is : [https://www.visualsvn.com/files/Apache-Subversion-1.8.13.zip](https://www.visualsvn.com/files/Apache-Subversion-1.8.13.zip)
* Create a repository from cmd prompt

```
svnadmin create "F:\ashish.mondal\mySVN\MyProjectRepo"
```
* Modifying Security and Authentication Settings
    
Go to F:\ashish.mondal\mySVN\MyProjectRepo\conf location
	For our purposes, just uncomment out the following lines from **svnserve.conf** file in configuration

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
** You are done with the installation and setup of the SVN server (Subversion for windows) and client (Tortoise SVN).
 
#### Start the SVN server


 
* Start the SVN server (Serving Your Repos for the First Time)

```
svnserve --daemon --root "F:\ashish.mondal\mySVN\MyProjectRepo"  
```

* Create your First Project folder either from cmd prompt or from Tortoise SVN client
  * **cmd prompt**
```
svn mkdir svn://localhost/medicalStore  
```

  * **Tortoise SVN**: Right click on desktop-> tortoizeSVN -> repo-browser -> svn://localhost -> Right click on **svn:\\localhost** and Create Forder

#### Access your SVN repository by SVN client (Tortoise SVN)

* Right click on desktop-> tortoizeSVN -> repo-browser -> svn://localhost
