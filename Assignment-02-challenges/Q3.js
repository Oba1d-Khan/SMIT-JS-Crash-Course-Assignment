// **  Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element. **

function addParagraph(paraText) {
  const p = document.createElement("p");
  p.textContent = paraText; // or  p.innerText = paraText;
  document.body.appendChild(p);
}
addParagraph("I'm a new paragraph element!");

// HTML to test :

/* < !DOCTYPE html >
<html>
  <head>
    <title>Test HTML</title>
    <script src="Q3.js" defer></script>
  </head>
  <body>
    <h1>Testing Q3 new paragraph!</h1>
  </body>
</html>
*/
