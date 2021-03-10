import React from 'react';
import { render } from '@testing-library/react';
import AlpacaForm from './AlpacaForm';


describe('alpaca form', () => {
  it('tests the alpaca form component', () => {
    const { asFragment } = render(<AlpacaForm/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
