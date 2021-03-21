import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes.component';
import Theme from '../App/App.styled';
import { SearchProvider } from '../../Hooks/SearchProvider/SearchProvider';

describe('App Component Tests', () => {
  it('Should redirect to home', async () => {
    const home = '/';
    const history = createMemoryHistory();
    history.push(home);
    render(
      <Router history={history}>
        <Theme>
          <SearchProvider>
            <Routes />
          </SearchProvider>
        </Theme>
      </Router>
    );
    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });

  it('Should redirect to video view', async () => {
    const home = '/video=EXAMPLE_ID';
    const history = createMemoryHistory();
    history.push(home);
    render(
      <Router history={history}>
        <Theme>
          <SearchProvider>
            <Routes />
          </SearchProvider>
        </Theme>
      </Router>
    );
    expect(screen.getByTestId('Video')).toBeInTheDocument();
  });

  it('Should redirect to not found view', async () => {
    const anythingElse = '*';
    const history = createMemoryHistory();
    history.push(anythingElse);
    render(
      <Router history={history}>
        <Theme>
          <Routes />
        </Theme>
      </Router>
    );
    expect(screen.getByTestId('NotFound')).toBeInTheDocument();
  });
});
