import {render, screen} from '@testing-library/react';
import ButtonBar from '../ButtonBar';

describe('<ButtonBar />', () => {
  it('should only display START button when in \'standby\' mode', () => {
    render(<ButtonBar mode='standby'/>);
    expect(screen.getByText('START')).toBeInTheDocument();
    expect(screen.queryByText('DONE')).not.toBeInTheDocument();
  });

  it('should only display DONE button when in \'game\' mode', () => {
    render(<ButtonBar mode='game'/>);
    expect(screen.queryByText('START')).not.toBeInTheDocument();
    expect(screen.getByText('DONE')).toBeInTheDocument();
  });
});


