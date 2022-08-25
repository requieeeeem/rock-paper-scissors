let computerSelection = getComputerChoice();
let playerSelection
let winCounter = 0;
let compWinCounter = 0;
const radioButtons = document.querySelectorAll('input[name="choice"]'); //Group all radio buttons to one variable
const btn = document.querySelector('#startButton'); //Make start button a variable

btn.addEventListener('click', () => { //When start button is clicked, do the following things
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            playerSelection = radioButton.value;
            radioButton.checked = false;
            playRound(playerSelection, computerSelection);
            computerSelection = getComputerChoice();
        }
    }
})

function getComputerChoice() { //Randomize a computer's choice by using array random
    let random =['Rock', 'Paper', 'Scissors'];
    let temp = Math.floor(Math.random()*3);
    switch(temp) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}
function playRound(playerSelection, computerSelection) { //Compare player's choice with comp's choice, then update the Win counter, print out if you win or lose
    let result = ""
    
    if (playerSelection === 'Rock') {
        switch (computerSelection) {
            case "Rock":
                result = ("You chose "+playerSelection+"."+"<br>Computer chose "+computerSelection+ "<br>It's a draw");
                break;
            case "Paper":
                result = ("You chose "+playerSelection+"."+"<br>Computer chose "+computerSelection+ "<br>You lose");
                compWinCounter++;
                break;
            case "Scissors":
                result = ("You chose "+playerSelection+"."+"<br>Computer chose "+computerSelection+ "<br>You win");
                winCounter++
                break;
        }
    }
    else if (playerSelection === 'Paper') {
        switch (computerSelection) {
            case "Paper":
                result = ("You chose "+playerSelection+"."+"<br>Computer chose "+computerSelection+ "<br>It's a draw");
                break;
            case "Scissors":
                result = ("You chose "+playerSelection+"."+"<br>Computer chose "+computerSelection+ "<br>You lose");
                compWinCounter++;
                break;
            case "Rock":
                result = ("You chose "+playerSelection+"."+"<br>Computer chose "+computerSelection+ "<br>You win");
                winCounter++
                break;
        }
    }
    else if (playerSelection === 'Scissors') {
        switch (computerSelection) {
            case "Scissors":
                result = ("You chose "+playerSelection+"."+"<br>Computer chose "+computerSelection+ "<br>It's a draw");
                break;
            case "Rock":
                result = ("You chose "+playerSelection+"."+"<br>Computer chose "+computerSelection+ "<br>You lose");
                compWinCounter++;
                break;
            case "Paper":
                result = ("You chose "+playerSelection+"."+"<br>Computer chose "+computerSelection+ "<br>You win");
                winCounter++
                break;
        }
    }
    document.getElementById("playerCounter").innerHTML = winCounter //change innerHTML of playerCounter
    document.getElementById("compCounter").innerHTML = compWinCounter
    document.getElementById("result").innerHTML = result
    if (winCounter==5) {
        document.write('You win.');
    }
    if (compWinCounter==5) {
        document.write('Computer wins.')
    }
    return
}