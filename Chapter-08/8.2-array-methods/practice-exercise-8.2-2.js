//1. Create an array of names of people. Make sure you include duplicates. The exercise will remove the duplicate names.
let array = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];

/*2. Using the filter() method, assign the results of each item from the array as arguments within an 
anonymous function. Using the value, index, and array arguments, return the filtered result. 
You can set the return value to true temporarily as this will build the new array 
with all the results in the original array.*/

/*3. Add a console.log call within the function that will output the index value of 
the current item in the array. Also add the value so you can see the results of the item value 
that has the current index number and the first matching result from the array's index value. */

/*Using indexOf() the current value returns the index value of the item
and applies the condition to check to see if it matches the original index value. 
This condition will only be true on the first result 
so all subsequent duplicates will be false and not get added to the new array.
false will not return the value into the new array. 
The duplicates will all be false since the indexof() only gets the first match in the array.
 */

function checkDupe(val, index, arr) {
  console.log(val, index, array.indexOf(val));
  return arr.indexOf(val) === index;
}

let filteredArr = array.filter(checkDupe);

console.log(filteredArr);
