// **   Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.  **

function addListItem(listText) {
  const ulELem = document.getElementById("unordered-list");
  const listELem = document.createElement("li");
  listELem.textContent = listText;
  ulELem.appendChild(listELem);
}
addListItem("I'm a list item in an unordered list !");
addListItem("List item 2");
addListItem("List item 3");

// HTML to test code :
/*
<!DOCTYPE html>
<html>
  <head>
    <title>Test HTML</title>
    <script src="Q4.js" defer></script>
  </head>
  <body>
    <h1>Testing Q4 list element!</h1>
    <ul id="unordered-list"></ul>
  </body>
</html>
*/
