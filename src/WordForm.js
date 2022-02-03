import PropTypes from 'prop-types';
import './WordForm.css';

export default function WordForm ({endGame, wordList, wordInProgress, removeLetter, finishWord, mode}) {

  const disableFinishWord =
    wordInProgress.length < 1 ||
    wordList.indexOf(wordInProgress) > -1;

  return (
    <div hidden={mode === 'standby'}>
      <div className="word">
        {wordInProgress}
      </div>
      <div className="row justify-content-center">
        <button
          className="col-3 btn btn-primary"
          disabled={disableFinishWord}
          onClick={finishWord}>
          FINISH WORD
        </button>
        <button
          className="col-3 btn btn-warning"
          disabled={wordInProgress.length === 0}
          onClick={removeLetter}>
          REMOVE LETTER
        </button>
        <button
          className="col-3 btn btn-danger wordForm pull-right"
          onClick={endGame}>
          END GAME
        </button>
      </div>
    </div>
  );
}

WordForm.propTypes = {
  wordList: PropTypes.arrayOf(PropTypes.string),
  wordInProgress: PropTypes.string,
  removeLetter: PropTypes.func,
  finishWord: PropTypes.func
};
