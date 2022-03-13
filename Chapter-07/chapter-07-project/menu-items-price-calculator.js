//Create a class that contains the prices of two menu items as private field
class Menus {
  #offer1 = 8;
  #offer2 = 21;
  //Use the constructor in the class to get the argument values (how many of each item are being bought)
  constructor(itemNum1, itemNum2) {
    this.itemNum1 = itemNum1;
    this.itemNum2 = itemNum2;
  }
  //Create a method to calculate and return the total cost
  calTotal() {
    return (this.itemNum1 * this.#offer1) + (this.itemNum2 * this.#offer2);
  }
  get total() {
    return this.calTotal();
  }
}
//Create two or three objects with different combinations of menu selections,
let value1 = new Menus(4, 3);
let value2 = new Menus(5, 6);
let value3 = new Menus(7, 9);

//Output the total cost in the console
console.log(value1.total);
console.log(value2.total);
console.log(value3.total);
