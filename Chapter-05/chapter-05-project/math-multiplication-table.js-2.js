let blank = [];

let value = 4;

for (z = 1; z <= value; z++) {
  temp = [];
  for (x = 1; x <= value; x++) {
    temp2 = [];
    for (y = 1; y <= value; y++) {
      temp2.push(y * x * z);
    }
    temp.push(temp2);
  }
  blank.push(temp);
}
console.log(blank[1][3][2]);
