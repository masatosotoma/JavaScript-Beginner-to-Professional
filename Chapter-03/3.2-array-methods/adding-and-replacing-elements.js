// push method to add an element to an array
favouriteFruits = ["grapefruits", "orange", "lemon"];
favouriteFruits.push("tangerine");

let lengthOfFavouriteFruits = favouriteFruits.push("lime");
console.log(favouriteFruits);

// splice method to add elements at the certain index
let arrayOfShapes1 = ["circle", "trianble", "recangle", "pentagon"];
arrayOfShapes1.splice(2, 0, "square", "trapezoid");
console.log(arrayOfShapes1);

// To replace some elements that already exists
let arrayOfShapes2 = ["circle", "trianble", "recangle", "pentagon"];
arrayOfShapes2.splice(2, 2, "square", "trapezoid");
console.log(arrayOfShapes2);

// Even the second parameter is higher than the actual array,simply stop as soon as it runs out ofvalues to delete.
let arrayOfShapes3 = ["circle", "trianble", "recangle", "pentagon"];
arrayOfShapes3.splice(2, 12, "square", "trapezoid");
console.log(arrayOfShapes3);

//concat() method to create a new array to concatinate 2 arrays
let array5 = [1, 2, 3];
let array6 = [4, 5, 6];
let array7 = array5.concat(array6);
console.log(array7);

//concat() can also add values to an existed array and create an new array
let array8 = array7.concat(7, 8, 9);
console.log(array8);
