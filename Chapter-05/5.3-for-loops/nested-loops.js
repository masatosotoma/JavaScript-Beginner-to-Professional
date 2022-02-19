/*Loop inside a loop is called a nested loop

the nested while loop looks like below

while (condition 1) {
 // code that gets executed as long as condition 1 is true
 // this loop depends on condition 1 being true
 while (condition 2) {
 // code that gets executed as long as condition 2 is true
 }
}

*/

//example of nested for loops

let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j < 7; j++) {
    arrOfArrays[i].push(j);
  }
}
console.log(arrOfArrays);

// console.table method = you can use it for an array to make it look like table with console

console.table(arrOfArrays);
