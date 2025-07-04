
import { printDifficultyMenu, printWarning } from '../utils/coolPrint.js';

function chooseDifficulty(input){
    switch (input){
        case "1":
            return "easy";
        
        case "2":
            return "medium"
        
        case "3": 
            return "hard"
        
        default:
            printWarning("Invalid option, defaulting to 'easy'.");
            return "easy";
    }
}

// Function to show difficulty menu
export function showDifficultyMenu() {
    printDifficultyMenu();
}

export default chooseDifficulty;