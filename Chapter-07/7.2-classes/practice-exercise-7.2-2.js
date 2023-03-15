/*1. Using the Person class from Practice exercise 7.1, 
add a method called fullname, which returns the concatenated value of firstname and lastname when invoked.*/
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  callFullName() {
    console.log(this.firstName + " " + this.lastName);
  }
}

// 2. Create values for person1 and person2 using two friends' first and last names.
let person1 = new Person("Claire", "Zhang");
let person2 = new Person("Rankine", "Xuen");

// 3. Using the fullname method within the class, return the full name of one or both people.
person1.callFullName();
person2.callFullName();
