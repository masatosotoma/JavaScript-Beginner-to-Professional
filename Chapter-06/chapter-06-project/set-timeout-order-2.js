//Use the arrow format to create functions that output the values one and two to the console.

let one = () => {
  console.log("one");
};

let two = () => {
  console.log("two");
};

//Create a third function that outputs the value three to the console, and then invokes the first two functions
let three = () => {
  console.log("three");
  one();
  two();
};
/*Create a fourth function that outputs the word four to the console 
and also use setTimeout() to invoke the first function immediately and then the third function.*/
let four = () => {
  console.log("four");
  setTimeout(one);
  three();
};

four();
