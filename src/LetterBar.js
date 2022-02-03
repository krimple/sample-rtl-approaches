import PropTypes from 'prop-types';
import Letter from './Letter';

export default function LetterBar ({gameLetters, usedLetterIndexes, addLetter}) {
  return (
    <div className="row justify-content-center">
      {
        gameLetters.map((character, index) => (
              <Letter
                key={index}
                index={index}
                disabled={usedLetterIndexes.indexOf(index) > -1}
                character={character}
                addLetter={addLetter}/>
        ))
      }
    </div>
  );
}

LetterBar.propTypes = {
  gameLetters: PropTypes.arrayOf(PropTypes.string),
  usedLetterIndexes: PropTypes.arrayOf(PropTypes.number),
  addLetter: PropTypes.func
};
