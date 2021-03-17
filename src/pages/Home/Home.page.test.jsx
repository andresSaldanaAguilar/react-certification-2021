import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { render, screen } from '@testing-library/react';
import HomePage from './Home.page';
import { SearchProvider } from '../../Hooks/SearchProvider/SearchProvider';
import { Theme } from '../../Hooks/Theme/Theme';

jest.mock('../../Hooks/Video/Video');
describe('Home View Tests', () => {
  const home = '/';
  const history = createMemoryHistory();
  history.push(home);
  beforeEach(() => {
    render(
      <Theme>
        <Theme>
          <Router history={history}>
            <SearchProvider>
              <HomePage />
            </SearchProvider>
          </Router>
        </Theme>
      </Theme>
    );
  });

  it('Should render 30 mock video mosaics', () => {
    expect(screen.getAllByTestId('VideoMosaicLink')).toHaveLength(30);
  });
});
