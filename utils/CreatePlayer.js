import { writeFile, readFile } from "fs/promises"
import { existsSync } from "fs";

async function createPlayer(name) {
    let players = [];
    let newID = 1;
    
    if(existsSync('players.txt')){
        try{
        
            const data = await readFile('players.txt', 'utf-8')
    
            players = JSON.parse(data)
        
            if(players.length>0){
                const lastID = convert[convert.length -1].id
                newID = lastID +1
            }

        }catch(err){console.log(err)}

    }
    const NewPlayer = {id: 1 ,name: name, record: null}
    players.push(NewPlayer)

    await writeFile('players.txt', JSON.stringify(players, null, 2), 'utf-8');
    console.log(`Player "${name}" created with ID ${newID}`);


    
}

createPlayer("yakov")

