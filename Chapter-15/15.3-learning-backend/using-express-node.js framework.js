/*
Node.js is not a framework, nor a library. It is a runtime environment. 
This means that it can run and interpret the JavaScript code written. 

Express = Most popular frameworks for Node.js

you will have to set up Node.js first, 
then add the Express module (if you are using NPM, npm install express will do) 
and run it using the node nameOfRootFile.js command
*/

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello Express!");
});

app.listen(3000, () => {
  console.log("Express app at http://localhost:3000");
});
