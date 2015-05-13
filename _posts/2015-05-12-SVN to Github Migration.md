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


* Backup your code from SVN into some location. (You know the reason right?, If something goes wrong(even though it is the rarest of the rare case) then you are not loosing the code base)
* Create a new folder then execute the below command FROM **command** prompt to Migrate your subversion repository in to the new folder

```
> svn2git http://[domain name]/svn/[repository root]
```
If you get the following error
		**command failed:**
		**git checkout –f master**  
Then follow [this URL](https://github.com/nirvdrum/svn2git). If you have no trunk, branch,tag in your SVN repository then use

```
> svn2git svn://localhost/LearningAndroid --rootistrunk
```


* Prepare to push your code to Github by executing the below command. <a href="http://gitref.org/remotes/" target="_blank">Click here </a> for more details about remote command

```
> git remote add origin https://github.com/ashismo/LearningABCD
```


* Verify if it has been completed successfully, execute the below command from 

```
> git remote –v
```


* Push the code in Github by executing the **git push --all** command. The execution snippet is given below

```
F:\ashish.mondal\myGithub\svnToGitLatest>git push --all
Username for 'https://github.com': ashismo
Password for 'https://ashismo@github.com':
To https://github.com/ashismo/LearningABCD.git
! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/ashismo/LearningABCD.git'

hint: Updates were rejected because a pushed branch tip is behind its remote
hint: counterpart. Check out this branch and integrate the remote changes
hint: (e.g. 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
If you get the above mentioned error comes then use **git push --force** command instead of "git push --all". 


* Finally execute **git config --global push.default matching** command.
