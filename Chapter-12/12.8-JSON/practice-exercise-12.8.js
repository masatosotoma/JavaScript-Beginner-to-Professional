/*1. Create a JavaScript object that contains JSON formatted data. 
The object should contain at least two items and each item should be an object with at least two paired values.*/

let list = [
  { city: "Toronto", country: "Canada" },
  {
    city: "New York",
    country: "USA",
  },
];
/*Create a function that can be invoked that will loop through each item in the
JavaScript JSON object and output the result to the console. */

function reloader() {
  list.forEach((el) => {
    console.log(`${el.city} = ${el.country}`);
  });
}
//Invoke the function and launch the JavaScript code.
reloader();
