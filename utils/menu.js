import chooseDifficulty from './difficulty.js';
import playGame from './play_game.js';
import readline from 'readline-sync';
import createRiddle from '../riddleutils/createriddle.js';
import readRiddle from '../riddleutils/readRiddle.js';
import updateRiddle from '../riddleutils/updateRiddle.js';
import deleteRiddle from '../riddleutils/deleteRiddle.js';
import viewLeadboard from '../services/ViewLeadboard.js';

async function menu(){

    console.log("What you want to do?");
    console.log("1. Play the game");
    console.log("2. Create a new riddle");
    console.log("3. Read the riddles");
    console.log("4. Update an existing riddle");
    console.log("5. Delete a riddle");
    console.log("6. View leaderboard");

    const option = readline.question("enter you choice: ");
    
    if(option==="1"){
        const diff = readline.question("choose the difficulty of the game:\n1. easy\n2. medium\n3. hard\n");
        const diffi = chooseDifficulty(diff);
        await playGame(diffi);
    }
    else if(option === "2"){
        await createRiddle();
    }
    else if(option === "3"){
        await readRiddle(true);
    }
    else if(option === "4"){
        await updateRiddle();
    }
    else if(option === "5"){
        await deleteRiddle();
    }
    else if(option === "6"){
        await viewLeadboard();

    }
    
}


menu()