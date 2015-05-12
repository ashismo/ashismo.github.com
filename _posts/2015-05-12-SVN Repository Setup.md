
## SVN Setup


* Google and Install **tortoise SVN** and **SVN for windows**(TortoiseSVN-1.6.10.19898-win32-svn-1.6.12.msi)
* Create a repository from cmd prompt
    * svnadmin create "F:\ashish.mondal\mySVN\MyProjectRepo"
    * Modifying Security and Authentication Settings
    
    ```
    Go to D:\Project\Repository\conf location
		The svnserv.conf file in a configuration file for the svnserv executible. For our purposes, just uncomment out the following lines:
		[general]
		anon-access = read
		auth-access = write
		password-db = passwd
		```
		
		```
		Open passwd file and define username=password
		e.g.
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
