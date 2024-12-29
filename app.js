let userCurrentScore = 0;
let compCurrentScore = 0;
let choices = document.querySelectorAll(".choices");
let message = document.querySelector("#message");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");

//function to generate computer choice
const genCompChoice = () => {
  const compChoices = ["paper", "scissors", "rock"];
  const randIndx = Math.floor(Math.random() * 3);
  return compChoices[randIndx];
};

//function for deciding winner
const decideWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    message.innerText = `You Win!  your ${userChoice} beats ${compChoice}`;
    userCurrentScore++;
    userScore.innerText = userCurrentScore;
  } else {
    message.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
    compCurrentScore++;
    compScore.innerText = compCurrentScore;
  }
};

//function for playing game
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (compChoice === userChoice) {
    message.innerText = "Game was Draw Play again";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    decideWinner(userWin, userChoice, compChoice);
  }
};

//handling when user pick it's choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
