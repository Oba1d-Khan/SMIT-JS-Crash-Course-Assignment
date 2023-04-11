// ** Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store. **

function saveObject(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

saveObject("name", "Obaid");
