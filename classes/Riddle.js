import readline from "readline-sync";

class Riddle {
    constructor(id, name, taskDescription, correctAnswer){
        this.id = id;
        this.name = name ;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask(){
        console.log(this.name)
        console.log("------------------")
        console.log(this.taskDescription);
        let userAnswer = readline.question("Enter your answer: ");
        while (userAnswer !== this.correctAnswer){
            console.log("Incorrect!");
            console.log("")
            userAnswer = readline.question("Enter your answer: ");
        }
        console.log("Correct!");
        console.log("")
    }
}

export default Riddle;