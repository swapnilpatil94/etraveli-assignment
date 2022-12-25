import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('should render the correct elements when loading is true', () => {
    const { getByTestId } = render(<Loader loading={true} />);
    const backdrop = getByTestId('backdrop');
    const circularProgress = getByTestId('circular-progress');
    const typography = getByTestId('typography');
    expect(backdrop).toBeInTheDocument();
    expect(circularProgress).toBeInTheDocument();
    expect(typography).toBeInTheDocument();
  });

  // it('should not render any elements when loading is false', () => {
  //   const { queryByTestId } = render(<Loader loading={false} />);
  //   const backdrop = queryByTestId('backdrop');
  //   const circularProgress = queryByTestId('circular-progress');
  //   const typography = queryByTestId('typography');
  //  // expect(backdrop).toBeNull();
  //  // expect(circularProgress).toBeNull();
  //   expect(typography).to("Welcome to Movie List Application..");
  // });
});
