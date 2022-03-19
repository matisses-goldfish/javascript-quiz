// Scoreboard
var scoreBoard = document.querySelector("#scoreBoard");
var highScores = document.querySelector("#highScores");

// create Iniatials/Name
var nameForm = document.querySelector("#nameForm");
var nameInput = document.querySelector("#nameInput");

var nameBtn = document.querySelector("#nameBtn");
nameBtn.addEventListener("click", storeAndAppend);

var statName = document.querySelector("#statName");

// Clear scores / Play again
var clearAllScores = document.querySelector("#clearAllScores");
var endGame = document.querySelector("#endGame");
var playAgainBtn = document.querySelector("playAgainBtn");

function pageformat () {
    nameForm.style.display = "none";
    highScores.style.display = "block";   
    clearAllScores.style.display = "block";
}

function storeAndAppend () {
    renderScore();
    pageformat ();

    scoreBoard.textContent = playerPoints;

    var userScore = localStorage.getItem("high scores");
    var scoresArray = []
    if (userScore === null) {
        scoresArray;
    } else {
        scoresArray = JSON.parse(userScore)
    }

    var clientStats = {
        name: nameInput.value,
        score: playerPoints
    };

    console.log(clientStats);
    scoresArray.push(clientStats);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show current highscores
    displayScoreBoard();
    // take playerPoints and append with name input into json local storage and score board
}

// display scores 
// might not need this
var i = 0;
function displayScoreBoard() {

    renderScore();

    var statsBoard = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (statsBoard === null) {
        return;
    }
    var savedStats = JSON.parse(statsBoard);

    for (; i < savedStats.length; i++) {
        var newStat = document.createElement("div");
        newStat.setAttribute('class', 'card text-left');
        newStat.setAttribute('id', 'statBoard');
        newStat.innerHTML =  "Name: " + savedStats[i].name + " Stats: " + savedStats[i].score ;
        highScores.appendChild(newStat);
    }
}

// clear scores
clearAllScores.addEventListener("click", clearStats);

function clearStats () {
    window.localStorage.clear("statBoard");
    highScores.innerHTML = "Cleared Stats Board!";
    clearAllScores.style.display = "none"; 
}


// Play again
playAgainBtn.addEventListener("click", function(event){ 
    window.location.reload();
});
