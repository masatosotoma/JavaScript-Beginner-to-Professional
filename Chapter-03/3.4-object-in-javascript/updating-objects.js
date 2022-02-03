// You can change the value of the properties of the objects in basically two ways

let dog = {
  dogName: "JavaScript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true,
};

// option 1
dog["color"] = "blue"; // object name["property name"] = new value
// option 2
dog.weight = 2.3; // object name.property name = new value
console.log(dog);

// You can also update the data type of the property
dog["age"] = "three"; // the data type was number but change it to string
console.log(dog);

// We can also work with variables to refer to the object's property
let variable = "age";
console.log(dog["age"]);

// We can change the value of the property as a variable
variable = "breed";
console.log(dog["breed"]); // now return chihuahua

//when we update the value accessing this way, it is the exact same as when we would have accessed it with the literal string
dog[variable] = "dachshund";
console.log(dog["breed"]);
