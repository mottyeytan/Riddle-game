import checkPlayerName from './CheckPlayerName.js';
import checkPlayerTimeAndUpdate from './CheckPlayerTimeAndUpdate.js';
import Player from './classes/Player.js';
import Riddle from './classes/Riddle.js';
import createPlayer from './CreatePlayer.js';

const player = new Player();

const riddlesClass = riddles.map(r => new Riddle(r.id, r.difficulty, r.timelimit,r.hint, r.name, r.taskDescription, r.correctAnswer));


function playGame(difficulty){

    console.log("welcome to the riddle game")
    const name = readline.question("what's your name? ");
    console.log("")

    player.name = name;

    if(!checkPlayerName()){

        createPlayer(player.name)

    }

    const difficulty = player.chooseDifficulty();
    const filterRiddles = riddlesClass.filter(r => r.difficulty === difficulty);
    console.log("")




}