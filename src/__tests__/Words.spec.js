import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Words from '../Words';

describe('<Words />', () => {
  // The logic tested here is completely removed later, these tests are probably not worth writing
  it('should start in game mode and render child components WordBuilder and WordList', async () => {
    render(<Words />);
    expect(screen.getByText(/Words for Nerds/)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toBeDefined();
    expect(screen.queryByText(/START/)).toBeNull();
    await waitFor(() => { expect(screen.getByText(/DONE/)).toBeInTheDocument() });
  });

  it('should end game and hide WordBuilder and WordList', async () => {
    render(<Words />);
    // precondition - the component should generate a set of letters
    // so the derived game mode state is 'game'
    expect(screen.queryByText(/START/)).toBeNull();
    expect(screen.getByText(/DONE/)).toBeInTheDocument();
    // find the button to "end the game"
    const doneButton = screen.getByText(/DONE/);

    // click it
    userEvent.click(doneButton);

    // now, the start button should appear and the done button should be hidden
    expect(screen.getByText(/Words for Nerds/)).toBeDefined();
    // we wait for this state change as we need another component render before it appears...
    await waitFor(() => { expect(screen.getByText(/START/)).toBeInTheDocument(); });
    expect(screen.queryByText(/DONE/)).toBeNull();
  });

  it('should start game and show WordBuilder and WordList again', async () => {
    render(<Words />);
    // find the button to "end the game"
    const doneButton = screen.getByText(/DONE/);

    // click it to end the game
    userEvent.click(doneButton);

    // verify the game is "over"
    await waitFor(() => { expect(screen.getByText(/START/)).toBeInTheDocument(); });

    // click it again to start the game again
    userEvent.click(doneButton);

    // verify the game is "started" again
    await waitFor(() => { expect(screen.getByText(/START/)).toBeInTheDocument(); });
 });

  it('should generate ten letters', async () => {
    render(<Words />);

    await waitFor(() => { expect(screen.getAllByTestId("letter-button")).toHaveLength(10); });
  });
});
