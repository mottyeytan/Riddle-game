import chalk from 'chalk';
import readline from "readline-sync";


import { r1, r2, r3} from "./riddles/index.js";
const riddles = [r1, r2, r3];


import Player from './classes/Player.js';
import Riddle from './classes/Riddle.js';

const player = new Player();

const riddlesClass = riddles.map(r => new Riddle(r.id, r.difficulty, r.timelimit, r.name, r.taskDescription, r.correctAnswer));



//game starts 

console.log("welcome to the riddle game")
const name = readline.question("what's your name? ");
console.log("")

player.name = name;

const difficulty = player.chooseDifficulty();
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