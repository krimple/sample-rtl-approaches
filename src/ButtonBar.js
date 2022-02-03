import PropTypes from 'prop-types';

export default function ButtonBar ({startGame, endGame, mode}) {
  return (
    <div className="pull-right">
      {
        mode !== 'game' &&
        <button
          id="startGame"
          disabled={mode === 'game'}
          className="btn btn-success"
          onClick={startGame}>
          START
        </button>
      }
      {
        mode === 'game' &&
        <button
          id="endGame"
          disabled={mode === 'standby'}
          className="btn btn-danger"
          onClick={endGame}>
          DONE
        </button>
      }
    </div>
  );
}

ButtonBar.propTypes = {
  startGame: PropTypes.func,
  endGame: PropTypes.func,
  mode: PropTypes.string
};
