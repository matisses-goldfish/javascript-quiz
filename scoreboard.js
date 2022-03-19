// declare my vars

var endGame = document.querySelector("#endGame");

// hide elements that isnt the scoreboard 
function hideElements () {
    endGame.style.display = "block";
    renderQuestions.style.display = "none";
    time.style.display = "none";
    remainingTime.style.display = "none";
    endTime.style.display = "block";    
    // declare display: none; for everything you want hidden
}


// add name
nameBtn.addEventListener("click", storeScores);

// storeScores
function storeAndAppend () {

    scoreBoard.textContent = playerPoints;
    // take playerPoints and append with name input into json local storage and score board
}

// display scores 
// might not need this
function displayScoreBoard () {
}

// clear scores
clearAllScores.addEventListener("click", clearStats);

function clearStats () {
    window.localStorage.clear("statBoard");
    highScores.innerHTML = "Cleared Stats Board!";
    clearAllScores.style.display = "none"; 
}


// Play again
playAgainBtn.addEventListener("click", playAgain);

function playAgain (event) {
    window.location.reload();

}
