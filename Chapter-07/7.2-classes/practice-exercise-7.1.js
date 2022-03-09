//Create a class for Person including the constructor for firstname and 
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

//Create 2 variables and assign a value of the new Person object using your friends' first and last names
let friend1 = new Person("Takuya", "Kugai");
let friend2 = new Person("Shunji","Okuhara");

console.log("Hello, "+friend1.firstName+" "+friend1.lastName+".")
console.log("Hello, "+friend2.firstName+" "+friend2.lastName+".")