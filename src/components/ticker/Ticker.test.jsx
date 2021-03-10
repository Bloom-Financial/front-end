import React from 'react';
import { render } from '@testing-library/react';
import Ticker from './Ticker';

describe('Test the ticker component', () => {
  it('tests the ticker component', () => {
    const { asFragment } = render(<Ticker/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
