var welcomeScreen = document.getElementById('start-screen');
var questionsWrapper = document.getElementById('questions');
var bestScoresScreen = document.getElementById('end-screen');
var timerEl = document.getElementById('time');
var startButton = document.getElementById('start');
var questionTitle = document.getElementById('question-title');
var questionChoices = document.getElementById('choices');

var score = 0;
var questionNumber = 0;


// Functions start game
startButton.addEventListener('click', function() {
  welcomeScreen.setAttribute('class', 'hide');
  populateQuestions();
  setTime();
  questionsWrapper.setAttribute('class', 'show');
  //event listener
  questionsWrapper.addEventListener("click", function(event) {
    var element = event.target;
    console.log(element.textContent);
    console.log(questionnaire[questionNumber].correct)
    if(element.textContent == questionnaire[questionNumber].correct) {
      score +=10;
      questionNumber++;
      console.log(score);
      populateQuestions();
    }
      else {
        secondsLeft -=10;
        questionNumber++;
        populateQuestions();
      }
  });
});


var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
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
  if (questionNumber == questionnaire.length) {
    endgame()
  }
  questionTitle.innerHTML = questionnaire[questionNumber].title;
  var anwersPop =`<ul>`;
  for (let i = 0; i < questionnaire[questionNumber].answers.length; i++) {
    anwersPop += `<li sel="`;
    anwersPop += i;
    anwersPop += `">`;
    anwersPop += questionChoices.innerHTML=questionnaire[questionNumber].answers[i];
    anwersPop += `</li>`;
  }
  anwersPop += `</ul>`
  questionChoices.innerHTML = anwersPop
  }

  


  //call the questions
  //initiate tge 
    //For loop to list the questions
      //Listener for the answer
      //Logic for the answer


  // Funtion to initiate the timer
