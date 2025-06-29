import readline from "readline-sync";

class Riddle {
    constructor(id, difficulty, timeLimit, name, taskDescription, correctAnswer){
        this.id = id;
        this.difficulty = difficulty;
        this.timeLimit = timeLimit;
        this.isPassedTime = false;
        this.name = name ;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask(){
        
        console.log(this.name)
        console.log("------------------")
        console.log(this.taskDescription);
        const start = Date.now();
        
        let userAnswer = readline.question("Enter your answer: ");
        while (userAnswer !== this.correctAnswer){
            console.log("Incorrect!");
            console.log("")
            userAnswer = readline.question("Enter your answer: ");
        }
        console.log("Correct!");
        console.log("")
        let end = Date.now();
        const time = (end - start)/1000;

        if(time > this.timeLimit){
            console.log(`Too slow! ${this.timeLimit} seconds penalty applied.`)
            this.isPassedTime = true;
        }
    }
}

export default Riddle;