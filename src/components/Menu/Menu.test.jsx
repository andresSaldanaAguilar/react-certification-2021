import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Menu from './Menu.component';
import Theme from '../App/App.styled';
import { SearchProvider } from '../../Hooks/SearchProvider';

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
          <Menu />
        </Theme>
      </Router>
    );
    expect(screen.getByTestId('CustomAppBar')).toBeInTheDocument();
    expect(screen.queryByTestId('SearchBar')).not.toBeInTheDocument();
  });

  it('Should change the search bar theme switch state', async () => {
    const anythingElseButHome = '*';
    const history = createMemoryHistory();
    history.push(anythingElseButHome);
    render(
      <Router history={history}>
        <Theme>
          <Menu />
        </Theme>
      </Router>
    );
    const themeSwitch = screen
      .getByTestId('ThemeSwitch')
      .getElementsByTagName('input')[0];
    themeSwitch.click();
    expect(themeSwitch.checked).toEqual(true);
    themeSwitch.click();
    expect(themeSwitch.checked).toEqual(false);
  });
});
