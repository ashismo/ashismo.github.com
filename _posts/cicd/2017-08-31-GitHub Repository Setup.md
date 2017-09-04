---
layout: post
category : misc-Continuous Integration and Continuos Delivery (CICD)
tags : [Miscellanous]
weight: 80
---
{% include JB/setup %}

### Introduction
In this blog, I have shown the step by step guide to setup a git server repository. This repository would be connected from client machine. In this example server and client are installed in the same server so server and client communicates over localhost.

### Git server Installation and Setup
  * Install bitvise SSH server: URL - https://bvdl.s3-eu-west-1.amazonaws.com/BvSshServer-Inst.exe. This software is required to comunicate between client and server over SSH protocol. There are many other ssh server available in the market which could serve the same purpose.
  * Install git from this link https://git-scm.com/download/win. (select the installer as applicable for your system). Git has the capability to act as a server as well as client.

#### Server side setup  
  * Please follow the steps to configure git server with proper permission from the below image. Each step is described below the image <br/>
  <img src="https://user-images.githubusercontent.com/11231867/30012527-6f349638-910e-11e7-948d-db61be57de87.png"/>
  
  * **Step 1:** Open bitvise SSH server Control Panel. Click on **Edit Advanced Settings**
  * **Step 2:** Select **Windows Group(1)** which would show window group type as **Everyone**.
  * **Step 3:** Double click on Everyone as shown in the picture.
  * **Step 4:** Select **Authentication** in the new popup
  * **Step 5:** **Password authentication** and **public key authentication** must be **Allowed**
  * **Step 6 & 7:** Click on **Entry 0 in Windows Groups**. Login Allowed must be checked.
  * **Step 8 & 9:** Click on **Terminal and exec requests** and **Inital terminal shell directory** would be **%HOME%** which means the repository on the server would be created under user's home directory (generally C:\users\<<username>>\)
  * **Step 10:** Create folder structure as shown in the image under %HOME% directory. This location would act as a server location
  * **Step 11 & 12:** Go to the server location and execute **git init --bare** in **Git bash** shell. It would create the required folders as shown in step 12.
  * **Step 13:** Add **** and **** into **Path** variable under **Environment Variables**
  AND you are done with server side setup.
  
#### Client Side setup
  * Please follow the steps in client side to test if the server setup is done perfectly or not. Please note that the scope of this blog is not to describe about the git commands but to test the server setup. In this example, I am using client and server communication over the same system (localhost)
  <img src="https://user-images.githubusercontent.com/11231867/30012600-34d98ce0-910f-11e7-89dd-21755be506b1.png"/>
  
  * **Step 1:** Go to any of your convinent location. Create a folder called gitRepo as shown in the step 1 in the image. Then clone the git repository as created in the above step 13. In the step 1, ~ indicates the %HOME% path in the git server as mentioed in **Step 8 & 9** above.
  * **Step 2:** The above step would create a folder called **test**. Create a file called **test.txt** inside **test** folder and add some text into the file.
  * **Step 3:** Commit the change so the file woould be staged.
  * **Step 4:** The staged file would be checked in now.
  
  Now you can clone the same repository into another location and would see the **test.txt** file available into the new repository.