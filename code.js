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