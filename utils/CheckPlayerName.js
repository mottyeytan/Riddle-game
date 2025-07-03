import {readFile}  from 'fs/promises'
import { Long } from 'mongodb';

async function checkPlayerName(name){
    try{
        const data = await readFile('players.txt', 'utf-8');
        
        const convert = JSON.parse(data)

        const found = convert.some(player => player.name === name)
        return found
    
    }catch(err){console.log(err);
        return false;
    }
    


}

checkPlayerName("motty").then(result => {
    console.log(result);
});    


export default checkPlayerName;