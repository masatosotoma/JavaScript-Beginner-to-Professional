// function keyword to create a function
/* the syntax will be like below

function nameOfTheFunction() {
 //content of the function
}


the function above can be called like below

nameOfTheFunction();

*/

// Example: the function that asks your name and then greets you

function sayHello() {
  let you = prompt("What's your name");
  console.log("Hello", you + "!");
}

// if you call this function, you can call like this

sayHello();

// Example of a variable containing function

let varContainingFunction = function () {
  let varInFunction = "I'm in a function";
  console.log("hi there!", varInFunction);
};

varContainingFunction();