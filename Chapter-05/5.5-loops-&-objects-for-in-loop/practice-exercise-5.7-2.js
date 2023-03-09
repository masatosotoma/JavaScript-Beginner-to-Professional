// 1. Create a simple object with three items in it.
let car = {
  color: "white",
  year: 2020,
  make: "Honda",
};

/*2. Using the for in loop, 
get the properties' names and values from the object and output them into the console.*/
for (let item in car) {
  console.log(car[item]);
}

/*3. Create an array containing the same three items. 
Using either the for loop or the for in loop, output the values from the array into the console.*/

let myCar = [{ color: "white", year: 2020, make: "Honda" }];
for (let item in myCar) {
  console.log(myCar[item]);
}
