arr8 = [2, 6, 7, 8];
let findValue1 = arr8.find(function (e) {
  return e === 6;
});
let findValue2 = arr8.find((e) => e === 10);
console.log(findValue1); // be able to find the element and return 6
console.log(findValue2); // undefined since there is no element equal to 10

// indexOf() method returns the index on which the value is found.
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10); // if it can't find the index, it will return -1
console.log(findIndex, findIndex2);

// you can add a 2nd argument to indexOf(), specifying from which position it should start searching
let findIndex3 = arr8.indexOf(6, 2); // this will return -1 because 6 can't be found from index 2

/* lastIndexOf can be used if there are 2 elements has same values but in the same array. 
It will return the index of the last element of the selected value*/

let animals = ["dog", "horse", "cat", "platypus", "dog"]; // there are 2 "dog" in the same array
let lastDog = animals.lastIndexOf("dog"); // it will return 4 because the dog in the last was index 4
console.log(lastDog);
