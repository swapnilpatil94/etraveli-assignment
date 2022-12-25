import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  it('should render the correct elements when movieData is provided', () => {
    const movieData = {
      episode_id: 1,
      title: 'A New Hope',
      opening_crawl: 'It is a period of civil war.',
      director: 'George Lucas'
    };
    const { getByTestId } = render(<MovieDetails movieData={movieData} />);
    const typography1 = getByTestId('typography-1');
    const typography2 = getByTestId('typography-2');
    const typography3 = getByTestId('typography-3');
    expect(typography1).toBeInTheDocument();
    expect(typography2).toBeInTheDocument();
    expect(typography3).toBeInTheDocument();
  });

  it('should render the correct content when movieData is provided', () => {
    const movieData = {
      episode_id: 1,
      title: 'A New Hope',
      opening_crawl: 'It is a period of civil war.',
      director: 'George Lucas'
    };
    const { getByTestId } = render(<MovieDetails movieData={movieData} />);
    const typography1 = getByTestId('typography-1');
    const typography2 = getByTestId('typography-2');
    const typography3 = getByTestId('typography-3');
    expect(typography1.textContent).toBe('Episode I - A New Hope');
    expect(typography2.textContent).toBe('It is a period of civil war.');
    expect(typography3.textContent).toBe('Directed by : George Lucas');
  });

  it('should render the correct element when movieData is not provided', () => {
    const { getByTestId } = render(<MovieDetails />);
    const typography = getByTestId('typography-4');
    expect(typography).toBeInTheDocument();
    expect(typography.textContent).toBe('No Movie Selected');
  });
});
