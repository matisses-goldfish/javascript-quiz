// code formated a Mengmei Tu: https://github.com/mmeii/code-quiz/blob/main/Assets/script.js

// Iniatial Landing Page for Quiz
var startQuizDiv = document.getElementById("startQuizDiv");
// new comment to push changes to main
// time vars
var time = document.getElementById("time");
var remainingTime = document.getElementById("remainingTime");
var endTime = document.getElementById("endTime");

// button vars
var startBtn = document.getElementById("startBtn");
var playAgainBtn = document.getElementById("playAgainBtn");

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
var nameBtn = document.getElementById("nameBtn");
var statName = document.getElementById("statName");
var scoreBoard = document.getElementById("scoreBoard");
var highScores = document.getElementById("highScores");
var nameForm = document.getElementById("nameForm");
var clearAllScores = document.getElementById("clearAllScores");


// declaring basic vars
var correction = 0;
var quizNum = 0;


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
        question: "What does Props stand for in React?",
        choices: ["propositions", "prophets", "propagations", "properties"],
        correctAnswer: "properties"
    },
    {
      question: "What does AJAX stand for?",
      choices: ["Asymchronous Java And XC", "Application-based Jscript And XPL", "Asynchronous JavaScript And XML", "Application-based Jython And XL"],
      correctAnswer: "Asynchronous JavaScript And XML"
    },
    {
      question: "What is a for loop?",
      choices: ["a common mathmatical equation used within javascript", "a control flow statement for specifying iteration, allows code to be executed repeatedly", "an element of html that creats an ellipse around specific elements", "A Method used in CSS to create style varriabls for multiple elements"],
      correctAnswer: "a control flow statement for specifying iteration, allows code to be executed repeatedly"
    },
    {
        question: "What character do you preferace a Declaration Block with in CSS for a class selector?",
        choices: [".", "#", "$", "//"],
        correctAnswer: "."
    },
    {
      question: "An if/else statement is enclosed with which of the following?",
      choices: ["curly brackets", "square brackets", "asterisks", "parenthesis"],
      correctAnswer: "parenthesis"
    },
    {
        question: "What does an Asynchronous API do?",
        choices: ["iniatializes the backend of your web application", "establishes the client server connection", "computes the local host within the broswer", "collects and returns data for requests"],
        correctAnswer: "collects and returns data for requests"
    },
    {
        question: "How would you target a Pseudo-Element in CSS?",
        choices: ["{}", "::", "//", "[]"],
        correctAnswer: "::"
    },
    {
        question: "Why is alt text needed but not required?",
        choices: ["Used to establish sections of an HTML page, and an attribute of the anchor tag", "a statement that declares either a local or global variable", "increases accessibility and performance on google", "creates a global directory that increases preformace and time on code"],
        correctAnswer: "increases accessibility and performance on google"
    },
    
  ];

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

function number0() { displayAnswer(0); }

function number1() { displayAnswer(1); }

function number2() { displayAnswer(2); }

function number3() { displayAnswer(3); }

// game over
function stopGame() {
    endGame.style.display = "block";
    questContainer.style.display = "none";
    time.style.display = "none";
    endTime.style.display = "block";

    scoreBoard.textContent = correction;
}

// store high score:
function storeScores (event){
    event.preventDefault();

        if (nameInput.value === "") {
        alert("please leave your name");
        return;
    } 

    nameForm.style.display = "none";
    highScores.style.display = "block";   
    endGame.style.display = "block";
    questContainer.style.display = "none";
    time.style.display = "none";
    endTime.style.display = "block";
    clearAllScores.style.display = "block";

    var savedScore = localStorage.getItem("high scores");
    var scoresArray;

    if (savedScore === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedScore)
    }

    var clientStats = {
        name: nameInput.value,
        score: scoreBoard.textContent
    };

    console.log(clientStats);
    scoresArray.push(clientStats);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show current highscores
    showHighScores();
}

// Display Scores
var i = 0;
function showHighScores() {

    time.style.display = "none";
    questContainer.style.display = "none";
    endTime.style.display = "block";
    endGame.style.display = "block";
    remainingTime.style.display = "none";
    highScores.style.display = "block";

    var statsBoard = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (statsBoard === null) {
        return;
    }
    console.log(statsBoard);

    var savedStats = JSON.parse(statsBoard);

    for (; i < savedStats.length; i++) {
        var newStat = document.createElement("div");
        newStat.setAttribute('class', 'card text-left');
        newStat.setAttribute('id', 'statBoard');
        newStat.innerHTML =  "Name: " + savedStats[i].name + " Stats: " + savedStats[i].score ;
        highScores.appendChild(newStat);
    }
}
// Display Stats
nameBtn.addEventListener("click", function(event){ 
    storeScores(event); 
});

// clear scores
clearAllScores.addEventListener("click", function(){
    window.localStorage.clear("statBoard");
    highScores.innerHTML = "Cleared Stats Board!";
    clearAllScores.style.display = "none";
});

// Play Again
playAgainBtn.addEventListener("click", function(event){ 
    window.location.reload();
});

