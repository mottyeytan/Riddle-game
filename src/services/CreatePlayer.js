import { writeFile, readFile } from "fs/promises"

async function createPlayer(name) {
    let players = [];
    let newID = 1;
    
    try{
        const data = await readFile('db/players.txt', 'utf-8')
        
        if (data.trim() !== ''){
            players = JSON.parse(data)
            if (players.length > 0) {
                const lastID = players[players.length -1].id
                newID = lastID +1
            }
        }
            
    }catch(err){console.log(err)}

    const NewPlayer = {id: newID ,name: name, record: null}
    players.push(NewPlayer)
    
    try{
        await writeFile('db/players.txt', JSON.stringify(players, null, 2), 'utf-8');
        console.log(`Player "${name}" created with ID ${newID}`);
    }catch(err){console.log(err)}

    
    

    

    
}

export default createPlayer;

