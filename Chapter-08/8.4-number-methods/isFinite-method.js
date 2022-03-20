// isFinite() = Method for number datetypes. To return false for NaN, Infinity and undefined. Return true for all other values

let x = 3;
let str = "finite";
console.log(isFinite(x)); // it's a finite numbe so returns true
console.log(isFinite(str)); // it return false because it's not a number(NaN)
console.log(isFinite(Infinity)); // it return false because it's infinity
console.log(isFinite(10 / 0)); // it return false because 10 divided by 0 returns infinity
