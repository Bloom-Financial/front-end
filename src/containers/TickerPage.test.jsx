import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TickerPage from './TickerPage';

describe('tickerPage containor', () => {
  it('renders the ticker page contaionr', async() => {
    render(<TickerPage/>);

    const ul = await screen.findByTestId('quotes');
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
