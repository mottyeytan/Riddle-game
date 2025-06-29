# Riddle Game 

## Description 
A simple command-line riddle game where the player answers riddles and gets feedback and stats about their performance.

## Files
- `app.js` - Main game logic 
- `classes/Player.js` - Player class 
- `classes/Riddle.js` - Riddle class 
- `riddles/` - Riddles data 

## Project Structure

```
riddle_project/
│
├── app.js                # Main game logic and flow
├── classes/
│   ├── Player.js         # Player class: handles player data, timing, and stats
│   └── Riddle.js         # Riddle class: handles riddle logic, timing, and hints
├── riddles/
│   ├── r1.js             # Riddle 1 data
│   ├── r2.js             # Riddle 2 data
│   ├── r3.js             # Riddle 3 data
│   └── index.js          # Exports all riddles
├── package.json
└── README.md
```

## Function Explanations

### app.js

- **Main Flow**:  
  Orchestrates the game: gets player name, lets the player choose difficulty, loads riddles, asks each riddle, records time, and shows stats.

### classes/Player.js

- **constructor**:  
  Initializes the player with a name and an array to store times for each riddle.

- **recordTime(start, end)**:  
  Calculates the time (in seconds) taken to answer a riddle.

- **showStats(riddles)**:  
  Displays the player's total and average time. If the player exceeded the time limit or used a hint on any riddle, it prints a penalty message.

- **chooseDifficulty()**:  
  Prompts the player to select a difficulty level (easy, medium, hard).

### classes/Riddle.js

- **constructor**:  
  Initializes a riddle with id, difficulty, time limit, hint, name, description, and correct answer.

- **ask()**:  
  Presents the riddle to the player, offers a hint (with penalty), checks the answer, and measures the time taken. If the player exceeds the time limit or uses a hint, sets a penalty flag.



