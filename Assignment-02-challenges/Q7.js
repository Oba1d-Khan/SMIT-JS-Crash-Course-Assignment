// ** Write a function that retrieves an object from localStorage. The function  should take one argument, which is a string representing the key used to store the object. The function should return the object. **

let myBio = {
  name: "Obaid",
  age: 20,
  qualification: "undergraduate",
};
let arrayBio = [];
arrayBio.push(myBio);

let storage = JSON.stringify(arrayBio);
localStorage.setItem("arrayBio", storage);

function retrieveData(key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
}

const retrievedData = retrieveData("arrayBio");
console.log(retrievedData);
