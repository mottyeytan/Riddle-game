import { readFile, writeFile } from "fs/promises";

async function updateRiddle(){
    const id = readline.question("Enter the id of the riddle you want to update: ");

    const question = readline.question("which field you want to update?\n1: all\n2: name\n3: description\n4: correctAnswer\n5: difficulty\n6: timeLimit\n7: hint\n");
    
    let newRiddle = {}
    let fullRiddle = {}
    
    switch(question){
        case "1":
            riddleName = readline.question("Enter the new riddle name: ");
            riddleDescription = readline.question("Enter the new riddle description: ");
            correctAnswer = readline.question("Enter the new correct answer: ");
            difficulty = readline.question("Enter the new difficulty: ");
            timeLimit = readline.question("Enter the new time limit: ");
            hint = readline.question("Enter the new hint: ");

            fullRiddle = {
                id: id,
                name: riddleName,
                description: riddleDescription,
                correctAnswer: correctAnswer,
                difficulty: difficulty,
                timeLimit: timeLimit,
                hint: hint
            }
            break;
        case "2":
            riddleName = readline.question("Enter the new riddle name: ");
            newRiddle = {
                id: id,
                name: riddleName,
            }
            break;
        case "3":
            riddleDescription = readline.question("Enter the new riddle description: ");
            newRiddle = {
                id: id,
                description: riddleDescription,
            }
            break;
        case "4":
            correctAnswer = readline.question("Enter the new correct answer: ");
            newRiddle = {
                id: id,
                correctAnswer: correctAnswer,
            }
            break;
        case "5":
            difficulty = readline.question("Enter the new difficulty: ");
            newRiddle = {
                id: id,
                difficulty: difficulty,
            }
            break;
        case "6":
            timeLimit = readline.question("Enter the new time limit: ");
            newRiddle = {
                id: id,
                timeLimit: timeLimit,
            }
            break;
        case "7":
            hint = readline.question("Enter the new hint: ");
            newRiddle = {
                id: id,
                hint: hint,
            }
            break;
        default:
            console.log("Invalid option");
            break;
    }
    
    try{
        const data = await readFile('riddles.txt', 'utf-8');
        const riddles = JSON.parse(data);
        const index = riddles.findIndex(riddle => riddle.id === id);

        if (index !== -1){
            if (fullRiddle){
                riddles[index] = fullRiddle;
            }else{
                if (newRiddle.name){
                    riddles[index].name = newRiddle.name;
                }
                if (newRiddle.description){
                    riddles[index].description = newRiddle.description;
                }
                if (newRiddle.correctAnswer){
                    riddles[index].correctAnswer = newRiddle.correctAnswer;
                }
                if (newRiddle.difficulty){
                    riddles[index].difficulty = newRiddle.difficulty;
                }
                if (newRiddle.timeLimit){
                    riddles[index].timeLimit = newRiddle.timeLimit;
                }
                if (newRiddle.hint){
                    riddles[index].hint = newRiddle.hint;
                }
            }
        }else{
            console.log("Riddle with this id not found");
            return;
        }

        await writeFile('riddles.txt', JSON.stringify(riddles, null, 2), 'utf-8');
        console.log("Riddle updated successfully");


    }catch(err){
        console.log(err);
    }
}

export default updateRiddle;