/*demonstrate using the array-like arguments object and extracting
values from it. Using the arguments length property, we will iterate through the
items in the arguments and return the last item in the list:
*/

//Create a function without any parameters
function any() {
  //Set up a variable called lastOne with a blank value
  let lastOne = "";
  //Create a loop to iterate through the length of the arguments object.
  for (i = 0; i < arguments.length; i++) {
    //set lastOne to the current value of the argument using the index of i to return the argument value
    lastOne = arguments[i]; // The argument will have an index value
    //Return the value of lastOne,
  }
  return lastOne;
}
//Output the response from the function, pass a number of arguments into the function
console.log(any("First", "Second", "Third"));
