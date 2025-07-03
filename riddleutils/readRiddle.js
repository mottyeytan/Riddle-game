import { readFile } from "fs/promises";

// we can use it also to import the riddles to the game
async function readRiddle(showTable = false){
    try{
        const data = await readFile('riddles.txt', 'utf-8');
        
        // Check if the file is empty or contains only whitespace
        if (!data.trim()) {
            console.log("riddles.txt is empty. Returning empty array.");
            return [];
        }
        
        const riddles = JSON.parse(data);
        if (showTable) {
            console.table(riddles);
        }
        return riddles;
    }catch(err){
        console.log("Error reading riddles:", err.message);
        console.log("Returning empty array.");
        return [];
    }
}
export default readRiddle;