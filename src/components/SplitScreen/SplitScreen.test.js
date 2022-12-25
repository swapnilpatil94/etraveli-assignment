import React from 'react';
import { render } from '@testing-library/react';
import SplitScreen from './SplitScreen';

describe('SplitScreen', () => {
  it('should render the correct elements', () => {
    const { getByTestId } = render(
      <SplitScreen
        leftPane={<div data-testid="left-pane">Left Pane</div>}
        rightPane={<div data-testid="right-pane">Right Pane</div>}
      />
    );
    const leftPane = getByTestId('left-pane');
    const rightPane = getByTestId('right-pane');
    expect(leftPane).toBeInTheDocument();
    expect(rightPane).toBeInTheDocument();
  });

  it('should render the correct content', () => {
    const { getByTestId } = render(
      <SplitScreen
        leftPane={<div data-testid="left-pane">Left Pane</div>}
        rightPane={<div data-testid="right-pane">Right Pane</div>}
      />
    );
    const leftPane = getByTestId('left-pane');
    const rightPane = getByTestId('right-pane');
    expect(leftPane.textContent).toBe('Left Pane');
    expect(rightPane.textContent).toBe('');
  });

  it('should throw an error if required props are not provided', () => {
    console.error = jest.fn();
    render(<SplitScreen />);
    expect(console.error).toHaveBeenCalled();
  });
});
