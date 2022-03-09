// to create a method of getting the full names
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
// Create values for person1 and person2 using two friends' first and last names

let friend1 = new Person("Takuya", "Kugai");
let friend2 = new Person("Shunji", "Okuhara");

// Using the fullname method within the class, return the full name of one or both people.

let fullName1 = friend1.getFullName();
let fullName2 = friend2.getFullName();
console.log(fullName1);
console.log(fullName2);
