// **  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". **

for (var num = 1; num <= 100; num++) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(num + " FizzBuzz");
  } else if (num % 3 == 0) {
    console.log(num + " Fizz");
  } else if (num % 5 == 0) {
    console.log(num + " Buzz");
  } else {
    console.log(num);
  }
}
