// Output the decodeURIComponent() for the string How's%20it%20going%3F to the console

// Add the strings as variables in the JavaScript code
let encodedStr = "How's%20it%20going%3F";

// Using encodeURIComponent() and decodeURIComponent() output the results into the console

let encoded_Str = encodeURIComponent(encodedStr);
console.log("Encoded:", encoded_Str);
let decoded_Str = decodeURIComponent(encodedStr);
console.log("Decoded:", decoded_Str);

//Create a web URI with request parameters 
let webUri = "http://www.basescripts.com?=Hello World";

//Encode and output the web URI into the console
let encode_web = encodeURI(webUri);
console.log(encode_web);