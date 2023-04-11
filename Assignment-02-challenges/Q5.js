// **  Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color. **

function changeBG(elementRef, bgColor) {
  elementRef.style.backgroundColor = bgColor;
}
const htmlElem = document.getElementById("p-elem");
changeBG(htmlElem, "lightgrey");

// HTML to test :
/*
<!DOCTYPE html>
<html>
  <head>
    <title>Test HTML</title>
    <script src="Q5.js" defer></script>
  </head>
  <body>
    <h1>Testing Q5 change in background color!</h1>
    <p id="p-elem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex quia
      laboriosam tempora incidunt facilis in dicta officiis animi voluptatum,
      cum molestias, ipsam esse praesentium blanditiis minima deserunt explicabo
      impedit?
    </p>
  </body>
</html>
*/
