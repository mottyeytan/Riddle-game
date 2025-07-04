import readline from "readline-sync";
import checkPlayerTimeAndUpdate from "../services/CheckPlayerTimeAndUpdate.js";
import { printGameStats, celebrate } from "../utils/coolPrint.js";



class Player{
    constructor(){
        this.name = "";
        this.times = [];
        
    }

    recordTime(start, end){
        return (end - start) / 1000;
    }

    async showStats(riddles){
        let totalTime = 0;
        let averageTime = 0;
        for(let i = 0; i < this.times.length; i++){
            totalTime += this.times[i];
        }

        averageTime = totalTime / this.times.length;

        // Check if it's a new record
        const isNewRecord = await checkPlayerTimeAndUpdate(this.name, totalTime);
        
        // Display cool stats
        printGameStats(this.name, totalTime, averageTime, isNewRecord);
        
        // Check for time penalties
        const penaltyTime = riddles.find(r => r.timeLimit)
        if (riddles.some(r => r.isPassedTime)) {
            console.log("");
            console.log(`⚠️  Time limit penalty applied. It took you more than ${penaltyTime.timeLimit} seconds or you used the hint`);
        }
        
        // Celebration if new record
        if (isNewRecord) {
            await celebrate();
        }
    }

    
}

export default Player;