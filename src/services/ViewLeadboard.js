import { readFile } from "fs/promises";


async function viewLeadboard(){
    try{
        const data = await readFile('db/players.txt', 'utf-8');

        const players = JSON.parse(data)

        players.sort((a, b) => a.record - b.record);

        console.log("Leadboard:");
        console.log("--------------------------------");
        console.log("Rank\tName\tRecord");
        console.log("--------------------------------");

        players.forEach((player, index) => {
            console.log(`${index + 1}\t${player.name}\t${player.record}`);
        });
    }catch(err){
        console.log(err);
    }
}

export default viewLeadboard;