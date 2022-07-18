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
