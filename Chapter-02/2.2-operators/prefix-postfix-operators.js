let nr = 2;
console.log(nr++); //Postfix: postfix will execute once the variable is sent, at this point nr is still 2
console.log(nr); //after nr++ was sent in previous line, the nr changed to 3

console.log(++nr); //Prefix: unlike postfix, prefix will execute it before the variable is sent. At this point, it's already 3

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;

console.log(nr1++ + ++nr2 * nr3++);
/*
1. multiplication first = nr3 (postfix,no change yet) * nr2+1 (prefix) = 2*6 = 12
2. nr1((postfix,no change yet) and addition 4 + 12 = 16
*/