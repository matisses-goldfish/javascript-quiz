// declare my vars


// save score to local json

// display scores 


// add name
nameBtn.addEventListener("click", storeScores);


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

