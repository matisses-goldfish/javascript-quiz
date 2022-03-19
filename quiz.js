// sourced timer: https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz 
// iniatial reference: https://github.com/mmeii/code-quiz/blob/main/Assets/script.js

// Begin quiz elements 
var welcomePage = document.querySelector("#welcomePage");
var beginQuizBtn = document.querySelector("#beginQuizBtn");

beginQuizBtn.addEventListener("click", beginQuiz);

// questions
var renderQuestions = document.querySelector("#renderQuestions");
var singleQuestion = document.querySelector("#singleQuestion");

var answerClick = document.querySelector(".answerClick");

answerClick.addEventListener("click", alertCorrect);


var answerClickA = document.querySelector("#answerClickA");
var answerClickB = document.querySelector("#answerClickB");
var answerClickC = document.querySelector("#answerClickC");
var answerClickD = document.querySelector("#answerClickD");

answerClickA.addEventListener("click", displayA);
answerClickB.addEventListener("click", displayB);
answerClickC.addEventListener("click", displayC);
answerClickD.addEventListener("click", displayD);



nextQuestionBtn = document.querySelector("#nextQuestionBtn")
nextQuestionBtn.addEventListener("click", nextQuestion);

var correction = document.querySelector("#correction");


// time 
var time = document.querySelector("#time");
var remainingTime = document.querySelector("#remainingTime");
var endTime = document.querySelector("#endTime");
var totalTime = 101;

var playerPoints = 500;
var questionNumber = 0;



// shuffle through questions 

// start quiz
function beginQuiz () {
    questionNumber = 0;

    // render elements 
    welcomePage.style.display = "none";
    renderQuestions.style.display = "block";
    time.style.display = "block";
    endTime.style.display = "none";

    // call renderQuestions
    renderQuestionIndex();

    // call renderChoices
    renderChoices();

    // call beginTime
    beginTime();
}

// quiz timer
// timer based on: https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz 
function beginTime () {
    totalTime = 100;

    var interval = setInterval(function(){
        totalTime--;
        remainingTime.textContent = totalTime;

        // totalTime === 0 wasnt computing???
        if (totalTime <= 0){
          clearInterval(interval);
          gameOver();
            
        }
      }, 1000);
    }

// render questions 
function renderQuestionIndex () {
        for (var i = 0; i < totalQuest.length; i++) {
        // renders question
        var questionTitle = totalQuest[questionNumber].question;
        // renders choices
        singleQuestion.textContent = questionTitle;
        }
}

// render choices 
function renderChoices () {
    answerClickA.textContent = totalQuest[questionNumber].choices[0];
    answerClickB.textContent = totalQuest[questionNumber].choices[1];
    answerClickC.textContent = totalQuest[questionNumber].choices[2];
    answerClickD.textContent = totalQuest[questionNumber].choices[3];
}


// display correct
function alertCorrect(correctAnswer) {
    if (totalQuest[questionNumber].correctAnswer === totalQuest[questionNumber].choices[correctAnswer]) {
        playerPoints +=100;
        correction.style.display= "block"
        correction.textContent = "Correct! Nicely Done!";
    } else {
        totalTime -= 10;
        remainingTime.textContent = totalTime;
        correction.style.display= "block";
        correction.textContent = "Wrong! The correct answer is: " + totalQuest[questionNumber].correctAnswer;
    }
}

function displayA() { alertCorrect(0); }

function displayB() { alertCorrect(1); }

function displayC() { alertCorrect(2); }

function displayD() { alertCorrect(3); }


// formated after displayAnswer from : https://github.com/mmeii/code-quiz/blob/main/Assets/script.js
function nextQuestion() {
    questionNumber++;
    if (questionNumber < totalQuest.length) {
        renderQuestionIndex();
        renderChoices();
        correction.style.display= "none"
    } else {
        gameOver();
    }
}


function gameOver () {
    endGame.style.display = "block";
    renderQuestions.style.display = "none";
    time.style.display = "none";
    remainingTime.style.display = "none";
    endTime.style.display = "block";    

    scoreBoard.textContent = playerPoints;
}