/*
constructor = a special method that to initialize objects with our class blueprint
- only be one constructor in a class
- contains properties that will be set when initiating the class
*/

// Example of Person class

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let m = new Person("Maaike", "van Putten");

console.log("Hi,", m.firstName);
console.log(m.firstName, m.lastName);

let j = new Person("Jim"); // If you give an argument to only one property,
console.log("Hi", j.firstName, j.lastName); // the other property(lastName)is return as unidentified
