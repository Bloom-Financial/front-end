import React from 'react';
import { render } from '@testing-library/react';
import Ticker from './Ticker';

describe('Ticker Component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(<Ticker
      type="exchange"
      market="equities"
      name="NYSE American (AMEX)"
      mic="XASE"
      tape="A"
      code="AMX"
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
