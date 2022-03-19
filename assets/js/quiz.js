// sourced timer: https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz 
// iniatial reference: https://github.com/mmeii/code-quiz/blob/main/Assets/script.js

// Welocome page
var welcomePage = document.querySelector("#welcomePage");

// Begin quiz
var beginQuizBtn = document.querySelector("#beginQuizBtn");
beginQuizBtn.addEventListener("click", beginQuiz);

// Questions
var renderQuestions = document.querySelector("#renderQuestions");
var singleQuestion = document.querySelector("#singleQuestion");
var singleAnswer = document.querySelector(".singleAnswer");

// Iniatialize Answer buttons: 
    // Button A
    var answerClickA = document.querySelector("#answerClickA");
    // Button B
    var answerClickB = document.querySelector("#answerClickB");
    // Button C
    var answerClickC = document.querySelector("#answerClickC");
    // Button D
    var answerClickD = document.querySelector("#answerClickD");

// Next Question
nextQuestionBtn = document.querySelector("#nextQuestionBtn")
nextQuestionBtn.addEventListener("click", nextQuestion);

var correction = document.querySelector("#correction");

// time 
var time = document.querySelector("#time");
var remainingTime = document.querySelector("#remainingTime");
var endTime = document.querySelector("#endTime");

// Game Ends:

// Extra additions (time, scoreboard, and shuffle)
var quizTimer = 101;
var playerPoints = 500;
var questionNumber = 0;


// shuffle through questions 

// start quiz
function beginQuiz () {
    // declare question number in order to shuffle
    questionNumber = 0;

    // render elements 
    welcomePage.style.display = "none";
    renderQuestions.style.display = "block";
    time.style.display = "block";
    endTime.style.display = "none";

    // call function renderQuestions
    renderQuestionIndex();

    // call function renderChoices
    renderChoices();

    // call function beginTime
    beginTime();
}

// render questions 
function renderQuestionIndex () {
        for (var i = 0; i < totalQuest.length; i++) {
        var questionTitle = totalQuest[questionNumber].question;
        singleQuestion.textContent = questionTitle;
        }
}

// render choices 
function renderChoices () {
    var quizAnswers = totalQuest[questionNumber];
    answerClickA.textContent = quizAnswers.answerA;
    answerClickB.textContent = quizAnswers.answerB;
    answerClickC.textContent = quizAnswers.answerC;
    answerClickD.textContent = quizAnswers.answerD;
}



// quiz timer
// timer based on: https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz 
function beginTime () {
    quizTimer = 100;
    var interval = setInterval(function(){
        quizTimer--;
        remainingTime.textContent = quizTimer;

        // quizTimer === 0 wasnt computing???
        if (quizTimer <= 0){
          clearInterval(interval);
          renderScore ();
        }
      }, 1000);
    }

// display correct
function alertCorrect(userAnswer) {
    if (userAnswer === totalQuest[questionNumber].correctAnswer) {
        playerPoints +=100;
        correction.style.display= "block"
        correction.textContent = "Correct! Nicely Done!";
    } else {
        quizTimer -= 10;
        remainingTime.textContent = quizTimer;
        correction.style.display= "block";
        correction.textContent = "Wrong! The correct answer is: " + totalQuest[questionNumber].correctAnswer;
    }
}

function nextQuestion() {
    questionNumber++;
    if (questionNumber < totalQuest.length) {
        renderQuestionIndex();
        renderChoices();
        correction.style.display= "none"
    } else {
        renderScore();   
    }
}



// hideElements ();
// storeAndAppend ();

 function renderScore () {
    endGame.style.display = "block";
    renderQuestions.style.display = "none";
    time.style.display = "none";
    remainingTime.style.display = "none";
    endTime.style.display = "block";  

    scoreBoard.textContent = playerPoints;
 }