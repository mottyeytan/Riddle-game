import checkPlayerName from './CheckPlayerName.js';
import checkPlayerTimeAndUpdate from './CheckPlayerTimeAndUpdate.js';
import createPlayer from './CreatePlayer.js';
import readline from 'readline-sync';
import newPlayerObj from './newPlayerObj.js';
import newRiddleObj from './newRiddleObj.js';
import getRecordByname from './getRecordByname.js';
import { 
    printSuccess, 
    printInfo, 
    printProgressBar, 
    countdown, 
    showLoading,
    printSeparator,
    printError 
} from '../utils/coolPrint.js';
import chalk from 'chalk';

async function playGame(difficulty){

    const player = newPlayerObj();
    const riddles = await newRiddleObj(); 

    console.log(chalk.green.bold("\n🎮 Welcome to the Riddle Game! 🎮"));
    printSeparator('=', 50, 'green');
    
    const name = readline.question(chalk.cyan("👤 What's your name? "));
    console.log("")

    player.name = name;

    if(!(await checkPlayerName(player.name))){
        printInfo(`Creating new player profile for ${name}...`);
        await createPlayer(player.name);
        printSuccess(`Welcome to the game, ${name}! 🎉`);
    }else{
        const previousRecord = await getRecordByname(player.name);
        printSuccess(`Welcome back, ${name}! 🎉`);
        if (previousRecord) {
            printInfo(`Your previous best record: ${previousRecord.toFixed(2)} seconds`);
        }
    }

    const filterRiddles = riddles.filter(r => r.difficulty === difficulty);
    
    if (filterRiddles.length === 0) {
        printError(`No riddles found for difficulty: ${difficulty}`);
        return;
    }
    
    printInfo(`Found ${filterRiddles.length} riddle(s) for ${difficulty} difficulty`);
    
    // Countdown before starting
    await countdown(3);
    
    console.log("")

    for (let i = 0; i < filterRiddles.length; i++){
        // Show progress
        printProgressBar(i, filterRiddles.length);
        console.log(chalk.blue.bold(`\n📍 Riddle ${i + 1} of ${filterRiddles.length}`));
        
        let start = Date.now();
        filterRiddles[i].ask();
        let end = Date.now();
        const time = player.recordTime(start, end);
        player.times.push(time);
        
        // Small delay between riddles
        if (i < filterRiddles.length - 1) {
            await showLoading("Loading next riddle...", 1000);
        }
    } 

    // Final progress
    printProgressBar(filterRiddles.length, filterRiddles.length);
    
    await player.showStats(filterRiddles);

}

export default playGame;