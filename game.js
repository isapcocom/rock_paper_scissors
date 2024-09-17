const moves = ['rock', 'paper', 'scissors'];
let gameRef = document.getElementById("game");
let playButton = document.getElementById("playButton");
let scoreboard = document.getElementById("scoreboard");
let playerWins = 0;
let computerWins = 0;
let ties = 0;

const playGame = () => {
    playButton.style.display = 'none';
    gameRef.style.display = 'flex';
    gameRef.innerHTML = `
        <h2>What do you choose?</h2>
        <button class="rockButton" onclick="Play('rock')">Rock</button>
        <br />
        <button class="paperButton" onclick="Play('paper')">Paper</button>
        <br />
        <button class="scissorButton" onclick="Play('scissors')">Scissors</button>
    `
}

const Play = (move) => {

    let computerMove = Math.floor(Math.random() * 3);
    let message;
    switch (computerMove) {
        case 0:
            computerMove = 'rock';
            break;
        case 1:
            computerMove = 'paper';
            break;
        case 2:
            computerMove = "scissors";
            break;
    }
    if (computerMove === 'rock' && move === "rock") {
        message = "It's a tie.";
        ties++;
    }
    else if (computerMove === 'paper' && move === "paper") {
        message = "It's a tie.";
        ties++;
    }
    else if (computerMove === 'scissors' && move === 'scissors') {
        message = "It's a tie.";
        ties++;
    }
    else if (computerMove === 'rock' && move === 'paper') {
        message = "You win!";
        playerWins++;
    }
    else if (computerMove === 'rock' && move === 'scissors') {
        message = "You lose.";
        computerWins++;
    }
    else if (computerMove === 'paper' && move === "scissors") {
        message = "You win!";
        playerWins++;
    }
    else if (computerMove === 'paper' && move === 'rock') {
        message = "You lose.";
        computerWins++;
    }
    else if (computerMove === 'scissors' && move === 'paper') {
        message = "You lose.";
        computerWins++;
    }
    else if (computerMove === 'scissors' && move === "rock") {
        message = "You win!"
        playerWins++;
    }
    gameRef.innerHTML = `
    <div>
    <p>You chose ${move}.<p>
    <p>Computer chose ${computerMove}.</p>
    <p><strong>${message}</strong></p>
    </div>
    `
    playButton.innerText = "Play Again!";
    playButton.style.display = 'block';
    scoreboard.innerHTML = `
    Wins: <strong>${playerWins}</strong> | Lose: <strong>${computerWins}</strong> | Ties <strong>${ties}</strong>

    `
    console.log(computerMove);
}