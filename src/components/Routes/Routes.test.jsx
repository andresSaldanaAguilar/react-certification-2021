import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes.component';
import { Search } from '../../Hooks/Search/Search';
import { Theme } from '../../Hooks/Theme/Theme';
import { Session } from '../../Hooks/Session/Session';

describe('App Component Tests', () => {
  it('Should redirect to home', async () => {
    const home = '/';
    const history = createMemoryHistory();
    history.push(home);
    render(
      <Session>
        <Router history={history}>
          <Theme>
            <Search>
              <Routes />
            </Search>
          </Theme>
        </Router>
      </Session>
    );
    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });

  it('Should redirect to video view', async () => {
    const home = '/video=EXAMPLE_ID';
    const history = createMemoryHistory();
    history.push(home);
    render(
      <Session>
        <Router history={history}>
          <Theme>
            <Search>
              <Routes />
            </Search>
          </Theme>
        </Router>
      </Session>
    );
    expect(screen.getByTestId('Video')).toBeInTheDocument();
  });

  it('Should redirect to not found view', async () => {
    const anythingElse = '*';
    const history = createMemoryHistory();
    history.push(anythingElse);
    render(
      <Session>
        <Router history={history}>
          <Theme>
            <Routes />
          </Theme>
        </Router>
      </Session>
    );
    expect(screen.getByTestId('NotFound')).toBeInTheDocument();
  });
});
