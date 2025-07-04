import checkPlayerName from './CheckPlayerName.js';
import checkPlayerTimeAndUpdate from './CheckPlayerTimeAndUpdate.js';
import createPlayer from './CreatePlayer.js';
import readline from 'readline-sync';
import newPlayerObj from './newPlayerObj.js';
import newRiddleObj from './newRiddleObj.js';
import getRecordByname from './getRecordByname.js';

async function playGame(difficulty){

    const player = newPlayerObj();
    const riddles = await newRiddleObj(); 

    console.log("welcome to the riddle game")
    const name = readline.question("what's your name? ");
    console.log("")

    player.name = name;

    if(!(await checkPlayerName(player.name))){

        await createPlayer(player.name)
    }else{
        console.log(`hi ${player.name} your previous record is ${await getRecordByname(player.name)}`)
    }

    const filterRiddles = riddles.filter(r => r.difficulty === difficulty);
    console.log("")

    for (let i = 0; i < filterRiddles.length; i++){
        let start = Date.now();
        filterRiddles[i].ask();
        let end = Date.now();
        const time = player.recordTime(start, end);
        player.times.push(time);
    } 

    player.showStats(filterRiddles);

}

export default playGame;