/* When you want to do the exact same thing for multiple cases,
 you can simply combine them by putting them on top of each other like below */

grade = "B";

switch (grade) {
  case "F":
  case "D":
    console.log("You've failed!");
    break;
  case "C":
  case "B":
    console.log("You've passed!");
    break;
  case "A":
    console.log("Nice!");
    break;
  default:
    console.log("I don't know this grade.");
}

//F & D has the same result, and both B,C have also the same result.
//Only A has the unique result.
