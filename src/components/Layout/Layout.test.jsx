import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Layout from './Layout.component';
import Theme from '../App/App.styled';
import { SearchProvider } from '../../Hooks/SearchProvider';

describe('Layout Component Tests', () => {
  const home = '/';
  const history = createMemoryHistory();
  history.push(home);
  beforeEach(() => {
    render(
      <Theme>
        <Router history={history}>
          <SearchProvider>
            <Layout />
          </SearchProvider>
        </Router>
      </Theme>
    );
  });

  it('Should render the layout component', async () => {
    expect(screen.getByTestId('CustomAppBar')).toBeInTheDocument();
    expect(screen.getByTestId('ContentContainer')).toBeInTheDocument();
  });
});
