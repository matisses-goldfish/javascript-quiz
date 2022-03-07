// code formated after: https://github.com/mmeii/code-quiz/blob/main/Assets/script.js

// Iniatial Landing Page for Quiz
var startQuizDiv = document.getElementById("startQuizDiv");

// time vars
var time = document.getElementById("time");
var remainingTime = document.getElementById("remainingTime");
var endTime = document.getElementById("endTime");

// button vars
var startBtn = document.getElementById("startBtn");
var playAgainBtn = document.getElementById("playAgainBtn");

// question shuffle vars
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btnA");
var choiceB = document.getElementById("btnB");
var choiceC = document.getElementById("btnC");
var choiceD = document.getElementById("btnD");
var answerCheck = document.getElementById("answerCheck");

// end/score vars
var summary = document.getElementById("summary");
var nameInput = document.getElementById("nameInput");
var nameBtn = document.getElementById("nameBtn");
var statName = document.getElementById("statName");
var finalScore = document.getElementById("finalScore");
var highScores = document.getElementById("highScores");
var nameForm = document.getElementById("nameForm");
var clearScoreBtn = document.getElementById("clearScoreBtn");


// declaring basic vars
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;


// Questions
var totalQuest = [
    {
      question: "Which HTML Character is used to indicate javascript?",
      choices: ["<js>", "<script>", "<javascript>", "<link rel=script href=./assets/js/script.js/>"],
      correctAnswer: "<script>"
    },
    {
      question: "Who is creating the web standards?",
      choices: ["Google", "Mozilla", "W3C", "Firefox"],
      correctAnswer: "W3C"
    },
    {
      question: "What does AJAX stand for?",
      choices: ["Asynchronous JavaScript And XML", "Application-based Jscript And XPL", "Asymchronous Java And XC", "Application-based Jython And XL"],
      correctAnswer: "Asynchronous JavaScript And XML"
    },
    {
      question: "What is a for loop?",
      choices: ["a common mathmatical equation used within javascript", "a control flow statement for specifying iteration, allows code to be executed repeatedly", "an element of html that creats an ellipse around specific elements", "A Method used in CSS to create style varriabls for multiple elements"],
      correctAnswer: "a control flow statement for specifying iteration, allows code to be executed repeatedly"
    },
    {
      question: "An if/else statement is enclosed with which of the following?",
      choices: ["curly brackets", "square brackets", "parenthesis", "asterisks"],
      correctAnswer: "parenthesis"
    }
  ];

// time and quiz shuffle
startBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

var totalTime = 151;
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    remainingTime.textContent = totalTime;
    nameInput.textContent = "";

    startQuizDiv.style.display = "none";
    questionDiv.style.display = "block";
    time.style.display = "block";
    endTime.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        remainingTime.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < question.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

// question shuffle 
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = totalQuest[questionIndex].question;
    choiceA.textContent = totalQuest[questionIndex].choices[0];
    choiceB.textContent = totalQuest[questionIndex].choices[1];
    choiceC.textContent = totalQuest[questionIndex].choices[2];
    choiceD.textContent = totalQuest[questionIndex].choices[3];
}

// check answer 
function checkAnswer(correctAnswer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (totalQuest[questionIndex].correctAnswer === totalQuest[questionIndex].choices[correctAnswer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // wrong answer, deduct 10 second from timer
        totalTime -= 10;
        remainingTime.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + totalQuest[questionIndex].correctAnswer;
    }

    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < totalQuest.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// game over
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    time.style.display = "none";
    endTime.style.display = "block";

    finalScore.textContent = correctAns;
}

// store high score:
function storeScores (event){
    event.preventDefault();

        if (nameInput.value === "") {
        alert("Please enter your name");
        return;
    } 

    nameForm.style.display = "none";
    highScores.style.display = "block";   
    summary.style.display = "block";
    questionDiv.style.display = "none";
    time.style.display = "none";
    endTime.style.display = "block";
    clearScoreBtn.style.display = "block";

    var savedScore = localStorage.getItem("high scores");
    var scoresArray;

    if (savedScore === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedScore)
    }

    var userScore = {
        name: nameInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show current highscores
    showHighScores();
}

// Display Scores
var i = 0;
function showHighScores() {

    time.style.display = "none";
    questionDiv.style.display = "none";
    endTime.style.display = "block";
    summary.style.display = "block";
    remainingTime.style.display = "none";
    highScores.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("div");
        eachNewHighScore.setAttribute('class', 'card text-left');
        eachNewHighScore.setAttribute('id', 'statBoard');
        eachNewHighScore.innerHTML =  "Name: " + storedHighScores[i].name + " Score: " + storedHighScores[i].score ;
        highScores.appendChild(eachNewHighScore);
    }
}
// Display Stats
nameBtn.addEventListener("click", function(event){ 
    storeScores(event);
    
});
// clear scores
clearScoreBtn.addEventListener("click", function(){
    window.localStorage.clear("statBoard");
    highScores.innerHTML = "Stats Are Cleared!";
    clearScoreBtn.style.display = "none";
});

// Play Again
playAgainBtn.addEventListener("click", function(event){ 
    window.location.reload();
});

