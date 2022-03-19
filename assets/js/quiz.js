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
    answerClickA.addEventListener("click", alertCorrect);
    // checks if the answer selected is correct
    // function displayA() { alertCorrect(A); }


    // Button B
    var answerClickB = document.querySelector("#answerClickB");
    answerClickB.addEventListener("click", alertCorrect);
    // checks if the answer selected is correct
    // function displayB() { alertCorrect(B); }

    // Button C
    var answerClickC = document.querySelector("#answerClickC");
    answerClickC.addEventListener("click", alertCorrect);
    // checks if the answer selected is correct
    // function displayC() { alertCorrect(C); }

    // Button D
    var answerClickD = document.querySelector("#answerClickD");
    answerClickD.addEventListener("click", alertCorrect);
    // checks if the answer selected is correct
    // function displayD() { alertCorrect(D); }



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
    answerClickA.textContent = quizAnswers.A;
    answerClickB.textContent = quizAnswers.B;
    answerClickC.textContent = quizAnswers.C;
    answerClickD.textContent = quizAnswers.D;
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
        //   hideElements ();
        //   storeAndAppend ();
        }
      }, 1000);
    }

// display correct
function alertCorrect(answer) {
    if (answer === totalQuest[questionNumber].correctAnswer) {
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

// function checkAnswer(answer){
//     correct = quizQuestions[currentQuestionIndex].correctAnswer;

//     if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
//         score++;
//         alert("That Is Correct!");
//         currentQuestionIndex++;
//         generateQuizQuestion();
//         //display in the results div that the answer is correct.
//     }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
//         alert("That Is Incorrect.")
//         currentQuestionIndex++;
//         generateQuizQuestion();
//         //display in the results div that the answer is wrong.
//     }else{
//         showScore();
    


function nextQuestion() {
    questionNumber++;
    if (questionNumber < totalQuest.length) {
        renderQuestionIndex();
        renderChoices();
        correction.style.display= "none"
    } else {
        // hideElements ();
        // storeAndAppend ();    
    }
}


// hideElements ();
// storeAndAppend ();