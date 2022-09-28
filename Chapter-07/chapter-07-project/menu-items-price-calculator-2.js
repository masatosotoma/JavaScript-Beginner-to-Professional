class menu {
  //Create a class that contains the prices of two menu items as private field declarations.
  constructor(numOfItem1, numOfItem2, costOfItem1, costOfItem2) {
    this.numOfItem1 = numOfItem1;
    this.numOfItem2 = numOfItem2;
    this.costOfItem1 = costOfItem1;
    this.costOfItem2 = costOfItem2;
  }
  calculateTotalCost() {
    return (
      this.numOfItem1 * this.costOfItem1 + this.numOfItem2 * this.costOfItem2
    );
  }
  get total() {
    return this.calculateTotalCost();
  }
}

let red = new menu(20, 10, 100, 150);
let blue = new menu(200, 150, 11, 33);
let green = new menu(125, 248, 18, 62);

console.log(red.total);
console.log(blue.total);
console.log(green.total);
console.log(red.total + blue.total + green.total);
