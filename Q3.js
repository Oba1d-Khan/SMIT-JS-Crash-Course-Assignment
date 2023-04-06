//  ** Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console. **

let num1 = +prompt("Enter an integer:");
let num2 = +prompt("Enter another integer:");
let num3 = +prompt("Enter another integer:");
let num4 = +prompt("Enter another integer:");
let num5 = +prompt("Enter another integer:");

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
  console.log("Value of num1 is greater : ", num1);
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
  console.log("Value of num2 is greater : ", num2);
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
  console.log("Value of num3 is greater : ", num3);
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
  console.log("Value of num4 is greater : ", num4);
} else {
  console.log("Value of num5 is greater : ", num5);
}
