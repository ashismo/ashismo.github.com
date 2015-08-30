---
layout: post
category : aws-Instance Setup
tags : [AWS]
weight: 100
---
{% include JB/setup %}

#### AWS instance setup


* Signup into aws.amazon.com with credit card information and other required validation.
* Select basic free package and default instance
* Once you are done with the account creation then select EC2 amazon services
* Create **key pairs** under Network **Security available** in the left panel. It will download a .pem file. Load this file to create private key (.ppk) file using PuTTYgen (If not available then download from internet) as shown below. Use this .ppk file to login to your instance once it is running.
<img src="https://cloud.githubusercontent.com/assets/11231867/9565907/9c84bfda-4f09-11e5-888c-d1a652484eb8.PNG"/>
* Create **Security group** under **Network Security** available in the left panel
<img src="https://cloud.githubusercontent.com/assets/11231867/9565907/9c84bfda-4f09-11e5-888c-d1a652484eb8.PNG"/>