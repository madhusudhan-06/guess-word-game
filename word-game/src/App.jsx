import { useState } from 'react';
import './App.css'
import { languages } from './languages'
import { getFarewellText, giveWord } from './messages'
import Confetti from 'react-confetti'

function App() {
  const [currentword, setCurrentWord] = useState(() => giveWord());
  const [guessWord, setGuessWord] = useState([]);

  const wordArray = Array.from(currentword);
  let wrongGuessCount = guessWord.filter(letter =>
    !currentword.includes(letter)
  ).length;

  let isGameWon = wordArray.every(letter =>
    guessWord.includes(letter)
  );
  let isGameLost = wrongGuessCount >= languages.length - 1;
  let isGameOver = isGameLost || isGameWon;


  const letters = wordArray.map((l, i) => {
    if (isGameLost) {
      const style = {
        color: guessWord.includes(l) ?
          'rgb(38, 37, 37)' : '#d72424'
      };
      return (<span key={i} style={style}>{l.toUpperCase()}</span>)
    }
    return <span key={i}>{guessWord.includes(l) ? l.toUpperCase() : null}</span>
  });

  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const keyboard = alphabets.split("").map(k => {
    const isGuessed = guessWord.includes(k);
    const isGreen = isGuessed && currentword.includes(k);
    const isRed = isGuessed && !currentword.includes(k);
    let classNameDecide = null;
    if (isGreen) {
      classNameDecide = 'key-green';
    }
    if (isRed) {
      classNameDecide = 'key-red';
    }
    return (<button
      key={k}
      disabled={isGameOver}
      onClick={() => addLetter(k)}
      aria-label={`letter is ${k}`}
      className={classNameDecide}
    >{k.toUpperCase()}</button>)
  });

  const languageSet = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;
    let classLanguage = isLanguageLost ? 'lost' : null;
    const styles = {
      backgroundColor: isLanguageLost ? 'rgba(95, 93, 93, 0.7)' : lang.backgroundColor,
      Color: lang.color
    };
    return <span
      style={styles}
      key={lang.name}
      className={classLanguage}
    >{lang.name}</span>
  });

  function addLetter(letter) {
    setGuessWord(prev => {
      if (prev.includes(letter)) {
        return prev;
      }
      else {
        return [...prev, letter];
      }
    });
  }
  function gameStatus() {
    if (!isGameOver) {
      if (wrongGuessCount === 0)
        return { classForGameStatus: 'status', content: null };
      else
        return { classForGameStatus: 'status messages', content: <p>{getFarewellText(languages[wrongGuessCount - 1].name)}</p> };
    }
    else {
      if (isGameWon) {
        return {
          classForGameStatus: 'status won', content: (
            <>
              <h3>You won!</h3>
              <p>well done</p>
            </>
          )
        }
      }
      else {
        return {
          classForGameStatus: 'status lost', content: (
            <>
              <h3>You Lost</h3>
              <p>Try again</p>
            </>
          )
        }
      }
    }
  }
  const { classForGameStatus, content } = gameStatus();

  function setNewGame() {
    setCurrentWord(giveWord());
    setGuessWord([]);
  }

  return (
    <main>
      {isGameWon && <Confetti
        recycle={false}
        numberOfPieces={1000}
      />}
      <div className='header'>
        <h1>Word guessing game</h1>
        <p>guess the word in 8 attempts</p>
      </div>
      <div
        className={classForGameStatus}
        aria-live='polite'
        role='status'
      >
        {content}
      </div>

      <div className="languages">
        {languageSet}
      </div>

      <div className="word">
        {letters}
      </div>

      <div className="sr-only" aria-live='polite' role='status'>
        <p>current word : {wordArray.map((letter) =>
          guessWord.includes(letter) ? letter : 'blank'
        ).join(" ")}</p>
      </div>

      <div className="keyboard">
        {keyboard}
      </div>

      {isGameOver &&
        <div className="new-game">
          <button onClick={setNewGame}>New game</button>
        </div>
      }
    </main>
  )
}

export default App;
