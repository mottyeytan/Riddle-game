import { readFile } from "fs/promises";

// we can use it also to import the riddles to the game
async function readRiddle(showTable = false){
    try{
        const data = await readFile('db/riddles.txt', 'utf-8');
        const riddles = JSON.parse(data);
        
        if (showTable) {
            console.table(riddles.map(r => ({
                id: r.id,
                name: r.name,
                riddles: r.description
            })));
        }
        
        return riddles;

    }catch(err){
        console.log("Error reading riddles:", err.message);
        console.log("Returning empty array.");
        return [];
    }
}
export default readRiddle;