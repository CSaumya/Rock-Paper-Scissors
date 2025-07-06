let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".btn");
const msg = document.querySelector("#msg");

const userScorep= document.querySelector ("#user-score");
const botScorep= document.querySelector ("#bot-score");

const genBotChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = (userChoice)  =>{
  msg.innerText = `It's a draw 🤝. Both chose ${userChoice}`;
  msg.style.backgroundColor = "#4D7298";
};

const showWinner = (userWin, userChoice , botChoice) =>{
  if(userWin){
    userScore++;
    userScorep.innerText = userScore;
    msg.innerText = `You win 🎉. Your ${userChoice} beats Bot's ${botChoice}`;
    msg.style.backgroundColor = "green";
  }
  else{
    botScore++;
    botScorep.innerText = botScore;
    msg.innerText = `You lose 😞. Bot's ${botChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
   // generate bot's choice
   const botChoice = genBotChoice();
   if(userChoice === botChoice){
    //draw
    drawGame(userChoice);
   }
   else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = botChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
      userWin = botChoice === "scissors" ? false : true;
    }
    else{
      userWin = botChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, botChoice);
   }
};

choices.forEach((btn) => {
   btn.addEventListener("click", () =>{
    const userChoice = btn.getAttribute("id")
   playGame(userChoice);
   });
});