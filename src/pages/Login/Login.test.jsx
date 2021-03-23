import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { Theme } from '../../Hooks/Theme/Theme';
import LoginPage from './Login.page';
import { Session } from '../../Hooks/Session/Session';

describe('Login View', () => {
  const history = createMemoryHistory();
  history.push('/login');
  beforeEach(() => {
    render(
      <Session>
        <Theme>
          <Router history={history}>
            <LoginPage />
          </Router>
        </Theme>
      </Session>
    );
  });

  it('Should render the login page', () => {
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('Should reject the login', () => {
    screen.getByTestId('loginButton').click();
  });

  it('Should successfully do the login', () => {
    const username = document.querySelector('.usernameIpt input');
    const password = document.querySelector('.passwordIpt input');
    fireEvent.change(username, { target: { value: '123' } });
    fireEvent.change(password, { target: { value: '123' } });
    screen.getByTestId('loginButton').click();
  });
});
