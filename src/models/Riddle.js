import readline from "readline-sync";
import { printRiddleHeader, printSuccess, printError, printWarning, printInfo } from "../utils/coolPrint.js";
import chalk from 'chalk';

class Riddle {
    constructor(id, difficulty, timeLimit, hint, name, taskDescription, correctAnswer){
        this.id = id;
        this.difficulty = difficulty;
        this.timeLimit = timeLimit;
        this.hint = hint;
        this.isPassedTime = false;
        this.name = name ;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask(){
        // Display riddle with cool styling
        printRiddleHeader(this.name, this.difficulty);
        console.log(chalk.white.bold(`❓ ${this.taskDescription}`));
        console.log('');

        // Time limit warning
        if (this.timeLimit) {
            printWarning(`You have ${this.timeLimit} seconds to answer!`);
        }

        // Hint option
        const hint = readline.question(chalk.yellow("💡 Do you want a hint? (yes/no): "));
        if (hint.toLowerCase() === "yes"){
            console.log("");
            printInfo(`Hint: ${this.hint}`);
            console.log("");
            this.isPassedTime = true;
        }
        else{
            console.log("");
        }

        const start = Date.now();
        
        let userAnswer = readline.question(chalk.cyan("✍️  Enter your answer: "));
        while (userAnswer.toLowerCase() !== this.correctAnswer.toLowerCase()){
            printError("Incorrect! Try again...");
            console.log("")
            userAnswer = readline.question(chalk.cyan("✍️  Enter your answer: "));
        }
        
        printSuccess("Correct! Well done! 🎉");
        console.log("")
        let end = Date.now();
        const time = (end - start)/1000;

        if(time > this.timeLimit){
            printWarning(`Too slow! You took ${time.toFixed(2)} seconds (limit: ${this.timeLimit}s)`);
            this.isPassedTime = true;
        } else {
            printInfo(`Great timing! You answered in ${time.toFixed(2)} seconds`);
        }
    }
}

export default Riddle;