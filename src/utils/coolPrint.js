import chalk from 'chalk';

// ASCII Art Banner for the game
export function printGameBanner() {
    console.clear();
    console.log(chalk.cyan.bold(`
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
    `));
    console.log(chalk.yellow('    Welcome to the most exciting riddle game ever! 🎉\n'));
}

// Styled Menu
export function printMainMenu() {
    console.log(chalk.blue.bold('\n🎮 MAIN MENU'));
    console.log(chalk.blue('═'.repeat(50)));
    console.log(chalk.green('  1. 🎯 Play the game'));
    console.log(chalk.yellow('  2. ➕ Create a new riddle'));
    console.log(chalk.cyan('  3. 📖 Read the riddles'));
    console.log(chalk.magenta('  4. ✏️  Update an existing riddle'));
    console.log(chalk.red('  5. 🗑️  Delete a riddle'));
    console.log(chalk.blue('  6. 🏆 View leaderboard'));
    console.log(chalk.gray('  0. 🚪 Exit'));
    console.log(chalk.blue('═'.repeat(50)));
}

// Difficulty selector with style
export function printDifficultyMenu() {
    console.log(chalk.magenta.bold('\n🎚️  DIFFICULTY LEVEL'));
    console.log(chalk.magenta('═'.repeat(40)));
    console.log(chalk.green('  1. 🟢 Easy   - Perfect for beginners'));
    console.log(chalk.yellow('  2. 🟡 Medium - For the brave'));
    console.log(chalk.red('  3. 🔴 Hard   - Master level challenge'));
    console.log(chalk.magenta('═'.repeat(40)));
}

// Success messages
export function printSuccess(message) {
    console.log(chalk.green.bold(`\n✅ ${message}`));
}

// Error messages
export function printError(message) {
    console.log(chalk.red.bold(`\n❌ ${message}`));
}

// Warning messages
export function printWarning(message) {
    console.log(chalk.yellow.bold(`\n⚠️  ${message}`));
}

// Info messages
export function printInfo(message) {
    console.log(chalk.cyan(`\nℹ️  ${message}`));
}

// Loading animation
export async function showLoading(message, duration = 2000) {
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;
    
    const interval = setInterval(() => {
        process.stdout.write(`\r${chalk.cyan(frames[i])} ${message}`);
        i = (i + 1) % frames.length;
    }, 100);
    
    return new Promise(resolve => {
        setTimeout(() => {
            clearInterval(interval);
            process.stdout.write(`\r${chalk.green('✓')} ${message}\n`);
            resolve();
        }, duration);
    });
}

// Styled separator
export function printSeparator(char = '═', length = 50, color = 'blue') {
    console.log(chalk[color](char.repeat(length)));
}

// Game stats display
export function printGameStats(playerName, totalTime, averageTime, isNewRecord = false) {
    console.log(chalk.blue.bold('\n🎊 GAME RESULTS 🎊'));
    printSeparator('═', 40, 'blue');
    
    console.log(chalk.yellow(`👤 Player: ${chalk.bold(playerName)}`));
    console.log(chalk.cyan(`⏱️  Total Time: ${chalk.bold(totalTime.toFixed(2))} seconds`));
    console.log(chalk.green(`📊 Average Time: ${chalk.bold(averageTime.toFixed(2))} seconds`));
    
    if (isNewRecord) {
        console.log(chalk.red.bold('\n🏆 NEW RECORD! 🏆'));
        console.log(chalk.yellow('🎉 Congratulations! You\'ve set a new personal best! 🎉'));
    }
    
    printSeparator('═', 40, 'blue');
}

// Leaderboard header
export function printLeaderboardHeader() {
    console.log(chalk.yellow.bold('\n🏆 HALL OF FAME 🏆'));
    printSeparator('═', 60, 'yellow');
    console.log(chalk.bold(chalk.magenta('Rank') + '\t' + chalk.cyan('Player') + '\t\t' + chalk.green('Best Time')));
    printSeparator('-', 60, 'gray');
}

// Leaderboard entry
export function printLeaderboardEntry(rank, name, record, isTopThree = false) {
    let medal = '';
    let rankColor = 'white';
    
    if (rank === 1) {
        medal = '🥇';
        rankColor = 'yellow';
    } else if (rank === 2) {
        medal = '🥈';
        rankColor = 'gray';
    } else if (rank === 3) {
        medal = '🥉';
        rankColor = 'red';
    } else {
        medal = '  ';
        rankColor = 'white';
    }
    
    const formattedRank = chalk[rankColor].bold(`${medal}${rank.toString().padStart(2)}`);
    const formattedName = name.padEnd(15);
    const formattedRecord = record ? `${record.toFixed(2)}s` : 'N/A';
    
    console.log(`${formattedRank}\t${formattedName}\t${chalk.green(formattedRecord)}`);
}

// Riddle display
export function printRiddleHeader(riddleName, difficulty) {
    const difficultyColor = difficulty === 'easy' ? 'green' : difficulty === 'medium' ? 'yellow' : 'red';
    const difficultyEmoji = difficulty === 'easy' ? '🟢' : difficulty === 'medium' ? '🟡' : '🔴';
    
    console.log(chalk.blue.bold('\n🧩 RIDDLE TIME! 🧩'));
    printSeparator('═', 50, 'blue');
    console.log(chalk.cyan.bold(`📝 ${riddleName}`));
    console.log(chalk[difficultyColor](`${difficultyEmoji} Difficulty: ${difficulty.toUpperCase()}`));
    printSeparator('-', 50, 'gray');
}

// Progress bar
export function printProgressBar(current, total, width = 30) {
    const progress = current / total;
    const filled = Math.round(width * progress);
    const empty = width - filled;
    
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    const percentage = Math.round(progress * 100);
    
    console.log(chalk.cyan(`Progress: [${chalk.green(bar)}] ${percentage}% (${current}/${total})`));
}

// Countdown timer
export async function countdown(seconds) {
    for (let i = seconds; i > 0; i--) {
        process.stdout.write(`\r${chalk.yellow.bold(`⏰ Starting in ${i}...`)}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    process.stdout.write(`\r${chalk.green.bold('🚀 GO!')}\n`);
}

// Celebration animation
export async function celebrate() {
    const emojis = ['🎉', '🎊', '🥳', '🌟', '✨', '🎯'];
    const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan'];
    
    for (let i = 0; i < 10; i++) {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
        const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
        
        process.stdout.write(`\r${chalk[randomColor1](randomEmoji)} ${chalk.bold.yellow('AWESOME!')} ${chalk[randomColor2](randomEmoji)}`);
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    console.log('\n');
} 