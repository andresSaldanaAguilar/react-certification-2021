import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Menu from './Menu.component';
import { Search } from '../../Hooks/Search/Search';
import { Theme } from '../../Hooks/Theme/Theme';
import { Session } from '../../Hooks/Session/Session';

jest.mock('../../utils/storage');
describe('Menu Component Tests', () => {
  it('Should render display the options when logged in', async () => {
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
    expect(screen.getByText('Starred Videos')).toBeInTheDocument();
    const logoutBtn = screen.getByText('Logout');
    logoutBtn.click();
  });
});
