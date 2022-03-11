// Inheritance = the concept that classes can have child classes that inherit the properties and methods from the parent class

// Example of car class

class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log("move at ", this.currentSpeed);
  }
  accelerate(amount) {
    this.currentSpeed += amount;
  }
}

// extends keyword = specify that a certain class is the child of another class

//Motorcyle class inheriting from the vehicle class
class Motorcycle extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed); // super keyword = calling the constructor from the parent
    this.fuel = fuel;
  }
  doWheelie() {
    console.log("Driving on one wheel!");
  }
}

// Calling super() is not optional, you must do it when you are in a class that is inheriting from another class

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

// If there are getters and setters in the parent class, they are inherited by the child class as well.
// This way you could influence which properties could be fetched and changed outside our class