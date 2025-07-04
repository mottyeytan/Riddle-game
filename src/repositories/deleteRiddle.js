import { readFile, writeFile } from "fs/promises";
import readline from "readline-sync";

async function deleteRiddle(){
    const id = readline.question("Enter the id of the riddle you want to delete: ");

    try{
        const data = await readFile('db/riddles.txt', 'utf-8');
        const riddles = JSON.parse(data);
        const index = riddles.findIndex(riddle => riddle.id === parseInt(id));

        if (index !== -1){
            riddles.splice(index, 1);
            await writeFile('db/riddles.txt', JSON.stringify(riddles, null, 2), 'utf-8');
            console.log("Riddle deleted successfully");
        }else{
            console.log("Riddle with this id not found");
        }
    }catch(err){
        console.log(err);
    }
}

export default deleteRiddle;