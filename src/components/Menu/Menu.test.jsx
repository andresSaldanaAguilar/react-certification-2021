import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Menu from './Menu.component';
import { SearchProvider } from '../../Hooks/SearchProvider/SearchProvider';
import { Theme } from '../../Hooks/Theme/Theme';

describe('Menu Component Tests', () => {
  it('Should render menu with search bar', async () => {
    const home = '/';
    const history = createMemoryHistory();
    history.push(home);
    render(
      <Router history={history}>
        <Theme>
          <SearchProvider>
            <Menu />
          </SearchProvider>
        </Theme>
      </Router>
    );
    expect(screen.getByTestId('CustomAppBar')).toBeInTheDocument();
    expect(screen.getByTestId('SearchBar')).toBeInTheDocument();
  });

  it('Should render menu without search bar', async () => {
    const anythingElseButHome = '*';
    const history = createMemoryHistory();
    history.push(anythingElseButHome);
    render(
      <Router history={history}>
        <Theme>
          <SearchProvider>
            <Menu />
          </SearchProvider>
        </Theme>
      </Router>
    );
    expect(screen.getByTestId('CustomAppBar')).toBeInTheDocument();
    expect(screen.queryByTestId('SearchBar')).not.toBeInTheDocument();
  });
});
