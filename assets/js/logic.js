var welcomeScreen = document.getElementById('start-screen');
var questionsWrapper = document.getElementById('questions');
var bestScoresScreen = document.getElementById('end-screen');
var timerEl = document.getElementById('time');
var startButton = document.getElementById('start');
var questionTitle = document.getElementById('question-title');
var questionChoices = document.getElementById('choices');
var finalScore = document.getElementById('final-score');
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');

var score = 0;
var questionNumber = 0;


// Functions start game
startButton.addEventListener('click', function() {
  score = 0;
  questionNumber =0;
  welcomeScreen.setAttribute('class', 'hide');
  populateQuestions();
  setTime();
  questionsWrapper.setAttribute('class', 'show');
  //event listener
  questionsWrapper.addEventListener("click", function(event) {
    var element = event.target;
    if(element.textContent == questionnaire[questionNumber].correct) {
      //Answer is correct
      score +=1;
      var feedback = document.createElement("div");
      feedback.setAttribute("class", "feedback");
      feedback.innerHTML="Correct"
      document.getElementById("questions").appendChild(feedback);
      questionNumber++;
      var delay = setTimeout(function(){
        feedback.remove();
        populateQuestions();
      }, 500); 
      
    }
      else {
        //Answer is wrong
        secondsLeft -=10;
        questionNumber++;
        var feedback = document.createElement("div");
        feedback.setAttribute("class", "feedback");
        feedback.innerHTML="False"
        document.getElementById("questions").appendChild(feedback);
        var delay = setTimeout(function(){
          feedback.remove();
          populateQuestions();
        }, 500)
      }
  });
});


var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      secondsLeft = 0;
      endgame();
    }
  }, 1000);
}

function endgame() {
  questionsWrapper.setAttribute('class', 'hide');
  bestScoresScreen.setAttribute('class', 'show');
  finalScore.innerHTML = score;
  secondsLeft = 1;
  submit.addEventListener("click", function() {
    secondsLeft = 100;
    console.log(initials.value);
    localStorage.setItem(initials.value, score);
    bestScoresScreen.setAttribute('class', 'hide');
    welcomeScreen.setAttribute('class', 'show');
  });
}


function populateQuestions() {
  if (questionNumber == questionnaire.length) {
    endgame()
  } else {
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
}

  


  //call the questions
  //initiate tge 
    //For loop to list the questions
      //Listener for the answer
      //Logic for the answer


  // Funtion to initiate the timer

