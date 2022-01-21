//typof operator returns the type of variable

testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof testVariable;

//Other examples

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("Unique");
let undef = undefined;
let unknown = null;

console.log(variableTypeTest1);
console.log(variableTypeTest2);

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown); // typeof return unknown object for null,but null is not object. null is a primitive.
