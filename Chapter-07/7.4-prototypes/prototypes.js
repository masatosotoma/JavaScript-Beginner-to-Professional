/* 
A prototype = the mechanism that makes it possible to have objects.

When nothing is specified when creating a class, the objects inherit from 
the Object.prototype prototype.
You can consider it the base object that is always on top of the inheritance tree and always present in our objects
*/

// How to access prototype property on all classes
//  ClassName.prototype

//Example

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there!");
  }
}

// How to add a function to the class above using prototype

Person.prototype.introduce = function () { // like it's defined the class with the function introduce
  console.log("Hi, I'm ", this.firstname);
};

// You can use prototype to add properties or methods to an object like below

Person.prototype.favouriteColor = "green"; //like it's defined the class with a favorite color holding a default value

let p = new Person("Maria", "Saga");
console.log(p.favouriteColor);
p.introduce();

/* 
the methods and properties defined via prototype are really as if they were defined in the class above
It means that overwriting them for a certain instance doesn't overwrite them for all instances

You can expand existing objects like this and even expand existing objects conditionally.
It's important to know that the JavaScript built-in objects have prototypes and inherit from Object.prototype.
*/


