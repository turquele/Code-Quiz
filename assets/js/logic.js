
var welcomeScreen = document.getElementById('start-screen')
var questionsWrapper = document.getElementById('questions')
var bestScoresScreen = document.getElementById('end-screen')
var timerEl = document.getElementById('time');


// Listener to the Start Quiz button
var startButton = document.querySelector('#start');


// Functions start game
startButton.addEventListener('click', function() {
  populateQuestions();
  setTime();
  welcomeScreen.setAttribute('class', 'hide');
  questionsWrapper.setAttribute('class', 'show');
});


var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " ";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endgame();
    }

  }, 1000);
}

function endgame() {
  questionsWrapper.setAttribute('class', 'hide');
  bestScoresScreen.setAttribute('class', 'show');
}





function populateQuestions() {
  console.log('Populate quiestions on')
  
}


function startTimer() {
  console.log('Timer on')
}



  //call the questions
  //initiate tge 
    //For loop to list the questions
      //Listener for the answer
      //Logic for the answer


  // Funtion to initiate the timer

