//Create a file with the extension JSON name it people.json.
let url = "people.json";

/*Create an HTML file and add a JavaScript file. Within the JavaScript file use people.json as the URL. 
Using fetch connect to the URL and retrieve the data. */

fetch(url)
  /*Since this is a JSON-formatted file, 
once you get the response data it can be formatted into JSON using the .json() method in fetch*/
  .then((response) => response.json())
  .then((data) => {
    //Output the full contents of the data into the console.
    console.log(data);
    data.forEach((person) => {
      /*Using foreach, loop through the items in the data and output the values into the console. 
You can use a template literal and output each value.*/
      console.log(`${person.first} + ${person.last} + ${person.topic}`);
    });
 });


/*Within people.json create an array that contains multiple objects. 
Each item in the array should be an object that has the same structure, 
using first, last, and topic as the property names
Make sure you use double quotes around the property names and values as this is the proper JSON syntax.*/
//Add three or more entries into the array using the same object structure for each item