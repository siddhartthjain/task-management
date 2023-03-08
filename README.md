#Employee Task Management Web App

**This web application is built using NestJS and provides an employee with the ability to manage their daily tasks, create new tasks, and change the status of their tasks.**

Features:-
   *Secure authentication and validation for each employee account
   *Create new tasks and assign them to oneself
   *View and manage existing tasks
   *Change the status of assigned tasks


**Development Branches**

This application's development is divided into different branches, each representing a specific software development phase. The following is a list of branches and their purposes:

*master: The initial branch with basic validation .
*branch1 : Branch1 with ehnaced validation and better code structuring with better architecture
*branch2: Branch2 Connecting with Relational database.
*branch3: Branchjwt authentication of users.
*branch4: backendbranch with complete backned with better architecture and flow

 
#Requirements
To run this application, you must have the following:

*Node.js 14.x or higher
*NPM package manager
*Sql Database

#Installation and Usage

Clone this repository to your local machine:
```
git clone https://github.com/username/repo.git
```

Install dependencies:
```
npm install
```
Configure the environment variables:
Create a .env file in the project root and add the following variables:

makefile
Copy code
PORT=3000

JWT_SECRET=secretkey
Start the server:
```
npm run start:dev
```
Copy code
npm start

