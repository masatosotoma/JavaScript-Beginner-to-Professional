
//Create a recursive function that counts up to 10
let recursive = function counter(i) {
  console.log(i);
  if (i < 10) {
    return counter(i + 1);
  }
  return;
};
recursive(0);
