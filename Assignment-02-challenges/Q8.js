// **  Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object **

let myBio = {
  name: "Obaid",
  age: 20,
  qualification: "undergraduate",
};
function saveAndRetrieveObject(obj) {
  Object.keys(obj).forEach((key) => {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  });

  const retrievedObj = {};
  Object.keys(obj).forEach((key) => {
    retrievedObj[key] = JSON.parse(localStorage.getItem(key));
  });
  return retrievedObj;
}
const retrievedObj = saveAndRetrieveObject(myBio);
console.log(retrievedObj);
