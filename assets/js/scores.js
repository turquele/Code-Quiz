var highscores = document.getElementById("highscores");
var clear = document.getElementById("clear");
var theBest = localStorage


// ORDERING THE OBJECT
const sortable = Object.fromEntries(
  Object.entries(theBest).sort(([,a],[,b]) => b-a)
);

// CREATING A LIST TO ITERATE AND PRINT
var listToPrint =""

// Iterate through the object
for (const key in sortable) {
    if (sortable.hasOwnProperty(key)) {
      listToPrint += `<li>`;
      listToPrint += `${key}: ${theBest[key]}`;
      listToPrint += `</li>`;
    }
}

// PRINTING SCORES
highscores.innerHTML = listToPrint;

clear.addEventListener("click", function(event) {
    localStorage.clear();
})