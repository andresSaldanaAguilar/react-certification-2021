import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Menu from './Menu.component';
import { Search } from '../../Hooks/Search/Search';
import { Theme } from '../../Hooks/Theme/Theme';
import { Session } from '../../Hooks/Session/Session';

describe('Menu Component Tests', () => {
  it('Should render menu with search bar', async () => {
    const home = '/';
    const history = createMemoryHistory();
    history.push(home);
    render(
      <Session>
        <Router history={history}>
          <Theme>
            <Search>
              <Menu />
            </Search>
          </Theme>
        </Router>
      </Session>
    );
    expect(screen.getByTestId('CustomAppBar')).toBeInTheDocument();
    expect(screen.getByTestId('SearchBar')).toBeInTheDocument();
    expect(screen.getByTestId('UserMenuBtn')).toBeInTheDocument();
  });

  it('Should render menu without search bar', async () => {
    const anythingElseButHome = '*';
    const history = createMemoryHistory();
    history.push(anythingElseButHome);
    render(
      <Session>
        <Router history={history}>
          <Theme>
            <Search>
              <Menu />
            </Search>
          </Theme>
        </Router>
      </Session>
    );
    expect(screen.getByTestId('CustomAppBar')).toBeInTheDocument();
    expect(screen.queryByTestId('SearchBar')).not.toBeInTheDocument();
  });

  it('Should render display the options when not logged in', async () => {
    const anythingElseButHome = '*';
    const history = createMemoryHistory();
    history.push(anythingElseButHome);
    render(
      <Session>
        <Router history={history}>
          <Theme>
            <Search>
              <Menu />
            </Search>
          </Theme>
        </Router>
      </Session>
    );
    screen.getByTestId('UserMenuBtn').click();
    const loginBtn = screen.getByText('Login');
    loginBtn.click();
  });
});
