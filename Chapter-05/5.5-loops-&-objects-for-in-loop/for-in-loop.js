/* for in loop = another way to manipulate objects with loops 
for in loop is similar to for of loop
*/

// example (to create objects and use for in loop to show the properties)

let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  colour: "black",
};

// to shows properties(prop) values in the car object
for (let prop in car) {
  console.log(car[prop]);
}

// if you only want to show the property names, put the prop in the console.log square bracket

for (let prop in car) {
  console.log(prop);
}
