"use strict";
function generateRandomValue(minValue, maxValue) {
    var random = Math.random();
    return Math.floor(random * (maxValue - minValue + 1)) + minValue;
}
function changePlayers() {
    console.log("Changing players");
    const currentPlayerElement = document.getElementById("current");
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = document.getElementById("player1").value;
    let player2Name = document.getElementById("player2").value;
    // switch current player's name
    currentPlayerName = currentPlayerName === player1Name ? player2Name : player1Name;
    currentPlayerElement.textContent = currentPlayerName;
}
window.onload = function () {
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function createNewGame() {
    //set player 1 and player 2 scores to 0
    document.getElementById("player1-score").textContent = "0";
    document.getElementById("player2-score").textContent = "0";
    //verify each player has a name
    const player1Element = document.getElementById("player1");
    const player2Element = document.getElementById("player2");
    const player1Name = player1Element.value;
    const player2Name = player2Element.value;
    //if both players don't have a name display error
    if (player1Name === "" || player2Name === "") {
        alert("Both players must have names");
        return;
    }
    //if both players do have a name start the game!
    document.getElementById("turn").classList.add("open");
    document.getElementById("total").value = "0";
    //lock in player names and then change players
    document.getElementById("player1").setAttribute("disabled", "disabled");
    document.getElementById("player2").setAttribute("disabled", "disabled");
    changePlayers();
}
function rollDie() {
    let currTotal = parseInt(document.getElementById("total").value);
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    const roll = generateRandomValue(1, 6);
    //if the roll is 1
    if (roll == 1) {
        //  Change players
        changePlayers();
        // Set current total to 0
        currTotal = 0;
    }
    else {
        //if the roll is greater than 1
        //  add roll value to current total
        currTotal += roll;
    }
    //set the die roll to value player rolled
    document.getElementById("die-roll").value = roll.toString();
    //display current total on form
    document.getElementById("total").value = currTotal.toString();
}
function holdDie() {
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score
    //reset the turn total to 0
    //change players
    changePlayers();
}
