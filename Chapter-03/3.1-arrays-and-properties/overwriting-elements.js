cars = ["Toyota", "Renault", "Volkswagen"];
cars[0] = "Tesla"; // overwrite the index 0 to the new value

console.log(cars[0]);
console.log(cars); // it returns the all elements of the array.

cars[3] = "Kia"; // overwrite an element that doesn't exist, means it will write the new index and new value
cars[-1] = "Fiat";

console.log(cars[3]);
console.log(cars[-1]);
console.log(cars);
