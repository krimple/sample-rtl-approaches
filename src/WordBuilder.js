import { useState } from 'react';
import PropTypes from 'prop-types';
import WordForm from './WordForm';
import LetterBar from './LetterBar';

/**
 * The <code>memo</code> function compares props and makes the component
 * behave as a pure component (only render when incoming props change)
 * @type {React.NamedExoticComponent<{readonly gameLetters?: *, readonly wordList?: *, readonly addWord?: *}>}
 */
export default function WordBuilder ({addWord, endGame, wordList, gameLetters}) {
  const [usedLetterIndexes, setUsedLetterIndexes] = useState([]);


  function addLetter(index) {
    // eslint-disable-next-line no-console
    console.log(`executing addLetter of index ${index}`);
    setUsedLetterIndexes(usedLetterIndexes.concat(index));
  }

  function removeLetter () {
    setUsedLetterIndexes(usedLetterIndexes.slice(0, usedLetterIndexes.length - 1));
  }

  function deriveWordInProgress () {
    return usedLetterIndexes
      .reduce((accum, letter) => {
        return accum + gameLetters[letter];
      }, '');
  }

  function finishWord () {
    addWord(deriveWordInProgress());
    setUsedLetterIndexes([]);
  }

  return (
    <div>
      <LetterBar
        gameLetters={gameLetters}
        usedLetterIndexes={usedLetterIndexes}
        addLetter={addLetter}/>
      <WordForm
        endGame={endGame}
        wordList={wordList}
        removeLetter={removeLetter}
        wordInProgress={deriveWordInProgress()}
        finishWord={finishWord}/>
    </div>
  );
}

WordBuilder.propTypes = {
  addWord: PropTypes.func.isRequired,
  gameLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  wordList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
