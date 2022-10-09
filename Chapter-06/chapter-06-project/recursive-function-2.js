/*Create a recursive function that counts up to 10. 
Invoke the function with differentstart numbers as the arguments that are passed into the function. 
The function should run until the value is greater than 10.*/

function getRecursive(num) {
  console.log(num);
  if (num < 10) {
    getRecursive(++num);
  }
  console.log(num);
}
getRecursive(0);
