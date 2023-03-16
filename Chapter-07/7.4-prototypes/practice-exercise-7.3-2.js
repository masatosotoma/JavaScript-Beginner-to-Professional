// 1. Create a method that prints a given animal and its sound.

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  intro() {
    console.log("Animal name: " + this.name + " " + this.sound);
  }
}

// 2. Add a prototype with another action for the animal.
Animal.prototype.eat = function (category) {
  console.log(this.name + " eats " + category);
};

let dog = new Animal("Dog", "bark");

// 3. Output an entire animal object into the console.
dog.intro();
dog.eat("dog food");
