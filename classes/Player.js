import readline from "readline-sync";


class Player{
    constructor(){
        this.name = "";
        this.times = [];
    }

    recordTime(start, end){
        return (end - start) / 1000;
    }

    showStats(){
        let totalTime = 0;
        let averageTime = 0;
        for(let i = 0; i < this.times.length; i++){
            totalTime += this.times[i];
        }
        averageTime = totalTime / this.times.length;
        console.log("")
        console.log(`great job ${this.name}!`)
        console.log(`Total time: ${totalTime} seconds`);
        console.log(`Average per riddle:: ${averageTime} seconds`);
    }

    chooseDifficulty(){
        const option = readline.question("please choose: \n1: easy\n2: medium\n3: hard\n");
    switch (option){
        case "1":
            return "easy";
        
        case "2":
            return "medium"
        
        case "3": 
            return "hard"
        
        default:
            console.log("Invalid option, defaulting to 'easy'.");
            return "easy";
    }
    }
}

export default Player;