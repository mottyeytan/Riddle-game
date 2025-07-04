# 🧩 Riddle Game:

## 📝 Description 
An interactive command-line riddle game with beautiful ASCII art, colorful interface, animations, and comprehensive player management. Challenge yourself with riddles of different difficulty levels and compete for the best time!

## ✨ Features
- 🎨 **Beautiful ASCII Art Interface** - Stunning visual design
- 🌈 **Colorful Console Output** - Enhanced user experience with colors and emojis
- 🏆 **Leaderboard System** - Track and compete with other players
- 📊 **Player Statistics** - Detailed performance tracking
- ⏱️ **Time Tracking** - Record your best times
- 🎯 **Multiple Difficulty Levels** - Easy, Medium, and Hard
- 💡 **Hint System** - Get help when you're stuck
- 🔄 **CRUD Operations** - Create, read, update, and delete riddles
- 🎉 **Celebration Animations** - Fun feedback for achievements
- 📈 **Progress Bars** - Visual progress tracking during gameplay

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Game
```bash
node app.js
```

## 🗂️ Project Structure

```
riddle_project/
│
├── app.js                    # Main entry point
├── src/                      # Source code directory
│   ├── models/              # Domain models
│   │   ├── Player.js        # Player class with stats and timing
│   │   └── Riddle.js        # Riddle class with game logic
│   │
│   ├── services/            # Business logic layer
│   │   ├── play_game.js     # Main game flow orchestration
│   │   ├── CreatePlayer.js  # Player creation service
│   │   ├── CheckPlayerName.js # Player validation service
│   │   ├── CheckPlayerTimeAndUpdate.js # Record tracking
│   │   ├── ViewLeadboard.js # Leaderboard display service
│   │   ├── newPlayerObj.js  # Player object factory
│   │   └── newRiddleObj.js  # Riddle object factory
│   │
│   ├── repositories/        # Data access layer
│   │   ├── createriddle.js  # Create new riddles
│   │   ├── readRiddle.js    # Read riddles from storage
│   │   ├── updateRiddle.js  # Update existing riddles
│   │   └── deleteRiddle.js  # Delete riddles
│   │
│   ├── ui/                  # User interface layer
│   │   ├── menu.js          # Main menu system
│   │   └── difficulty.js    # Difficulty selection
│   │
│   └── utils/               # Utility functions
│       └── coolPrint.js     # Beautiful console output utilities
│
├── db/                      # Data storage
│   ├── players.txt          # Player records and statistics
│   └── riddles.txt          # Riddle database
│
├── package.json             # Project dependencies
└── README.md               # Project documentation
```

## 🎮 How to Play

1. **Start the Game**: Run `node app.js`
2. **Choose an Option** from the main menu:
   - 🎯 **Play the game** - Start a riddle session
   - ➕ **Create a new riddle** - Add your own riddles
   - 📖 **Read the riddles** - View all available riddles
   - ✏️ **Update an existing riddle** - Modify riddles
   - 🗑️ **Delete a riddle** - Remove riddles
   - 🏆 **View leaderboard** - See top players
3. **Select Difficulty**: Choose Easy, Medium, or Hard
4. **Answer Riddles**: Type your answers and try to beat your best time!
5. **View Results**: See your statistics and celebrate new records!

## 🏗️ Architecture

### Models Layer
- **Player**: Manages player data, timing, and statistics
- **Riddle**: Handles riddle logic, hints, and time limits

### Services Layer
- **Game Service**: Orchestrates the main game flow
- **Player Service**: Manages player operations (create, validate, update)
- **Leaderboard Service**: Handles ranking and display

### Repository Layer
- **Riddle Repository**: CRUD operations for riddles
- **Player Repository**: Data persistence for players

### UI Layer
- **Menu System**: Interactive navigation
- **Cool Print Utilities**: Beautiful console output with colors and animations

## 🎨 Visual Features

### ASCII Art Banner
```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║    ██████╗ ██╗██████╗ ██████╗ ██╗     ███████╗          ║
║    ██╔══██╗██║██╔══██╗██╔══██╗██║     ██╔════╝          ║
║    ██████╔╝██║██║  ██║██║  ██║██║     █████╗            ║
║    ██╔══██╗██║██║  ██║██║  ██║██║     ██╔══╝            ║
║    ██║  ██║██║██████╔╝██████╔╝███████╗███████╗          ║
║    ╚═╝  ╚═╝╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝          ║
║                                                          ║
║           🧩 GAME - Challenge Your Mind! 🧠            ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

### Colorful Menus
- 🎮 **Main Menu** with emoji icons
- 🎚️ **Difficulty Selection** with color-coded levels
- 🏆 **Leaderboard** with medals for top 3 players

### Interactive Elements
- ⏰ Countdown timers
- 📊 Progress bars
- 🎉 Celebration animations
- 💡 Colored hints and feedback

## 📋 Key Functions

### Player Class (`src/models/Player.js`)
- `constructor()`: Initialize player with empty stats
- `recordTime(start, end)`: Calculate time taken for a riddle
- `showStats(riddles)`: Display beautiful game results with potential celebrations

### Riddle Class (`src/models/Riddle.js`)
- `constructor()`: Initialize riddle with all properties
- `ask()`: Present riddle with beautiful formatting, handle hints and timing

### Cool Print Utilities (`src/utils/coolPrint.js`)
- `printGameBanner()`: Display ASCII art banner
- `printMainMenu()`: Show styled main menu
- `printGameStats()`: Show formatted game results
- `printLeaderboardHeader()` & `printLeaderboardEntry()`: Leaderboard display
- `showLoading()`: Animated loading indicators
- `celebrate()`: Fun celebration animations
- `countdown()`: Countdown timer with visual effects

## 🔧 Data Management

### Player Data (`db/players.txt`)
```json
[
  {
    "id": 1,
    "name": "PlayerName",
    "record": 25.5
  }
]
```

### Riddle Data (`db/riddles.txt`)
```json
[
  {
    "id": 1,
    "name": "Riddle Title",
    "description": "What am I?",
    "correctAnswer": "answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "hint": "Think about..."
  }
]
```

## 🎯 Game Mechanics

- **Time Tracking**: Precise timing for each riddle and overall game
- **Hint System**: Optional hints with time penalties
- **Difficulty Levels**: 
  - 🟢 **Easy**: Perfect for beginners
  - 🟡 **Medium**: For the brave
  - 🔴 **Hard**: Master level challenge
- **Record System**: Track personal best times
- **Leaderboard**: Global ranking system

## 🛠️ Dependencies

- **chalk**: For colorful console output
- **readline-sync**: For interactive user input

## 🚀 Future Enhancements

- More riddle categories
- Multiplayer support
- Sound effects
- Export/import riddle packs
- Web interface
- Achievement system

## 👨‍💻 Development

The project follows a clean architecture pattern with clear separation of concerns:
- **Models**: Domain entities
- **Services**: Business logic
- **Repositories**: Data access
- **UI**: User interface
- **Utils**: Shared utilities

Happy riddling! 🧩✨
