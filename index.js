var button = document.createElement("button");
button.innerHTML = "Button";
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener("click", function () {
  alert("clicked");
});