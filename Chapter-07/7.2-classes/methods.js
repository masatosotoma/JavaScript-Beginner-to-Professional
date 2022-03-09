/* 
You can specify a fucntion in a class,
Method = functions on a class. When defining these methods, you don't use the function keyword,
Just start directly with the name.
*/

// Examples

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  // the method below
  greet() {
    console.log("Hi there! I'm", this.firstname);
  }
}
let p = new Person("Maaike", "van Putten");
p.greet(); // to call the method

//You can specify as many methods on a class as you want.

// Just like functions, methods can also take parameters and return results

class Person2 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  // the method below
  greet() {
    console.log("Hi there! I'm", this.firstname);
  }
  compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
  }
}
let p1 = new Person2("Maaike", "van Putten");
let compliment = p1.compliment("Harry", "hat");
console.log(compliment);
