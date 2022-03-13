/* 
URI (unifrom resource identifier) = an identifier of a certain resource
URL (uniform resource locator) = subcategory of URI that is not only an identifier, but also holds the information on how to access it

- An example of when you'd need this is when you are sending variables over the URL using the get method in a form

query parameters = the variables that you are sending via the URL 

spaces in the URL are decoded to %20
all characters can be converted to their hexcode.

*/

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

// encodeURI() = global method to convert the special characters to the hex code (exp: space => %20)
// decodeURI() = global method to convert the hex code to the special charaters 

/* 
this encode and decode do not take special characters into account, and therefore leave them in the URI. 
Colons, question marks, equal signs, slashes, and ampersands can be expected.
*/