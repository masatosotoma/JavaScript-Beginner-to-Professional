//When you want to convert null or an empty string to 0(number), you can use the convert methods like below

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);

//Anything that can't be convert to a number, it will evaluate as NaN(not a number)

let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2); 
console.log(strToBool2, typeof strToBool2); //Although string says fales,Boolean method convert all strings to true value

let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool); //Because the string value is empty, the boolean method convert the string to false

// other examples for how to use Number() method
let nr1 = 2;
let nr2 = "2";
console.log(nr1 + Number(nr2)); // nr2 conver to number type, so it will be 2+2=4