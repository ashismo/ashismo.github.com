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
* Create **Security group** under **Network Security** available in the left panel to allow inbound connection (e.g. SSH connection using putty) to the server.
<img src="https://cloud.githubusercontent.com/assets/11231867/9568365/0b9528a0-4f65-11e5-847b-670dca610433.PNG"/>
* Create **instance** under **Instances** in the left panel. (Just follow the default selection). Once the instance is created then a server will get started automatically
<img src="https://cloud.githubusercontent.com/assets/11231867/9568348/a8c840f4-4f64-11e5-9fe2-2b4b3c8d57f3.PNG"/>
