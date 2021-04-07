import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { render, screen } from '@testing-library/react';
import HomePage from './Home.page';
import { Search } from '../../Hooks/Search/Search';
import { Theme } from '../../Hooks/Theme/Theme';

jest.mock('../../Hooks/Video/Video');
describe('Home View Tests', () => {
  const home = '/';
  const history = createMemoryHistory();
  history.push(home);
  beforeEach(() => {
    render(
      <Theme>
        <Router history={history}>
          <Search>
            <HomePage />
          </Search>
        </Router>
      </Theme>
    );
  });

  it('Should render 30 mock video mosaics', () => {
    expect(screen.getAllByTestId('VideoMosaicLink')).toHaveLength(30);
  });
});
