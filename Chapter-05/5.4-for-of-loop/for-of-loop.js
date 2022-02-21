/* for of loop =  to iterate over the elements of the array
the syntax looks like below

let arr = [some array];
for (let variableName of arr) {
 // code to be executed
 // value of variableName gets updated every iteration
 //

*/

//Example:
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name of names) {
  console.log(name);
}

//the limitation of this is that you cannot modify the array, but you could write all the elements to a database or a file etc
//the advantage of this loop is to not stuck in an infinite loop or skip values