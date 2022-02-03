import { render, screen } from '@testing-library/react';
import WordList from '../WordList';

describe('<WordList />', () => {
  it('matches snapshot with empty wordlist', () => {
    const { asFragment } = render(<WordList wordList={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO - figure out better pattern
  it('matches snapshot with 3 words', () => {
    const { asFragment } = render(<WordList wordList={['Foo', 'Bar', 'Baz']} />);
    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByTestId('0')).not.toBeNull();
    expect(screen.getByTestId('1')).not.toBeNull();
    expect(screen.getByTestId('2')).not.toBeNull();
  });
});

