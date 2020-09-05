# nodejs
Node JS Courses and Learning

## Courses
- Node.js Crash Course on YT: https://youtu.be/fBNz5xF-Kx4
- https://github.com/bradtraversy/node_crash_course

## Install vscode and other tools

### vscode
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code

### vim
sudo apt install -y vim

## Install nodejs, npm and nvm
- taken from https://www.geeksforgeeks.org/installation-of-node-js-on-linux/
  - sudo apt install -y nodejs
  - sudo apt install -y npm

- within vscode in a terminal run:
  - npm install uuid
  - npm install nodemon

- taken from https://youtu.be/ENrzD9HAZK4
  - https://github.com/nvm-sh/nvm
  - run: wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
