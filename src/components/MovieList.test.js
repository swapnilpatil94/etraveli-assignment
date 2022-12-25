import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieList from './MovieList';

describe('MovieList', () => {
  it('should render the correct elements and content', () => {
    const movieLists = [
      {
        episode_id: 1,
        title: 'A New Hope',
        release_date: '1977-05-25'
      },
      {
        episode_id: 2,
        title: 'The Empire Strikes Back',
        release_date: '1980-05-17'
      }
    ];
    const { getByTestId } = render(<MovieList movieLists={movieLists} />);
    const listItemButton1 = getByTestId('list-item-button-0');
    const listItemButton2 = getByTestId('list-item-button-1');
    expect(listItemButton1).toBeInTheDocument();
    expect(listItemButton2).toBeInTheDocument();
    expect(listItemButton1.textContent).toBe('EPISODE 1A New Hope1977-05-25');
    expect(listItemButton2.textContent).toBe('EPISODE 2The Empire Strikes Back1980-05-17');
  });

  it('should call the handleSelectedMovie function when a list item is clicked', () => {
    const movieLists = [
      {
        episode_id: 1,
        title: 'A New Hope',
        release_date: '1977-05-25'
      },
      {
        episode_id: 2,
        title: 'The Empire Strikes Back',
        release_date: '1980-05-17'
      }
    ];
    const handleSelectedMovie = jest.fn();
    const { getByTestId } = render(
      <MovieList movieLists={movieLists} handleSelectedMovie={handleSelectedMovie} />
    );
    const listItemButton1 = getByTestId('list-item-button-0');
    fireEvent.click(listItemButton1);
    expect(handleSelectedMovie).toHaveBeenCalledWith(movieLists[0]);
  });
});
