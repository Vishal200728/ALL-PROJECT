let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-choice");
const compScorePara = document.querySelector("#comp-choice");

// Generate computer's choice randomly
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

// Handle a draw
const drawGame = () => {
    msg.innerText = "It's a draw! Play again.";
    msg.style.backgroundColor = "#081b31";
};

// Handle win/lose and update UI
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

// Main game logic
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWins = false;

        if (
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper")
        ) {
            userWins = true;
        }

        showWinner(userWins, userChoice, compChoice);
    }
};

// Set up click event listeners on choices
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("data-choice");
        playGame(userChoice);
    });
});
