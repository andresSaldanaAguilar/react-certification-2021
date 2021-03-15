import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { render, screen } from '@testing-library/react';
import Theme from '../../components/App/App.styled';
import HomePage from './Home.page';
import { SearchProvider } from '../../Hooks/SearchProvider/SearchProvider';

jest.mock('../../Hooks/Video/Video');
describe('Home View Tests', () => {
  const home = '/';
  const history = createMemoryHistory();
  history.push(home);
  beforeEach(() => {
    render(
      <Theme>
        <Router history={history}>
          <SearchProvider>
            <HomePage />
          </SearchProvider>
        </Router>
      </Theme>
    );
  });

  it('Should render 30 mock video mosaics', () => {
    expect(screen.getAllByTestId('VideoMosaicLink')).toHaveLength(30);
  });
});
