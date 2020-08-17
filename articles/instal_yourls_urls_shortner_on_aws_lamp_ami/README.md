# Deploy YOURLS url shortener on AWS LAMP Linux AMI 1 EC2 sever
This is `how to` guide on deploying (YOURLS)[https://yourls.org/], your own url shortener on AWS EC2 instance with (Amazon Linux AMI)[https://aws.amazon.com/amazon-linux-ami/] and (LAMP server)[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html].

At the end of this article you will have running url shortening service. We will launch and AWS Linux AMI instance, install and configure Apache 2 httpd web server, PHP, MySQL database, YOURLS php script, and configure Cloudflare DNS.

## 1. Launch an instance AWS EC2 instance. 
Navigate to the (AWS console)[console.aws.amazon.com], then `service`, and `EC2`. On the EC2 console, on the left navigation panel, click on `instances`. Here you will find big blue button with `Launch Instance` written on it. Click on it. `Launch Instance Wizard` will appear. 

* Step 1 is to choose am Amazon Machine Image (AMI). 
Search for `Amazon Linux AMI`. It should be there, so click the `Select` blue button. 
* Step 2 is to choose an Instance Type. 
Choose the `Free tier eligible` one. It is `t2.micro` type instance. Click on `Next: Configure Instance Details`.
* Step 3, Configure Instance Details.
We need to create a Role to have an access to the instance. Find *IAM role* row, click on the `Create new IAM role`. YOu will be redirected to the `IAM Management Console` 
* Step 4, add storage. 
Use default amount of storage. Keep it under the 'free tier eligible' amount. 8 rb of storage is enough for me. 
* Step 5, add Tag.
Add an optional tag (key, value). It is latter easier to find and sort this instance on different services of AWS using assigned tag. Click add tag and type in `yourls` and `yourls url shortener`.
* Step 6, Configure Security Group.
Click `Add Rule`. in `Type` column dropdown choose `HTTP`.
Click `Add Rule` again and choose `HTTPS` similarly.
This way, you will have 3 rules here for SSH, HTTP, and HTTPS access of the instance. 
* Step 7, Launch!
Review the setting, and click in `Launch` blue button. We will be prompter to choose key-pair for SSH access for this instance. We will not SSH to this server, so we will choose `Proceed without a key pair` and `Launch Instances`.

## 2. Configure the LAMP Server.
Navigate to the (EC2 Console)[console.aws.amazon.com/ec2] and under `Running Instances` you should see our freshly created `t2.micro` instance.

* Connect to the Instance.
Right click on the instance and choose `Connect`. Choose `Session Manager` in *Connection Method*. 





Instal php mysql
Upload yourls
Configure Yourls
Configure apache2 httpd
Configure DNS
Done
