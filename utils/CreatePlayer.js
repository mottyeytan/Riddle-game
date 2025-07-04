import { writeFile, readFile } from "fs/promises"

async function createPlayer(name) {
    let players = [];
    let newID = 1;
    
    const NewPlayer = {id: newID ,name: name, record: null}
    
        try{
            const data = await readFile('players.txt', 'utf-8')
            
            if (data.trim() !== ''){
                players = JSON.parse(data)
                const lastID = players[players.length -1].id
                newID = lastID +1
                players.push(NewPlayer)

            }else{
                players.push(NewPlayer)
            }
            await writeFile('players.txt', JSON.stringify(players, null, 2), 'utf-8');
                
        }catch(err){console.log(err)}

    
    

    

    
}

export default createPlayer;

