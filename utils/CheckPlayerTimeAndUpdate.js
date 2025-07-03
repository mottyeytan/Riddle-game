import { readFile, writeFile } from "fs/promises";

async function checkPlayerTimeAndUpdate(name, time){
    
    try{
        const data = await readFile('players.txt', 'utf-8');

        const players = JSON.parse(data);

        const player = players.find(player => player.name === name)

        if (!player.record || player.record > time){
            player.record = time;
            await writeFile('players.txt', JSON.stringify(players, null, 2), 'utf-8');
            console.log(`New record for ${name}: ${time} seconds`);
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

