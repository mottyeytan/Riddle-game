import checkPlayerName from './CheckPlayerName.js';
import checkPlayerTimeAndUpdate from './CheckPlayerTimeAndUpdate.js';
import Player from '../classes/Player.js';
import Riddle from '../classes/Riddle.js';
import createPlayer from './CreatePlayer.js';
import readRiddle from '../riddleutils/readRiddle.js';
import readline from 'readline-sync';

const player = new Player();
const riddles = await readRiddle();
const riddlesClass = riddles.map(r => new Riddle(r.id, r.difficulty, r.timeLimit, r.hint, r.name, r.description, r.correctAnswer));


async function playGame(difficulty){

    console.log("welcome to the riddle game")
    const name = readline.question("what's your name? ");
    console.log("")

    player.name = name;

    if(!(await checkPlayerName(name))){

        await createPlayer(name)

    }

    const filterRiddles = riddlesClass.filter(r => r.difficulty === difficulty);
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