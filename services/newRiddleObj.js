import Riddle from "../classes/Riddle.js";
import readRiddle from "../riddleutils/readRiddle.js";

async function newRiddleObj(){
    const riddles = await readRiddle();

    return new Riddle(riddle.id, riddle.difficulty, riddle.timeLimit, riddle.hint, riddle.name, riddle.description, riddle.correctAnswer);
}

export default newRiddleObj;