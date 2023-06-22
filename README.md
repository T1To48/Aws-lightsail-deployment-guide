MERN TodoApp Deployment Guide on Amazon Lightsail with Nginx Reverse Proxy

Welcome to the deployment guide for the MERN TodoApp on Amazon Lightsail with Nginx reverse proxy! This guide will walk you through the necessary steps to deploy the full-stack TodoApp application, built with the MERN (MongoDB, Express, React, Node.js) stack, on an Amazon Lightsail instance. Additionally, we will utilize Nginx as a reverse proxy server to handle incoming requests and efficiently route them to our TodoApp.

this link contains the exact todoapp we are going to deploy 
compare it with ur deploy to make sure everything is working like it should 
https://redux-rtk-query-todo-app.onrender.com/

Let's get started with the deployment process and have your MERN TodoApp up and running on Amazon Lightsail in no time!

Note: This guide assumes you have basic knowledge of Amazon Lightsail, Nginx, and the MERN stack. If you're new to any of these technologies, we recommend referring to their respective documentation for a better understanding.

Happy deploying!

## 1 open new instance in AWS-lightSail
choose the following:  
A.LOCATION USA  
B.LINUX  
C.(OS ONLY)  
D.UBUNTU  

## 2 open the instace's Terminal  
## 3 install Nodejs   
A.run :  
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs  
B. when it finishes press enter  
## 4 check if node is installed  
node -version  
## 5 clone this repo   
git clone https://github.com/T1To48/aws-todo-app-deployment.git  
## 6 configure the Cloned repo folder  
# Server  
A.create config.env file:  
 touch aws-todo-app-deployment/server/config/config.js  
 B. open the config.env to edit :  
 sudo nano aws-todo-app-deployment/server/config/config.js  
 C.add this to the config.env  and add ur own mongDb credentials  

NODE_ENV=development    
PORT=8080            
MONGO_URI=!!!your MongoDb credentials!!!  

D.press ctrl + x and then press the key "y" to save the changes  
E.in aws-todo-app-deployment folder run:  
npm install  

#Client  
A.copy ur AWS instance's public id   
B.run the following to add the server baseurl in the client:  
sudo nano aws-todo-app-deployment/client/src/features/api/apiSlice.jsx  
C.ur baseUrl should be :  
baseUrl: "http://"public ip"/todo-storage/v1"  
EXAMPLE :  
baseUrl: "http://3.89.98.227/todo-storage/v1"  
D.Save the changes and exit   
E.in aws-todo-app-deployment/client run :  
npm install  
npm run build  
F.to check if the build was made successefully  
in aws-todo-app-deployment/client run:  
ls  
G. Make sure a folder called dist is there...  

## 7 make sure the server is working without problems  
run:  
npm run dev  
then in terminal u will see:  
server is running in development Mode, & made on port 8080  
Mogbo DB is connected ac-95kfsiu-shard-00-01.invemg3.mongodb.net  

## 8 install and configure PM2  
A.cd  
B.sudo npm install -g pm2  
C.pm2 start /home/ubuntu/aws-todo-app-deployment/server/server.js  
D.pm2 status => to view pm2 dashboard  

## 9 Enable & allow  the firewall  
A.sudo ufw enable  
B.sudo ufw status => to view the firewall status  
C.run the following commands to allow firewall ports  
sudo ufw allow ssh   => to allow on (Port 22)  
sudo ufw allow http  => to allow on (Port 80)  
sudo ufw allow https => to allow on (Port 443)  
D.sudo ufw status => to view the firewall status  

## 10 install nginx  
A.sudo apt install nginx  

## 11 configure nginx  
A. to access the nginx config file run:  
sudo nano /etc/nginx/sites-available/default  
B.in the file find:  
 root /var/www/html;  
C.change to :  
/home/ubuntu/aws-todo-app-deployment;  
D.in the file find:  
server_name _;  
E.change to :  
server_name "the instance public ip";  
for example :  
server_name 3.89.98.227;  
F.in the file find:   
_____________________________________________________  
location / {  
First attempt to serve request as file, then  
as directory, then fall back to displaying a 404.  
try_files $uri $uri/ =404;  
}  
_____________________________________________________  
G. REPLACE it with:  
_____________________________________________________  
location / {  
        proxy_pass http://localhost:8080;  
        proxy_http_version 1.1;  
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection 'upgrade';  
        proxy_set_header Host $host;  
        proxy_cache_bypass $http_upgrade;  
    }  
____________________________________________________  

## 12 to check if nginx config is working run:  
sudo nginx -t  

## 13 restart the nignx server  
sudo service nginx restart  

## 14  
open your browser, go to :  
http://"you public ip"  
for example:  
http://3.89.98.227  



** this link contains the exact todoapp we are going to deploy   
compare it with ur deploy to make sure everything is working like it should   
https://redux-rtk-query-todo-app.onrender.com/  











