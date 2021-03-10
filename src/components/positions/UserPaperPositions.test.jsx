import React from 'react';
import { render } from '@testing-library/react';
import UserPaperPosition from './UserPaperPosition';



describe('Test the user paper positions component', () => {
  it('tests the user paper positions component', () => {
    const { asFragment } = render(<UserPaperPosition/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
