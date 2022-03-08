/*
Object Oriented Program (OOP) = is an important programming paradigm 
wherein code is structured in objects, leading to more maintainable and reusable code.

Class = objects have properties as a blueprint 

*/

// The syntax to create a class that you can use it as a blue print to create other objects

/*
class ClassName {
 constructor(prop1, prop2) {
 this.prop1 = prop1;
 this.prop2 = prop2;
 }
}
let obj = new ClassName("arg1", "arg2");
*/

// Example of a class

class Dog {
  constructor(dogName, weight, colour, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.colour = colour;
    this.breed = breed;
  }
}

let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(
  dog.dogName +
    " is a " +
    dog.colour +
    " " +
    dog.breed +
    " and weighs " +
    dog.weight +
    "kg."
);
