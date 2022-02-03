import PropTypes from 'prop-types';
import './StatusBar.css';

export default function StatusBar ({wordCount, highScore, mode}) {
  return (
    <div className="status">
      <span className="statusValue"
        id="wordCount"
        hidden={mode !== 'game'}>
        Word Count:
        {wordCount}
      </span>

      &nbsp;

      <span className="statusValue"
        id="highScore"
        hidden={!highScore}>
        High Score:
        {highScore}
      </span>
    </div>
  );
}

StatusBar.propTypes = {
  wordCount: PropTypes.number,
  highScore: PropTypes.number,
  mode: PropTypes.string
};
