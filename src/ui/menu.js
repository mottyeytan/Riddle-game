import chooseDifficulty, { showDifficultyMenu } from '../ui/difficulty.js';
import playGame from '../services/play_game.js';
import readline from 'readline-sync';
import createRiddle from '../repositories/createriddle.js';
import readRiddle from '../repositories/readRiddle.js';
import updateRiddle from '../repositories/updateRiddle.js';
import deleteRiddle from '../repositories/deleteRiddle.js';
import viewLeadboard from '../services/ViewLeadboard.js';
import { 
    printGameBanner, 
    printMainMenu, 
    printSuccess, 
    printError, 
    showLoading,
    printInfo 
} from '../utils/coolPrint.js';

async function menu(){
    // Show cool banner first
    printGameBanner();
    
    // Show the styled menu
    printMainMenu();

    const option = readline.question("👉 Enter your choice: ");
    
    if(option==="1"){
        await showLoading("Preparing game...", 1000);
        showDifficultyMenu();
        const diff = readline.question("👉 Choose your difficulty: ");
        const diffi = chooseDifficulty(diff);
        await playGame(diffi);
    }
    else if(option === "2"){
        printInfo("Opening riddle creator...");
        await createRiddle();
        printSuccess("Riddle creation completed!");
    }
    else if(option === "3"){
        printInfo("Loading riddles...");
        await readRiddle(true);
    }
    else if(option === "4"){
        printInfo("Opening riddle editor...");
        await updateRiddle();
        printSuccess("Update completed!");
    }
    else if(option === "5"){
        printInfo("Opening riddle manager...");
        await deleteRiddle();
        printSuccess("Operation completed!");
    }
    else if(option === "6"){
        await showLoading("Loading leaderboard...", 1500);
        await viewLeadboard();
    }
    else if(option === "0"){
        printInfo("Thanks for playing! 🎮");
        process.exit(0);
    }
    else {
        printError("Invalid option! Please try again.");
        setTimeout(() => menu(), 2000);
    }
    
}

export default menu;


