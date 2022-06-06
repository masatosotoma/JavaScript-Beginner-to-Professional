/*
JSON.parse() = function that a JavaScript string can be converted to a JSON object
Data that is received from another place is always of value string, 
so in order to treat it as an object, it needs to be converted
*/

//Example:

let str = '{"name": "Maaike", "age": 30}';
let obj = JSON.parse(str);
console.log(obj.name, "is", obj.age); //After parsing, it can be treated as an object

/* The other way around=>
JSON.stringify() = method that  Objects can be converted to a JSON string
It converts the object or value fromJavaScript to a JSON string
*/

let dog = {
  name: "wiesje",
  breed: "dachshund",
};
let strdog = JSON.stringify(dog);
console.log(typeof strdog);
console.log(strdog);

/*
The type of strdog becomes a string because it is being stringified. 
And it no longer has the properties name and breed. These will be undefined
*/
