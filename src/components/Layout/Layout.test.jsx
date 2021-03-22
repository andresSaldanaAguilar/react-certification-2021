import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Layout from './Layout.component';
import { Search } from '../../Hooks/Search/Search';
import { Theme } from '../../Hooks/Theme/Theme';
import { Session } from '../../Hooks/Session/Session';

describe('Layout Component Tests', () => {
  const home = '/';
  const history = createMemoryHistory();
  history.push(home);
  beforeEach(() => {
    render(
      <Session>
        <Theme>
          <Router history={history}>
            <Search>
              <Layout />
            </Search>
          </Router>
        </Theme>
      </Session>
    );
  });

  it('Should render the layout component', async () => {
    expect(screen.getByTestId('CustomAppBar')).toBeInTheDocument();
    expect(screen.getByTestId('ContentContainer')).toBeInTheDocument();
  });
});
