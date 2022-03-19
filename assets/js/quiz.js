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
var userAnswers = document.querySelector("#userAnswers");

// Iniatialize Answer buttons: 

    // Button A
    var answerClickA = document.querySelector("#answerClickA");
    answerClickA.addEventListener("click", displayA);
    // checks if the answer selected is correct
    function displayA() { alertCorrect(0); }


    // Button B
    var answerClickB = document.querySelector("#answerClickB");
    answerClickB.addEventListener("click", displayB);
    // checks if the answer selected is correct
    function displayB() { alertCorrect(1); }

    // Button C
    var answerClickC = document.querySelector("#answerClickC");
    answerClickC.addEventListener("click", displayC);
    // checks if the answer selected is correct
    function displayC() { alertCorrect(2); }

    // Button D
    var answerClickD = document.querySelector("#answerClickD");
    answerClickD.addEventListener("click", displayD);
    // checks if the answer selected is correct
    function displayD() { alertCorrect(3); }



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
    ulCreate.innerHTML = "";

        for (var i = 0; i < totalQuest.length; i++) {
        // renders question
        var questionTitle = totalQuest[questionNumber].question;
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
          hideElements ();
          storeAndAppend ();
            
        }
      }, 1000);
    }

    var ulCreate = document.createElement("ul");

// display correct
function alertCorrect(correctAnswer) {
    if (totalQuest[questionNumber].correctAnswer === totalQuest[questionNumber].choices[correctAnswer]) {
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
        hideElements ();
        storeAndAppend ();    
    }
}


// I might be able to remove this 
function endGame () {
    endGame.style.display = "block";
    renderQuestions.style.display = "none";
    time.style.display = "none";
    remainingTime.style.display = "none";
    endTime.style.display = "block";    

    scoreBoard.textContent = playerPoints;
}
