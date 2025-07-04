import Riddle from "../classes/Riddle.js";
import readRiddle from "../riddleutils/readRiddle.js";

async function newRiddleObj(){
    const riddles = await readRiddle(false);
    const riddlesClass = riddles.map(r => new Riddle(r.id, r.difficulty, r.timeLimit, r.hint, r.name, r.description, r.correctAnswer));

    return riddlesClass;
}

export default newRiddleObj;