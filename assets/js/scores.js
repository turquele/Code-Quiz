var highscores = document.getElementById("highscores");
var clear = document.getElementById("clear");
var theBest = localStorage

// TO DO: SORT object

var listToPrint =""
// Iterate through the object
for (const key in theBest) {
    if (theBest.hasOwnProperty(key)) {
      listToPrint += `<li>`;
      listToPrint += `${key}: ${theBest[key]}`;
      listToPrint += `</li>`;
    }
}

highscores.innerHTML = listToPrint;




clear.addEventListener("click", function(event) {
    localStorage.clear();
})