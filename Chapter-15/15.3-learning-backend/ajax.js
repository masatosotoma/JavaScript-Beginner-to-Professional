/*
AJAX stands for Asynchronous JavaScript and XML, which is a misnomer, 
because nowadays it is more common to use JSON instead of XML.

AJAX is not a programming language or a library, 
it is a combination of the built-in XMLHttpRequest object in the browser and the JavaScript language.
*/

//Here is an example of calling the backend using AJAX:

let xhttp = new XMLHttpRequest();
let url = "some valid url";
xhttp.load = function () {
  if (this.status == 200 && this.readyState == 4) {
    document.getElementById("content").innerHTML = this.responseText;
  }
};
xhttp.open("GET", url, true);
xhttp.send();

//This is not a working example, because there is no valid URL

/*
More common now is the use of the Fetch API for AJAX requests. 
This is similar to what we can do with XMLHttpRequest but it provides a more flexible and powerful set of features
*/

//Below we get the data from the URL, convert it to JSON with the json() method, and output it to the console:

let url1 = "some valid url";
fetch(url1)
  .then((response) => response.json())
  .then((data) => console.log(data));

/*
The Fetch API works with promises, which should look familiar at this point. 
So after the promise is resolved, a new one gets created with then, and when that one is resolved, 
the next then gets executed
*/