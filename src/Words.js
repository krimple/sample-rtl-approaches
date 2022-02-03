import { Component, useState } from 'react';
import WordBuilder from './WordBuilder';
import WordList from './WordList';
import StatusBar from './StatusBar';
import ButtonBar from './ButtonBar';
import './Words.css';

export default function Words() {

  const [gameLetters, setGameLetters] = useState(generateLetters());
  const [wordList, setWordList] = useState([]);
  const [highScore, setHighScore] = useState(10);

  function addWord (word) {
    setWordList(wordList.concat(word));
  }

  function startGame () {
    setGameLetters(generateLetters());
    setWordList([]);
  }

  function endGame () {
    setGameLetters([]);
    setWordList([]);
  }

  function generateLetters() {
    const seedLetters = 'AABCDEEFGHIIJKLMNOOPQRSSTTUUVWXYZ';
    const gameOptions = [];
    for (let i = 0; i < 10; i++) {
      gameOptions.push(seedLetters.charAt(
        Math.floor(Math.random() * seedLetters.length)));
    }
    return gameOptions;
  }

  const mode = gameLetters.length === 0 ? 'standby' : 'game';
  return (
    <div className="container">
      <h1>Words for Nerds!</h1>
      <p>Try me...</p>
      {
        mode !== 'game' &&
        <button
          id="startGame"
          disabled={mode === 'game'}
          className="btn btn-success"
          onClick={startGame}>
          START GAME
        </button>
      }
      { mode === 'game' &&
        <div>
          <WordBuilder
            wordList={wordList}
            gameLetters={gameLetters}
            addWord={addWord}
            endGame={endGame} />
          <WordList
            wordList={wordList}/>
        </div>
      }
      <StatusBar
        mode={mode}
        highScore={highScore}
        wordCount={wordList.length}/>

    </div>);
}
