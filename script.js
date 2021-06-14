var buttonPeno = document.getElementById("enter");
var inputPeno = document.getElementById("userinput");
var ulPeno = document.querySelector("ul");

buttonPeno.addEventListener("click",
function() {
    var liPeno = document.createElement("li");
    liPeno.appendChild(document.createTextNode(inputPeno.value));
    ulPeno.appendChild(liPeno);
}

);

