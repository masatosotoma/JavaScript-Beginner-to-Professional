/* 
To Create a class that contains properties for different animal species and the sound that each species makes
 and create two (or more) animals:
*/

class Animal {
  constructor(species, sounds) {
    this.species = species;
    this.sounds = sounds;
  }
  print() {
    console.log(this.species + " " + this.sounds);
  }
}
Animal.prototype.eat = function () { //Add a prototype with another action for the animal.
  return this.species + " is eating";
};

let tiger = new Animal("tiger", "gwrr");
let wolf = new Animal("wolf", "woof");

// Output an entire animal object into the console.
tiger.print();
console.log(wolf.eat());
console.log(wolf);
