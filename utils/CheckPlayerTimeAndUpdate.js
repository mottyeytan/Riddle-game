import { readFile, writeFile } from "fs/promises";
import checkPlayerName from "./CheckPlayerName.js";

async function checkPlayerTimeAndUpdate(name, time){
    
    try{
        const data = await readFile('players.txt', 'utf-8');

        const players = JSON.parse(data);

        const index = players.findIndex(player => player.name === name)

        if (!players[index].record || players[index].record > time){
            
            players[index].record = time;
            await writeFile('players.txt', JSON.stringify(players, null, 2), 'utf-8');
            
            return true;
        } else {
            
            return false;
        }

    }catch(err){
        console.log('Error updating player time:', err);
        return false;
    }
}

export default checkPlayerTimeAndUpdate;

