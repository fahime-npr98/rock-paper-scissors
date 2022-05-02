
let pScore=0
let cScore=0

//...score...
const updateScore= () =>{
 const pScoreShow=document.querySelector(".pscore p")
 const cScoreShow=document.querySelector(".cscore p")
 pScoreShow.textContent=pScore
 cScoreShow.textContent=cScore
}


// ...match...
const match = () => {
  const playerChoice = document.querySelectorAll(".options button");
  const playerHand= document.querySelector(".player-hand img");
  const computerHand= document.querySelector(".computer-hand img");

  // ...computeroptions...
  const computerOption = ["rock", "paper", "scissors"];
   

  // ...playerchoice...
  playerChoice.forEach((option) => {
    option.addEventListener("click", () => {
      let playerChoice = option.textContent;

      //...COMPUTER CHOICE...
      let computerNumber = Math.floor(Math.random() * 3);
      let computerChoice = computerOption[computerNumber];
      console.log(computerChoice);

      //...handimage..
      computerHand.src=`${computerChoice}.png`
      playerHand.src=`${playerChoice}.png`


      //...MOSAVI...
      if (playerChoice == computerChoice) {
        console.log("mosavi");
      } else {
        //...ROCK...
        if (playerChoice == "rock") {
          if (computerChoice == "paper") {
            console.log("bakhti");
            cScore+=1
            updateScore()
          } else {
            console.log("bordi");
            pScore+=1
            updateScore()
          }
        }
        //...PAPER...
        if (playerChoice == "paper") {
          if (computerChoice == "scissors") {
            console.log("bakhti");
            cScore+=1
            updateScore()
          } else {
            console.log("bordi");
            pScore+=1
            updateScore()
          }
        }
        //...SCISSORS...
        if (playerChoice == "scissors") {
          if (computerChoice == "rock") {
            console.log("bakhti");
            cScore+=1
            updateScore()
          } else {
            console.log("bordi");
            pScore+=1
            updateScore()
          }
        }
      }
    });
  });
};

match();
