let age = prompt("How old are you?"); // to create a prompt to ask your age
age = Number(age); // convert the response to number datatype
let message; // declare a variable "message"

/* 
create if statement that message will tell you people older than or equal to 21 can enter and drink alcohol,
people older than or equal to 19 can enter but not drink, otherwise you are not allowed to enter. 
*/
if (age >= 21) {
  message = "Allowed the entry and to purchase alcohol";
} else if (age >= 19) {
  message = "Allowed the entry but not to purchase alcohol";
} else {
  message = "Not allowed to enter";
}
console.log(message);
