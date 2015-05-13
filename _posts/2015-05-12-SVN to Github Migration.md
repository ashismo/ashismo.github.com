---
layout: post
category : misc-SVN to GitHub migration
tags : [Miscellanous]
---
{% include JB/setup %}

## SVN to Github migration

Migration of code repository is very common practice in the industry. However, migration of the history of checked-in comments  is not very easy but it is very important part of the migration process. In this tutorial we I am going to show the steps to migrate SVN code into Github.

  
  
### Required software 


 * Download and install right version of ruby (32 bit/64 bits) from [the official website](http://rubyinstaller.org/downloads/)
 * [Install git](https://www.git-scm.com/download/win) in your system.
 * [Install github client](https://windows.github.com/) in your system.
 * Install svn2git.gem by executing "gem install svn2git" from <path to ruby>/bin
    If fails then [download svn2git.gem](https://rubygems.org/gems/svn2git/versions/2.3.2) into <path to ruby> then execute and wait for sometime

```
>cd <path to ruby>
>bin\gem install svn2git.gem
```

### Migration steps


1. Backup your code from SVN into some location.
2. Create a new folder then execute the below command to Migrate your subversion repository in to the new folder

```
  svn2git http://[domain name]/svn/[repository root]
```
If you get the following error
		**command failed:**
		**git checkout –f master**
Then follow [this URL](https://github.com/nirvdrum/svn2git)
  
  		
If you have no trunk, branch,tag in your SVN repository then use 

```
	$ svn2git svn://localhost/CustomizedUjanLearningAndroid --rootistrunk
```
