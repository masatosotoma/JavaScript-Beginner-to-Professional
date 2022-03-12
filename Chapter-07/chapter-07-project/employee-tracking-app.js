//Use first names, last names, and the number of years worked as values in the constructor
class Employee {
  constructor(firstname, lastname, years) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.years = years;
  }
}

//Create two or more people with values
let john = new Employee("John", "Smith", 5);
let paul = new Employee("Paul", "Brown", 8);

employeeList = [john, paul];

console.log(employeeList); // Add the people into an array


// Set up a prototype to return the details of the person's first and last names and how long they've worked at the company.
Employee.prototype.details = function () {
  return this.firstname + " " + this.lastname + " " + this.years + " years.";
};

// Iterate the contents of the array to output the results into the console
employeeList.forEach((names) => {
  console.log(names.details());
});
