// ** . Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested. **

function recursiveFunc(arr, item) {
  if (arr[0] === item) {
    return true;
  } else if (arr.length > 0) {
    return recursiveFunc(arr.slice(1), item);
  } else {
    return false;
  }
}

let myArr = [2, 4, 6, 8, 10];
console.log(recursiveFunc(myArr, 0));
console.log(recursiveFunc(myArr, 6));
console.log(recursiveFunc(myArr, 2));
console.log(recursiveFunc(myArr, 11));
