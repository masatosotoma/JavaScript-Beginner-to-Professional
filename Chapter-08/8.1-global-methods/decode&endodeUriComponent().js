/* 
decodeUriComponent() and encodeUriComponent()
= you would need the = and & in the variable part encoded as well
*/

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);

// Unlike decode/encodeUri(), the decode/encodeUriComponent() will convert all the characters including  / , ? : @ & = + $ #