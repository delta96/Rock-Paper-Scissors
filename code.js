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

function optionConvert(answer){  // Converts user answer to lower case for comparison
    let caseAnswer = answer.toLowerCase();
    return caseAnswer;
}


function playerRock(comp){ // Will decide game outcome if Player chooses Rock
    // let comp = computerPlay();
 
     if(comp === 'Rock'){
         let prompt = "Player: Rock | Computer: Rock || It's a tie.";
         return prompt;
     } else if(comp === 'Paper'){
         let prompt = "Player: Rock | Computer: Paper || You Lose! Paper beats Rock.";
         compWins = ++compWins;
         return prompt;
     } else if(comp === 'Scissors'){
         let prompt = "Player: Rock | Computer: Scissors || You Win! Rock beats Scissors.";
         playerWins = ++playerWins;
         return prompt;
     }
 
 }
 
 function playerPaper(comp){ // Will decide game outcome if Player chooses Paper
    // let comp = computerPlay();
 
     if(comp === 'Rock'){
         let prompt = "Player: Paper | Computer: Rock || You Win! Paper beats Rock.";
         playerWins = ++playerWins
         return prompt;
     } else if(comp === 'Paper'){
         let prompt = "Player: Paper | Computer: Paper || It's a Tie.";
         return prompt;
     } else if(comp === 'Scissors'){
         let prompt = "Player: Paper | Computer: Scissors || You Lose! Scissors beats Paper.";
         compWins = ++compWins;
         return prompt;
     }
 
 }
 
 function playerScissors(comp){ // Will decide game outcome if Player chooses Scissors
     //let comp = computerPlay();
 
     if(comp === 'Rock'){
         let prompt = "Player: Scissors | Computer: Rock || You Lose! Rock beats Scissors.";
         compWins = ++compWins;
         return prompt;
     } else if(comp === 'Paper'){
         let prompt = "Player: Scissors | Computer: Paper || You Win! Scissors beats Paper.";
         playerWins = ++playerWins;
         return prompt;
     } else if(comp === 'Scissors'){
         let prompt = "Player: Scissors | Computer: Scissors || Its a Tie.";
         return prompt;
     }
 
 }

 function playRound(player, computer){ // Plays a round and returns outcome.

    if(player === 'rock'){
        return playerRock(computer);
    } else if(player === 'paper'){
        return playerPaper(computer);
    } else if(player === 'scissors'){
        return playerScissors(computer);
    } else {
        let message = 'Not an option. Refresh and try again!';
        return message;
    }
}