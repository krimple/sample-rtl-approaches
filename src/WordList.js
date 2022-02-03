import PropType from 'prop-types';
import './WordList.css';

/**
 * WordList - renders the list of words added by the player
 * @param wordList the list of words to render
 *
 * Note - we are using `data-testid` for our elements to be able to find them using
 * testing-libary/react and the `getByTestId` locator - see the test.
 * A better way to do this is to potentially add screen reader or aria attributes
 * that properly render the content for selection normally via the DOM / HTML elements.
 */
export default function WordList ({ wordList }) {

  return (
    <div className="wordContainer wordList">
      {
        wordList.map((word, index) => {
          return (
            <div key={'word-' + index} data-testid={index}>
              <i className="bi bi-plus-lg"></i>
              {word}
            </div>
          );
        })
      }
    </div>
  );
}

WordList.propTypes = {
  wordList: PropType.arrayOf(PropType.string)
};

