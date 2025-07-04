import {readFile}  from 'fs/promises'

async function checkPlayerName(name){
    try{
        const data = await readFile('db/players.txt', 'utf-8');
        
        const players = JSON.parse(data);

        const found = players.some(player => player.name === name);
        
        return found;
    
    }catch(err){console.log(err);
        return false;
    }

}


export default checkPlayerName;