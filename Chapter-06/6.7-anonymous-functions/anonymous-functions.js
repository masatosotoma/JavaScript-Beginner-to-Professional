/*
Anonymous functions =  functions without names if you store them inside variables
*/

// Non anonymous function
function doingStuffAnonymously() {
  console.log("Not so secret though.");
}

/*
Anonymous function
To invoke the anonymous function,
you have to store it in a variable in order to call the anonymous function like below
*/

let functionVariable = function () {
  console.log("Not so secret though.");
};

functionVariable(); // when you want to call it, call the variable name
