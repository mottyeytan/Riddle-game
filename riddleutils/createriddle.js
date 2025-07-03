import { readFile, writeFile, exists } from "fs/promises";

import readline from "readline-sync";

async function createRiddle(riddle){
    
    const difficulty = readline.question("Enter the difficulty(easy/medium/hard): ");
    const timeLimit = readline.question("Enter the time limit: ");
    const riddleName = readline.question("Enter the riddle name: ");
    const riddleDescription = readline.question("Enter the description: ");
    const hint = readline.question("Enter the hint: ");
    const correctAnswer = readline.question("Enter the correct answer: ");

    let riddles = []

    const newRiddle = {
        name: riddleName,
        description: riddleDescription,
        correctAnswer: correctAnswer,
        difficulty: difficulty,
        timeLimit: timeLimit,
        hint: hint
    }

    if(await exists('riddles.txt')){
        try{
            const data = await readFile('riddles.txt', 'utf-8');
            const riddles = JSON.parse(data);
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