import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserPaperPositions from './UserPaperPositions';
import { AlpacaProvider } from '../state/AlpacaProvider';
import { AuthProvider } from '../state/authProvider';

describe('containor paper positions', () => {
  it('containor paper positions', async() => {
    // eslint-disable-next-line max-len
    render(<AuthProvider>
      <AlpacaProvider>
        <UserPaperPositions acessToken="1111"/>
      </AlpacaProvider></AuthProvider>);

    const ul = await screen.getByText('Loading...');
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
