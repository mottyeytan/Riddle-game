import { readFile } from "fs/promises";
import { printLeaderboardHeader, printLeaderboardEntry, printError, printWarning } from "../utils/coolPrint.js";

async function viewLeadboard(){
    try{
        const data = await readFile('db/players.txt', 'utf-8');
        const players = JSON.parse(data);

        // Filter players who have played (have a record)
        const playedPlayers = players.filter(player => player.record !== null);
        
        if (playedPlayers.length === 0) {
            printWarning("No players have completed any games yet!");
            return;
        }

        // Sort by best time (lowest first)
        playedPlayers.sort((a, b) => a.record - b.record);

        printLeaderboardHeader();

        playedPlayers.forEach((player, index) => {
            const rank = index + 1;
            const isTopThree = rank <= 3;
            printLeaderboardEntry(rank, player.name, player.record, isTopThree);
        });

        console.log('\n');
    }catch(err){
        printError("Failed to load leaderboard: " + err.message);
    }
}

export default viewLeadboard;