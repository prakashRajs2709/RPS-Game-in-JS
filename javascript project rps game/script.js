let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    if(userChoice === "rock"){
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else if(userChoice === "paper"){
        msg.innerText = `You win! Your ${userChoice} holds ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `You win! Your ${userChoice} cuts ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    
  } 
  else {
    compScore++;
    compScorePara.innerText = compScore;
    if(compChoice === "rock"){
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    }
    else if(compChoice === "paper"){
        msg.innerText = `You lost. ${compChoice} holds your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    else{
        msg.innerText = `You lost. ${compChoice} cuts your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = generateComputerChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } 
  else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } 
    else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } 
    else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});