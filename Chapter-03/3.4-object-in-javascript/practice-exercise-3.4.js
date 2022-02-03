// to create my car object
let myCar = {
  make: "Honda",
  model: "civic",
  year: 2018,
  automatic: true,
  type: "sedan",
};

// To add a new property of color
let variable = "color";
myCar[variable] = "white";
console.log(myCar);

// To add an another new property of forSale
let variable2 = "forSale";
myCar[variable2] = false;
console.log(myCar);

// To output the make and model into console
console.log("make: " + myCar.make + " | " + "model: " + myCar.model);

// To output the value of forSale
console.log("forSale: " + myCar.forSale);
