/* 3 ways to usd loops on objects as soon as you convert the object to an array

1.Convert the keys of the object to an array
2.Convert the values of the object to an array
3.Convert the key-value entries to an array (containing arrays with two elements: object key and object value

*/

// Example below

// to create an object
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

// Use Object.keys() bulit-in function to convert the object to an array

let arryKeys = Object.keys(car);
console.log(arryKeys);

// You can loop the properties of this array using for of loop

for (let key of Object.keys(car)) {
  console.log(key);
}

// If you want to convert the values of the objects to an array using loop
// You can use Object.values() bulit-in function

for (let key of Object.values(car)) {
  console.log(key);
}

// You can loop over the arrays in the same way you loop over any array
// You can use length and index strategy in a regular for loop

let arryKeys2 = Object.keys(car);
for (let i = 0; i < arryKeys2.length; i++) {
  console.log(arryKeys2[i] + ":" + car[arryKeys2[i]]);
}

// Object.entries() = built-in functoin to loop arrays at the same time using for of loop

let arrEntries = Object.entries(car);
console.log(arrEntries);

// You can also loop like below using Object.entries()

for (const [key, value] of Object.entries(car)) {
  console.log(key + ":", value);
}
