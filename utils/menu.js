import chooseDifficulty from './difficulty.js';
import playGame from './play_game.js';
import readline from 'readline-sync';

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

    }
    else if(option === "3"){

    }
    else if(option === "4"){

    }
    else if(option === "5"){

    }
    else if(option === "6"){

    }




    
    
    
}


menu()