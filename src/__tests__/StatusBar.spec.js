import { render, screen } from '@testing-library/react';
import StatusBar from '../StatusBar';

describe('<StatusBar />', () => {

  it('should display High Score when greater than 0', () => {
    render(<StatusBar mode='standby' highScore={20} wordCount={2}/>);
    expect(screen.queryByText(/High Score/)).toBeVisible();
    expect(screen.getByText(/High Score/)).toHaveTextContent('20');
  });

  it('should not display High Score when highScore is 0', () => {
    render(<StatusBar mode='standby' highScore={0} wordCount={2}/>);
    expect(screen.queryByText(/High Score/)).not.toBeVisible();
  });

  it('should display Word Count when in \'game\' mode', () => {
    render(<StatusBar mode='game' highScore={20} wordCount={2}/>);

    expect(screen.queryByText(/Word Count/)).toBeVisible();
    expect(screen.queryByText(/Word Count/)).toHaveTextContent('2');
  });

  it('should not display Word Count when in \'standby\' mode', () => {
    render(<StatusBar mode='standby' highScore={20} wordCount={2}/>);
    expect(screen.queryByText(/Word Count/)).not.toBeVisible();
  });
});

