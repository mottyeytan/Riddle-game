

function chooseDifficulty(input){
    switch (input){
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

export default chooseDifficulty;