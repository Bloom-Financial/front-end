import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch tests', () => {
  it('searches for articles when a search term is typed', () => {
    render(<NewsSearch />);

    const searchInput = screen.getByPlaceholderText('Search here...');
    fireEvent.input(searchInput, {
      target: {
        value: 'dogs'
      }
    });

    return waitFor(() => {
      expect(screen.getByTestId('articles')).not.toBeEmptyDOMElement();
    });
  });
});
