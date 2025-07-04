import { readFile } from "fs/promises";

async function getRecordByname(name){
    try{
        const data = await readFile('db/players.txt', 'utf-8');
        const players = JSON.parse(data);
        const player = players.find(player => player.name === name);
        return player.record;
    }catch(err){
        console.log(err);
    }
}

export default getRecordByname;