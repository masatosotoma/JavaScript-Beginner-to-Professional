arr1 = new Array[("purple", "green", "yellow")](); // not a good way to create an array unless it's needed to do.
arr2 = ["black", "orange", "pink"]; // This is right way to create an array

arr3 = new Array[10](); // array with number but not a good way,
arr4 = [10]; // array with number

let arr = ["hi there", 5, true]; // arrays can hold any type of variables and can have mixed.

const arrayA = ["Hi there"];
arr[0] = "New value"; // to redefine the new value

console.log(arr1);
console.log(arr2);

console.log(arr3);
console.log(arr4);

console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

console.log(arr[0]);
