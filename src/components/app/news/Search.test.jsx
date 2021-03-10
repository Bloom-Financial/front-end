import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';


describe('Test the search component', () => {
  it('tests the search component', () => {
    const { asFragment } = render(<Search search="help"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
