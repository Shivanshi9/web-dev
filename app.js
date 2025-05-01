const choices = document.querySelectorAll(".choice");
const mag = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
let userScore = 0;   //variable 1
let compScore = 0;   //variable 2

const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random() * 3); 
    //math.random() it is a class jo 0 se 1 ke bich ka koi bhi no. deti h and math.floor useke decimal part ko hatata hai smjhe
    return options[randomIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "DRAW GAME";
    msg.style.backgroundColor = "purple";
 };

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you won");
        msg.innerText = "YOU WON";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = "YOU LOSE";
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = gencompchoice();
    console.log("comp choice =",compChoice);
//not getting understood 
    if( userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //either comp will chose paper or scissor if it choses rock it will bw counted it draw game so comp have only two options
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissor rock
            userWin = compChoice === "scissor" ? false : true ;
        }else{
            //rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}); 

//user input ko access kiya 
//now comp ke input ko access krna h

//remember strings are always used in "" 
//completed