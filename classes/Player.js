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
}

export default Player;