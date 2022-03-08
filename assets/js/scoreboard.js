// code sourced from Mengmei Tu: https://github.com/mmeii/code-quiz/blob/main/Assets/script.js

var time = document.getElementById("time");
var remainingTime = document.getElementById("remainingTime");
var endTime = document.getElementById("endTime");

var playAgainBtn = document.getElementById("playAgainBtn");


var nameBtn = document.getElementById("nameBtn");
var statName = document.getElementById("statName");
var highScores = document.getElementById("highScores");
var nameForm = document.getElementById("nameForm");
var clearAllScores = document.getElementById("clearAllScores");

var questContainer = document.getElementById("questContainer");

var endGame = document.getElementById("endGame");
var nameInput = document.getElementById("nameInput");
var scoreBoard = document.getElementById("scoreBoard");


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
