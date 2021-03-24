import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { render, screen } from '@testing-library/react';
import { Search } from '../../Hooks/Search/Search';
import { Theme } from '../../Hooks/Theme/Theme';
import StarredHomePage from './StarredHome.page';
import { Session } from '../../Hooks/Session/Session';

jest.mock('../../Hooks/Video/Video');
jest.mock('../../utils/storage');

describe('Home View Tests', () => {
  const home = '/';
  const history = createMemoryHistory();
  history.push(home);
  beforeEach(() => {
    render(
      <Session>
        <Theme>
          <Router history={history}>
            <Search>
              <StarredHomePage />
            </Search>
          </Router>
        </Theme>
      </Session>
    );
  });

  it('Should render 30 mock video mosaics', () => {
    expect(screen.getAllByTestId('VideoMosaicLink')).toHaveLength(30);
  });
});
