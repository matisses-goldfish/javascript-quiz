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
    
    // show current highscores
    displayScoreBoard();
    // take playerPoints and append with name input into json local storage and score board
}

// display scores 
// might not need this
var i = 0;
function displayScoreBoard() {

    renderScore();

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
