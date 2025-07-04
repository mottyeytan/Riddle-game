import { readFile, writeFile } from "fs/promises";

import readline from "readline-sync";

async function createRiddle(){
    
    const difficulty = readline.question("Enter the difficulty(easy/medium/hard): ");
    const timeLimit = readline.question("Enter the time limit: ");
    const riddleName = readline.question("Enter the riddle name: ");
    const riddleDescription = readline.question("Enter the description: ");
    const hint = readline.question("Enter the hint: ");
    const correctAnswer = readline.question("Enter the correct answer: ");

    let riddles = [];
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

    
        try{
            const data = await readFile('riddles.txt', 'utf-8');

            if (data.trim() !== ''){
                riddles = JSON.parse(data);
                const lastID = riddles[riddles.length -1].id
                newID = lastID +1
                riddles.push(newRiddle);
            }else{
                riddles.push(newRiddle);
            }
            
            await writeFile('riddles.txt', JSON.stringify(riddles, null, 2), 'utf-8');
            
            
        }catch(err){
            console.log(err);
        }
        
    
}

export default createRiddle;