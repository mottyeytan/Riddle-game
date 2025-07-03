import readline from "readline-sync";
import checkPlayerTimeAndUpdate from "../utils/CheckPlayerTimeAndUpdate.js";



class Player{
    constructor(){
        this.name = "";
        this.times = [];
        this.TotalTime = 0;
        this.AverageTime = 0;
        this.lowestTime = 0;
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

        this.AverageTime = averageTime
        this.TotalTime = totalTime

        
        console.log("")
        console.log(`great job ${this.name}!`)
        console.log(`Total time: ${totalTime} seconds`);
        console.log(`Average per riddle:: ${averageTime} seconds`);

        if(checkPlayerTimeAndUpdate(this.name, this.totalTime)){
            // console.log("New record!");
            this.lowestTime = totalTime;     
        }
        
        // Check for time penalties
        const penaltyTime = riddles.find(r => r.timeLimit)
        if (riddles.some(r => r.isPassedTime)) {
            console.log("");
            console.log(`Time limit penalty applied. it took you more than ${penaltyTime.timeLimit} seconds. or you have used the hint`);
        }
    }

    
}

export default Player;