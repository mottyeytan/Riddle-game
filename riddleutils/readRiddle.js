import { readFile } from "fs/promises";

// we can use it also to import the riddles to the game
async function readRiddle(){
    try{
        const data = await readFile('riddles.txt', 'utf-8');
        const riddles = JSON.parse(data);
        console.table(riddles);
        return riddles;
    }catch(err){
        console.log(err);
    }
}
export default readRiddle;