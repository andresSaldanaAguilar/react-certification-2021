import React from 'react';
import { Typography } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import {
  CustomAppBar,
  CustomButton,
  CustomIconButton,
  CustomInputBase,
  CustomToolbar,
  SearchContainer,
  SearchIconContainer,
  ThemeIcon,
  ToolbarSection,
} from './Menu.styled';
import { useSwitchTheme } from '../../Hooks/Theme/Theme';
import { useSession } from '../../Hooks/Session/Session';
import { useSearchDispatch } from '../../Hooks/Search/Search';

function HomeButton(history) {
  return (
    <CustomIconButton
      onClick={() => history.push('/')}
      edge="start"
      data-testid="HomeButton"
    >
      <YouTubeIcon />
      <Typography variant="body1" noWrap>
        MyTube
      </Typography>
    </CustomIconButton>
  );
}

function SearchBar(path) {
  const setSearch = useSearchDispatch();
  const homePage = '/';
  return (
    path === homePage && (
      <SearchContainer data-testid="SearchBar">
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
        <CustomInputBase
          data-testid="SearchInput"
          placeholder="Search…"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </SearchContainer>
    )
  );
}

function handleLoginButton(userSession, history) {
  const { session, dispatchSession } = userSession;
  if (session.user) {
    dispatchSession({ type: 'logout' });
    history.push('/');
  } else {
    history.push('/login');
  }
}

function Menu() {
  const switchTheme = useSwitchTheme();
  const location = useLocation();
  const history = useHistory();
  const userSession = useSession();
  const { session } = userSession;
  return (
    <>
      <CustomAppBar position="fixed" data-testid="CustomAppBar">
        <CustomToolbar>
          <ToolbarSection>
            {HomeButton(history)}
            {SearchBar(location.pathname)}
          </ToolbarSection>
          <ToolbarSection>
            <ThemeIcon fontSize="default" onClick={switchTheme} />
            <CustomButton
              onClick={() => {
                handleLoginButton(userSession, history);
              }}
            >
              <Typography variant="body1" noWrap>
                {session.user ? 'Logout' : 'Login'}
              </Typography>
            </CustomButton>
          </ToolbarSection>
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
}

export default Menu;
