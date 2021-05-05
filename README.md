# nodejs
Node JS Courses and Learning

## Courses
- Node.js Crash Course on YT: https://youtu.be/fBNz5xF-Kx4
- https://github.com/bradtraversy/node_crash_course

- Node.js quick course
- https://youtu.be/ENrzD9HAZK4

- Learn Node.js - Full Tutorial for Beginners
- https://youtu.be/RLtyhwFtXQA

## Install vscode and other tools

### vscode
sudo apt update <br/>
sudo apt install software-properties-common apt-transport-https wget <br/>
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add - <br/>
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" <br/>
sudo apt update <br/>
sudo apt install code <br/>

### vim
sudo apt install -y vim  
  
## Update 5th May 2021
## Installing nodejs and npm in vscode on Linux Mint - run within a bash Terminal in vscode
- taken from https://github.com/nvm-sh/nvm  
  
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash  
re-open a new Terminal in vscode - bash run :  
$ nvm --version  
0.38.0  
$ nvm install v10  
$ node -v  
v10.24.1  
$ npm -v  
6.14.12  
  
or you could change the version with :  
$ nvm install v8  
then switch back to v10 with :  
$ nvm use v10  
  
to install a specific version - check with :  
$ nvm ls-remote v8  
then  
$ nvm install v8.8.1  
  

## Install nodejs, npm and nvm on Ubuntu
- taken from https://www.geeksforgeeks.org/installation-of-node-js-on-linux/
  - sudo apt install -y nodejs
  - sudo apt install -y npm
  
## Install nodejs, npm and nvm on Centos

- use this link: https://linuxize.com/post/how-to-install-node-js-on-centos-7/

## Change the version of Node.js
- within vscode or a terminal
  - nvm install 12.16.3
  - nvm use 12.16.3
  - node -v

- within vscode in a terminal run:
  - npm install uuid
  - npm install nodemon
  - npm install express

- taken from https://youtu.be/ENrzD9HAZK4
  - https://github.com/nvm-sh/nvm
  - run: wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash <br/>

## Node.js System Diagram

- About Node.js
  - An asynchronous event-driven JavaScript runtime.
![](./node.js-system.png)
