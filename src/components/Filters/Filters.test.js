import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Filters from './Filters';

describe('Filters', () => {
  it('should render the correct elements', () => {
    const { getByLabelText, getByPlaceholderText } = render(<Filters />);
    const sortBy = getByLabelText('Sort by ..');
    const searchInput = getByPlaceholderText('Type to search ...');
    expect(sortBy).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  // it('should call the correct function when the sort by menu is changed', () => {
  //   const handleSorting = jest.fn();
  //   const { getByLabelText } = render(<Filters handleSorting={handleSorting} />);
  //   const element = getByTestId('year') 
  //   fireEvent.change(element, { target: { value: 'year' }});
  //   expect(handleSorting).toHaveBeenCalledWith('year');
  // });

  it('should call the correct function when the search input is changed', () => {
    const handleInputSearch = jest.fn();
    const { getByPlaceholderText } = render(<Filters handleInputSearch={handleInputSearch} />);
    const searchInput = getByPlaceholderText('Type to search ...');
    fireEvent.change(searchInput, { target: { value: 'test' }});
    expect(handleInputSearch).toHaveBeenCalledWith('test');
  });
});
