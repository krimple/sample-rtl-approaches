import { render, screen, fireEvent } from '@testing-library/react';
import Letter from '../Letter';

describe('<Letter />', () => {
  const props = {
    addLetter: jest.fn(),
    character: 'C',
    index: 3
  };

  it('renders a letter C as an enabled, unused letter', () => {
    const {container, asFragment} = render(<Letter {...props} disabled={false} />);
    expect(container).toMatchSnapshot();
    const button = screen.getByTestId('letter-button');
    expect(button).toHaveTextContent('C');
    expect(button.disabled).toBeFalsy();
  });

  it('renders a letter C as disabled, unused letter', () => {
    const {container, asFragment} = render(<Letter {...props } disabled={true} />);
    expect(container).toMatchSnapshot();
    const button = screen.getByTestId('letter-button');
    expect(button).toHaveTextContent('C');
    expect(button.disabled).toBeTruthy();
  });

  it('matches disabled snapshot', () => {
    const { asFragment } = render(<Letter {...props} disabled={true} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the addLetter function with the correct index', () => {
    const { container } = render(<Letter {...props}/>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(props.addLetter.mock.calls).toHaveLength(1);
    expect(props.addLetter.mock.calls[0][0]).toBe(props.index);
  });

});

