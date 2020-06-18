var questions = [
  {
    title: "What animal makes a barking sound?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Dog",
  },
  {
    title: "What animal makes a meow sound?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Cat",
  }
  /*****
  {
    title: "What animal makes a hissing sound?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Snake",
  },
  {
    title: "What animal makes a clicking sound?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Fish",
  },
   
  {
    title: "What animal is descended from wolves?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Dog",
  },
  { 
    title: "What animal is descended from the sabre-tooth tiger?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Cat",
  },
  {
    title: "What animal is a lizard?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Snake",
  },
  {
    title: "What animal has gills?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Fish",
  },
  {
    title: "What animal does not have legs?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Snake",
  },
  {
    title: "What animal has fins?",
    choices: ["Dog", "Cat", "Snake", "Fish"],
    answer: "Fish",
  }
  ****/
];

const numberOfQuestions = questions.length;
let numberCorrect = 0;


var d = document;

var containerEl = document.querySelector(".container");
var timerDisplay = document.querySelector(".timer");

var timer = document.querySelector(".timer");
var results = document.querySelector(".results"); //update results the same way timer is updated
var scores = document.querySelector(".scores");

var startText = document.createElement("h1");
var startButton = document.createElement("button");
var questionText = document.createElement("p");


//global variables
var timer =  30;  //# of seconds
var index = 0;

//functions
function openingPage() {
  
  startText.textContent = "Welcome to the Quiz";
  startButton.textContent = "Start Quiz";
  containerEl.appendChild(startText);
  containerEl.appendChild(startButton);
}

function getAllScores() {
  debugger;
  var initialsAndScores = [];
  var j=0;
  for (var i = 0; i<localStorage.length; i++) {
      var initialAndScore = localStorage.getItem(localStorage.key(i));
      
      if(initialAndScore != null){localStorage.key(i) + ":" + initialAndScore;
      }
  }
  return initialsAndScores;
}

function displayScores(initialsAndScores){
  debugger;
  for(var i=0; i<initialsAndScores.length; i++){
    var score = initialsAndScores[i];
    scores.textContent = "<p>" + score + "</p>";
   
    //TODO: determine and display highest score
  }

}
let numberOfQuizzes = 2; //TODO let user select number of quizzes to play
let quizCounter = 0;
//function that shows the question and starts the timer
function startQuiz() {
 // for(;quizCounter < numberOfQuizzes; quizCounter++){
    numberCorrect = 0;
    var initialsAndScores = getAllScores();

    if( initialsAndScores.length != 0){
      debugger;
      displayScores(initialsAndScores);

    }

    //display timer to screen
    showTimer();
    //call next question function
    nextQuestion();

    //store to shared memory
    //After the game ends, the user can save their initials and score to a highscores view using local storage
    
   
  //}
}

function saveToLocalStorage(){
   //TODO: replace prompt with Modal
   debugger;

   var initials = prompt("Your score is " + numberCorrect + " out of " + numberOfQuestions +
     "\nEnter your initials for storage of your score!");

   if(initials == null){
     initials = "_unknown player"; //prepend underscore to initials
   }


   localStorage.setItem(initials,numberCorrect);
}

function showTimer() {
  
  //display timer to screen
  timerDisplay.textContent = timer;
  //create setInterval and store it to a variable
  var timeInterval = setInterval(function () {
    --timer;
    timerDisplay.textContent = timer;
    if (timer === 0) {
     
      clearInterval(timeInterval);//

      saveToLocalStorage();

    }
  }, 1000);
  //inside setInterval function:
  //display timer to screen
  //if timer goes down to 0, clear Interval
}

//function that handles and displays the next quextion
function nextQuestion() {
 
  if(index >= questions.length){ //done
    return;
  }
  //declare a variable to store current question. Assign the current question.
  var currentQuestion = questions[index];

  containerEl.textContent = "";
  questionText.textContent = currentQuestion.title;
  containerEl.appendChild(questionText);
  //create a div element to wrap the choices

  /**
   * for loop mission
   *  create button elements for each choice
   *  add a class to each button to be used with the event listener
   *  add text to each button from question choices
   *  append buttons to div element created to wrap choices
   */
  var answersDiv = document.createElement("div"); //need to name this something for buttons
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.classList.add("choiceBtn");
    answerBtn.textContent = currentQuestion.choices[i];
    answerBtn.addEventListener("click", checkAnswer); //give event listener to each button
    answersDiv.appendChild(answerBtn);
  }
  

  //append div element to the container
  containerEl.appendChild(answersDiv);

}

//function to check the answer and display to following question

function checkAnswer(e) {

  if (e.target.matches(".choiceBtn")) {
    if(e.target.textContent == questions[index].answer ){
      
        results.textContent = "Correct!";
        numberCorrect++;
    }else{
        
        results.textContent = "Wrong!";
    }


    if(index < questions.length){
      nextQuestion();
    }
    ++index;
   
  }
}

//add event listener to start quiz
startButton.addEventListener("click", startQuiz());

//add event listener to choice button -- I guess because there is more than one
//don't we have to add this in the for loop above?

//answersDiv.addEventListener("click", checkAnswer);
//call function to opening page
openingPage();
