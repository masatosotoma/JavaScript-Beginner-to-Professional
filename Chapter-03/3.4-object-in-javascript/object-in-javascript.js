//objects: very useful and can be used to describe real-life objects, and allow more flexibility in you code

let arr = [0, 1, 2];
console.log(typeof arr); // array is one of a very special types of object

/*
Arrays are objects with indexed properties
All other objects are objects with named properties
Instead of an automatically generated index number, we will give it a custom descriptive name
*/

let dog = {
  // variable named "dog"
  dogName: "JavaScript", // Property: value
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true,
};

console.log(dog);

/*You can access the properties of this object like you do with the array.
You will use the name of the property not the index number*/

let dogColor1 = dog["color"];
console.log(dogColor1);

/*Another way to access the properties, instead of the square brackets,
the property name can be added to the object name with a dot in betwee.*/

let dogColor2 = dog.color;
console.log(dogColor2);
