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
    console.log("5. View leaderboard");
    
    
    
}