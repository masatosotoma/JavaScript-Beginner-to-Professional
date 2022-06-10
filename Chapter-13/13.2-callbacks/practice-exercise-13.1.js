//Create a function named greet() that takes one argument, fullName.
//That argument should be an array
function greet(fullName) {
  //Output the items of the array into the console interpolated into a greeting message string
  console.log(`Welcome, ${fullName[0]} ${fullName[1]}`);
}
/*
Create a second function that has two arguments: the first one is a string for the user's full name, 
and the second is the callback function.
*/
function processCall(user, callback) {
  //Split the string into an array using the split() method.
  const fullName = user.split(" ");
  //Send the full-name array to the greet() function created in the first step.
  callback(fullName);
}

//Invoke the process of the callback function
processCall("Masato Sotoma", greet);
