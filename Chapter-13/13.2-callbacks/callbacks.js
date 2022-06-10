/*
Callbacks = a function that takes another function as an argument, 
which is then called when the rest of the initial function has finished.
In other word, it's just a function calling a function
*/

//Example

function doSomething(callback) {
  callback();
}
/*The doSomething() function, which is created with the parameter callback, 
is justcalling whatever function is being passed in as an argument.*/

function sayHi() {
  console.log("Hi!");
}

doSomething(sayHi);
/*
We call it using the sayHi() function as an argument, 
so this code snippet is just a very complicated way to get Hi! printed to the console
*/

//Another example:
function judge(grade) {
  switch (true) {
    case grade == "A":
      console.log("You got an", grade, ": amazing!");
      break;
    case grade == "B":
      console.log("You got a", grade, ": well done!");
      break;
    case grade == "C":
      console.log("You got a", grade, ": alright.");
      break;
    case grade == "D":
      console.log("You got a", grade, ": hmmm...");
      break;
    default:
      console.log("An", grade, "! What?!");
  }
}

function getGrade(score, callback) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      console.log(score);
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  callback(grade);
}
getGrade(85, judge);

/*
There are two functions here: judge() and getGrade(). 
You call the functiongetGrade() with two arguments: 85 and the function judge()*/

//Note that when calling the function as an argument, ***we do not include the parantheses***

/*
Callbacks become really valuable in an asynchronous context, 
for example, when one function is still waiting for the results of a call to the database 
before calling the callback function that is going to process the data.
*/

/*
Some JavaScript built-in functions work with this callback principle, for example,
the setTimeOut() and setInterval() functions. 
They will take a function that is executed after a certain time in the case of a timeout and every certain amount of
time for the specified interval
*/

setInterval(encourage, 500);

function encourage() {
  console.log("You're doing great, keep going!");
}



/*
When this is all written as one function with anonymous functions inside, this gets
very indented as well. We call this callback hell or the Christmas tree problem
(because the code gets nested so much, it looks like a Christmas tree on its side).
*/