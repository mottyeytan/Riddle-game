import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";

import readline from "readline-sync";

async function createRiddle(riddle){
    
    const difficulty = readline.question("Enter the difficulty(easy/medium/hard): ");
    const timeLimit = readline.question("Enter the time limit: ");
    const riddleName = readline.question("Enter the riddle name: ");
    const riddleDescription = readline.question("Enter the description: ");
    const hint = readline.question("Enter the hint: ");
    const correctAnswer = readline.question("Enter the correct answer: ");

    let riddles = []
    let newID = 1;

    const newRiddle = {
        id: newID,
        name: riddleName,
        description: riddleDescription,
        correctAnswer: correctAnswer,
        difficulty: difficulty,
        timeLimit: timeLimit,
        hint: hint
    }

    if(existsSync('riddles.txt')){
        try{
            const data = await readFile('riddles.txt', 'utf-8');
            const riddles = JSON.parse(data);
            
            if(riddles.length>0){
                const lastID = riddles[riddles.length -1].id
                newID = lastID +1
            }
            riddles.push(newRiddle);
            
        }catch(err){
            console.log(err);
        }
    
    }else{
        riddles.push(newRiddle);
    }

    await writeFile('riddles.txt', JSON.stringify(riddles, null, 2), 'utf-8');
    
    
}

export default createRiddle;