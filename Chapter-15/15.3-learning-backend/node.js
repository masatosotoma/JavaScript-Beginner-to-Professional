/*
Node.js = a very clever runtime environment that has taken the Google JavaScript engine, 
expanded it, and made it possible to run JavaScript on servers, 
interacting with the filesystem protocol and HTTP using JavaScript.

We can use JavaScript for the backend. 
This means that you can write both the backend and the frontend with only one language (along with HTML and CSS)


*/

//Here is an example of some code that will receive HTTP calls that can be written for Node.js:

const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); //header status
    let name = "Rob";
    res.write(`Finally, hello ${name}`); //body
    res.end();
  })
  .listen(8080); //listen to port 8080
console.log("Listening on port 8080... ");

/*
The code above sets up a server that is listening to port 8080, and whenever it gets accessed, 
it will return Finally, hello Rob. We create the server with the createServer method on the imported http module.
We then say what needs to happen for a call to our server. We respond with a 200 status (indicating "OK") 
and write Finally, hello Rob to the response. We then specify the default port 8080 as the listening port.

This example uses the built-in http module for Node.js, which is very powerful for creating APIs. 
This is definitely something that's worth having some experience with. 
Being able to write your own APIs will enable you to write full applications yourself.
This gets even easier when we add Express to the mix.
*/