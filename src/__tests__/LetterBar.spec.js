import { render, screen } from '@testing-library/react';
import LetterBar from '../LetterBar';

describe('<LetterBar />', () => {
  const props = {
    mode: 'game',
    gameLetters: ['A', 'B', 'C'],
    addLetter: jest.fn()
  };

  it('matches snapshot with one 0 used letters', () => {
    render(<LetterBar {...props} usedLetterIndexes={[]}/>);
    const buttonList = screen.queryAllByRole('button');
    expect(buttonList).toMatchSnapshot();
    expect(buttonList[0].disabled).toBe(false);
    expect(buttonList[1].disabled).toBe(false);
    expect(buttonList[2].disabled).toBe(false);
  });

  it('matches snapshot with A and C used letters', () => {
    render(<LetterBar {...props} usedLetterIndexes={[0, 2]}/>);
    const buttonList = screen.queryAllByRole('button');
    expect(buttonList).toMatchSnapshot();
    expect(buttonList[0].disabled).toBe(true);
    expect(buttonList[1].disabled).toBe(false);
    expect(buttonList[2].disabled).toBe(true);
  });
});

