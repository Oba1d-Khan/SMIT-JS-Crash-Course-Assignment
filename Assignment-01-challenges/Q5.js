//  **Write a JavaScript program which computes the average marks of thefollowing students Then, this average is used to determine the corresponding grade. **
let totalMarks = 100;
let englishMarks = +prompt("Enter English marks out of 25: ");
let mathshMarks = +prompt("Enter Maths marks out of 25: ");
let phyMarks = +prompt("Enter Physics marks out of 25: ");
let compMarks = +prompt("Enter Computer marks out of 25: ");

let obtMarks =
  ((englishMarks + mathshMarks + phyMarks + compMarks) / totalMarks) * 100;

console.log(obtMarks);

if (obtMarks <= 60) {
  console.log("Work Hard! You got Grade: F ");
} else if (obtMarks <= 70) {
  console.log("Satisfactory! You got Grade: D ");
} else if (obtMarks <= 80) {
  console.log("Not Bad! You got Grade: C ");
} else if (obtMarks <= 90) {
  console.log("Good! You got Grade: B ");
} else {
  console.log("Congrats! You got Grade: A ");
}
