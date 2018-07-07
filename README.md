Forked from: https://github.com/ahfarmer/calculator


Calculator
---
Simple React + Redux calculator with Express api server.
This project is for learning purposes only, used as a base project to add features / refactoring.

The project
---
This project is a simple React + Redux app. - running on port 3000<br>
The Api server is an express app (src/server.js) - running on port 3001<br>
proxy is used to connect to the server thus calling `/api/test` will be forwareded to the express server.<br>
For convenience the app has a very simple async loading mechanizm implemented in the main App constructor.<br>

How to run the project
---
```shell
git clone https://github.com/reisel/calculator.git
cd calculator
npm install
npm start
```