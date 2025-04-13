# Word Guessing Game

A fun word guessing game where you try to guess a hidden word in 8 attempts! If you win, you'll be greeted with a celebratory confetti animation. This app is built using React and Vite.

## Features
- **Guess the Word**: Try to guess a randomly selected word by clicking on alphabet buttons.
- **Limited Attempts**: You have 8 chances to guess the word.
- **Confetti on Win**: A fun confetti animation when you win.
- **Game Status**: Displays a "You won" or "You lost" message based on the game outcome.
- **Keyboard UI**: Virtual alphabet keyboard to click and guess the word.
- **Language Set**: Each wrong guess will remove one language from the set, visually representing the attempts remaining.

## Technologies Used
- React.js
- Vite (for fast development and bundling)
- CSS (for styling)

## Prerequisites
- Node.js
- npm or yarn

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/madhusudhan-06/guess-word-game.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd word-game
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

4. **Run the app**:
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

   The app should now be running on [http://localhost:5173](http://localhost:5173).

## Gameplay

1. **Objective**: The goal of the game is to guess the hidden word before you run out of attempts.
2. **Guess the Word**: Click on the alphabet keys to guess letters in the word.
3. **Word Progress**: Correct guesses will reveal letters in the word, while incorrect guesses will decrease your available attempts.
4. **Game Over**: You can win if you guess all letters correctly, or lose if you make 8 incorrect guesses.
5. **New Game**: After winning or losing, you can start a new game by clicking the "New Game" button.

## Example of Game Flow

- **When you guess a correct letter**: The letter will be revealed in the word.
- **When you guess an incorrect letter**: A visual language indicator is removed, and you get one step closer to losing the game.
- **When the game is won**: Confetti appears to celebrate your victory.
- **When the game is lost**: The word is revealed, and you can start a new game.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
