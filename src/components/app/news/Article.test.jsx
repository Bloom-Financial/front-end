import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';


describe('Test the Article component', () => {
  it('tests the Article component', () => {
    const { asFragment } = render(<Article/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
