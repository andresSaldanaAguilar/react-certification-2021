import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFound.page';
import { Theme } from '../../Hooks/Theme/Theme';

describe('Not Found Landing View', () => {
  beforeEach(() => {
    render(
      <Theme>
        <NotFoundPage />
      </Theme>
    );
  });

  it('Should render 404 not found message', () => {
    expect(screen.getByText('404 Nothing Found')).toBeInTheDocument();
  });
});
