// code sourced from Mengmei Tu: https://github.com/mmeii/code-quiz/blob/main/Assets/script.js

// Iniatial Landing Page for Quiz
var startQuizDiv = document.getElementById("startQuizDiv");

// time vars
var time = document.getElementById("time");
var remainingTime = document.getElementById("remainingTime");
var endTime = document.getElementById("endTime");

// button vars
var startBtn = document.getElementById("startBtn");

// question shuffle vars
var questContainer = document.getElementById("questContainer");
var questHeader = document.getElementById("questHeader");
var buttonA = document.getElementById("btnA");
var buttonB = document.getElementById("btnB");
var buttonC = document.getElementById("btnC");
var buttonD = document.getElementById("btnD");
var answerCheck = document.getElementById("answerCheck");

// end/score vars
var endGame = document.getElementById("endGame");
var nameInput = document.getElementById("nameInput");
var scoreBoard = document.getElementById("scoreBoard");

// declaring basic vars
var correction = 0;
var quizNum = 0;

// time and quiz shuffle
startBtn.addEventListener("click", startQuest);
buttonA.addEventListener("click", number0);
buttonB.addEventListener("click", number1);
buttonC.addEventListener("click", number2);
buttonD.addEventListener("click", number3);

var playerClock = 151;

function startQuest() {
    quizNum = 0;
    playerClock = 150;
    remainingTime.textContent = playerClock;
    nameInput.textContent = "";

    startQuizDiv.style.display = "none";
    questContainer.style.display = "block";
    time.style.display = "block";
    endTime.style.display = "none";

    var startTimer = setInterval(function() {
        playerClock--;
        remainingTime.textContent = playerClock;
        if(playerClock <= 0) {
            clearInterval(startTimer);
            if (quizNum < question.length - 1) {
                stopGame();
            }
        }
    },1000);

    displayQuest();
};

// question shuffle 
function displayQuest() {
    following();
}

function following() {
    questHeader.textContent = totalQuest[quizNum].question;
    buttonA.textContent = totalQuest[quizNum].choices[0];
    buttonB.textContent = totalQuest[quizNum].choices[1];
    buttonC.textContent = totalQuest[quizNum].choices[2];
    buttonD.textContent = totalQuest[quizNum].choices[3];
}

// check answer 
function displayAnswer(correctAnswer) {
    answerCheck.style.display = "block";

    if (totalQuest[quizNum].correctAnswer === totalQuest[quizNum].choices[correctAnswer]) {
        correction++;
        answerCheck.textContent = "Correct!";
    } else {
        playerClock -= 10;
        remainingTime.textContent = playerClock;
        answerCheck.textContent = "Wrong! The correct answer is: " + totalQuest[quizNum].correctAnswer;
    }

    quizNum++;
    if (quizNum < totalQuest.length) {
        following();
    } else {
        stopGame();
    }
}

function displayA() { displayAnswer(0); }

function displayB() { displayAnswer(1); }

function displayC() { displayAnswer(2); }

function displayD() { displayAnswer(3); }

// game over
function stopGame() {
    endGame.style.display = "block";
    questContainer.style.display = "none";
    time.style.display = "none";
    endTime.style.display = "block";

    scoreBoard.textContent = correction;
}