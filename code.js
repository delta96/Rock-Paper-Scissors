function computerPlay() { // Will return computer's option of "Rock", "Paper", "Scissors"
    let num = compRand(1, 3);
    
    if(num === 1){ //If randomly generated number is 1 then computer chose 'Rock'
        let option = 'Rock';
        return option;
    } else if(num === 2){ //If randomly generated number is 2 then computer chose 'Paper'
        let option = 'Paper';
        return option;
    } else { //If randomly generated number is 3 then computer chose 'Scissors'
        let option = 'Scissors'; 
        return option;
    }
}

function compRand(min, max) { // Will generate a random number to use in computerPlay to select option
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    return rand;
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

let compWins = 0; // create a global variable to keep count of computer wins.
let playerWins = 0; //create a global variable to keep count of player wins.

function playerRock(comp){ // Will decide game outcome if Player chooses Rock
   // let comp = computerPlay();

    if(comp === 'Rock'){
        let prompt = "Player: Rock | Computer: Rock || It's a tie.";
        document.getElementById('score').innerHTML = prompt;
        console.log(compWins);
    } else if(comp === 'Paper'){
        let prompt = "Player: Rock | Computer: Paper || You Lose! Paper beats Rock.";
        compWins = ++compWins;
        document.getElementById('score').innerHTML = prompt;
        console.log(compWins);
    } else if(comp === 'Scissors'){
        let prompt = "Player: Rock | Computer: Scissors || You Win! Rock beats Scissors.";
        playerWins = ++playerWins;
        document.getElementById('score').innerHTML = prompt;
        console.log(compWins);
    }


    if(playerWins === 5){
        disableButtons(); 
        let prompt = 'You Win!';
        document.getElementById('score').innerHTML = prompt;
    } else if (compWins === 5) {
        disableButtons();
        let prompt = 'You Lose';
        document.getElementById('score').innerHTML = prompt;
    }
}

function playerPaper(comp){ // Will decide game outcome if Player chooses Paper
   // let comp = computerPlay();

    if(comp === 'Rock'){
        let prompt = "Player: Paper | Computer: Rock || You Win! Paper beats Rock.";
        playerWins = ++playerWins
        document.getElementById('score').innerHTML = prompt;
    } else if(comp === 'Paper'){
        let prompt = "Player: Paper | Computer: Paper || It's a Tie.";
        document.getElementById('score').innerHTML = prompt;
    } else if(comp === 'Scissors'){
        let prompt = "Player: Paper | Computer: Scissors || You Lose! Scissors beats Paper.";
        document.getElementById('score').innerHTML = prompt;
    }


    if(playerWins === 5){
        disableButtons(); 
        let prompt = 'You Win!';
        document.getElementById('score').innerHTML = prompt;
    } else if (compWins === 5) {
        disableButtons();
        let prompt = 'You Lose';
        document.getElementById('score').innerHTML = prompt;
    }
    

}

function playerScissors(comp){ // Will decide game outcome if Player chooses Scissors
    //let comp = computerPlay();

    if(comp === 'Rock'){
        let prompt = "Player: Scissors | Computer: Rock || You Lose! Rock beats Scissors.";
        compWins = ++compWins;
        document.getElementById('score').innerHTML = prompt;
    } else if(comp === 'Paper'){
        let prompt = "Player: Scissors | Computer: Paper || You Win! Scissors beats Paper.";
        playerWins = ++playerWins;
        document.getElementById('score').innerHTML = prompt;
    } else if(comp === 'Scissors'){
        let prompt = "Player: Scissors | Computer: Scissors || Its a Tie.";
        document.getElementById('score').innerHTML = prompt;
    }


    if(playerWins === 5){
        disableButtons(); 
        let prompt = 'You Win!';
        document.getElementById('score').innerHTML = prompt;
    } else if (compWins === 5) {
        disableButtons();
        let prompt = 'You Lose';
        document.getElementById('score').innerHTML = prompt;
    }
}

function playRound(player){ // Plays a round and returns outcome.
    let computer = computerPlay();
    if(player === 'rock'){
        return playerRock(computer);
    } else if(player === 'paper'){
        return playerPaper(computer);
    } else if(player === 'scissors'){
        return playerScissors(computer);
    } 
    console.log(compWins);
    
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value);
    })})




