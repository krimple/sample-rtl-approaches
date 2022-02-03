import React from 'react';
import PropTypes from 'prop-types';
import './Letter.css';

const Letter = React.memo(({addLetter, character, index, disabled}) => { // console.log(`Rendering ${index} - ${character}`);
  return (
    <button className="col-4 col-sm-2 col-md-1 btn letter"
      data-testid="letter-button"
         role="button"
      disabled={disabled}
      onClick={() => addLetter(index)}>
      {character}
    </button>
  );
});


Letter.propTypes = {
  addLetter: PropTypes.func.isRequired,
  character: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  disabled: PropTypes.bool
};

export default Letter;
