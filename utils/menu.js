import { log } from 'console';
import { Long } from 'mongodb';
import {createInterface} from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

function menu(){

    console.log("What you wnat to do?");
    console.log("1. Play the game");
    console.log("2. Create a new riddle");
    console.log("3. Read the riddles");
    console.log("4. Update an exsiting riddle");
    console.log("5. Delete a riddle");
    console.log("6. View leaderboard");

    rl.question("enter you choice: ", (option)=>{
        if(option==="1"){
            rl.question("choose the difficuly og the game:\n1. easy\n2. medium\n.3. hard")

        }
        else if(option === "2"){

        }
        else if(option === "3"){

        }
        else if(option === "4"){

        }
        else if(option === "5"){

        }
        else if(option === "6"){

        }
    })


    
    
    
}