/*
Properties = sometimes also called fields, hold the data of the class
*/

class Person {
  // 2 properties
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Properties can be added or removed just like you do for objects
// properties can be accessed from outside the class

let p = new Person("Maaike", "van Putten");
console.log("Hi", p.firstname); // accessing the properties outside the class

// how to add properties that aren't accessible from outside. We prefix them with a # symbol

class Person2 {
  #firstName2;
  #lastName2;
  constructor(firstname2, lastname2) {
    this.#firstName2 = firstname2;
    this.#lastName2 = lastname2;
  }
}

let p2 = new Person2("Maria", "Saga");
console.log(p2.firstname2);

// Example:  only create objects with names starting with an "M";

class Person3 {
  constructor(firstname3, lastname3) {
    if (firstname3.startWith("M")) {
      this.#firstname3 = firstname3;
    } else {
      this.#firstname3 = "M" + firstname3;
    }
    this.#lastname3;
  }
}

let p3 = Person3("kay", "moon");

// In this kind of case, you can use getters and setters 