// 1. Add the strings as variables in the JavaScript code
let val = "How's%20it%20going%3F";

// 2. Using encodeURIComponent() and decodeURIComponent() output the results into the console
let encodedVal = encodeURIComponent(val);
console.log(encodedVal);

let decodedVal = decodeURIComponent(val);
console.log(decodedVal);

// 3. Create a web URI with request parameters http://www.basescripts. com?=Hello World";
let webUri = "http://www.basescripts. com?=Hello World";

// 4. Encode and output the web URI into the console

let encodedUri = encodeURI(webUri);
console.log(encodedUri);
