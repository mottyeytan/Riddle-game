import { readFile } from "fs/promises";

async function readRiddle(){
    try{
        const data = await readFile('riddles.txt', 'utf-8');
        const riddles = JSON.parse(data);
        console.table(riddles);
    }catch(err){
        console.log(err);
    }
}
export default readRiddle;