import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';


describe('Test the header component', () => {
  it('tests the header component', () => {
    const { asFragment } = render(<Header title="hey"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
