<h1>Employee Task Management Web App</h1>

**This web application is built using NestJS and provides an employee with the ability to manage their daily tasks, create new tasks, and change the status of their tasks.**

**Features:-**
  
   -Secure authentication and validation for each employee account
   <br>
   -Create new tasks and assign them to oneself
   <br>
   -View and manage existing tasks
   <br>
   -Change the status of assigned tasks
   <br>


**Development Branches**

This application's development is divided into different branches, each representing a specific software development phase. The following is a list of branches and their purposes:

<ol>
1.master: The initial branch with basic validation.
  <br>
2.branch1 : Branch1 with ehnaced validation and better code structuring with better architecture
  <br>
3.branch2: Branch2 Connecting with Relational database.
  <br>
4.branch3: Branchjwt authentication of users.
  <br>
5.branch4: backendbranch with complete backned with better architecture and flow
  <br<
</ol>

 <hr>
<h1>Requirements</h1>
To run this application, you must have the following:
<ol>
1.Node.js 14.x or higher
  <br>
2.NPM package manager
  <br>
3.Sql Database
  <br>
</ol>
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

