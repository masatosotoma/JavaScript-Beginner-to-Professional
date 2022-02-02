let nr1 = 2; // number type
let nr2 = "2"; // string type
console.log(nr1 * nr2); // nr2 will automatically convert to number type

console.log(nr1 + nr2);
/*Plus sign can be used to concatenate strings, 
so nr1 will automatically convert to a strying type and concatenate with nr2 which is a string type
that return 22
*/

// String() Method: convert a variable to a string
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

//Number() Method: conver a variable to a number
let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr); // if it cannot be done to number, it will change the value into NaN(not a number)

//Boolean() Method: convert a variable to a boolean
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool); // Return true for everything except for null,undefined,0,an empty string,NaN.
