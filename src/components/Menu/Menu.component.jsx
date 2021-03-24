import React, { useState } from 'react';
import { Menu, MenuItem, Typography } from '@material-ui/core';
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

function LoginSection(userSession, history) {
  const { session } = userSession;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <CustomButton onClick={handleClick}>
        <Typography variant="body1" noWrap>
          {session.user ? session.user.name : 'Not signed'} ▼
        </Typography>
      </CustomButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {session.user && (
          <MenuItem onClick={() => history.push('/starred')}>Starred Videos</MenuItem>
        )}
        <MenuItem onClick={() => handleLoginButton(userSession, history)}>
          {session.user ? 'Logout' : 'Login'}
        </MenuItem>
      </Menu>
    </>
  );
}

function NavBar() {
  const switchTheme = useSwitchTheme();
  const location = useLocation();
  const history = useHistory();
  const userSession = useSession();
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
            {LoginSection(userSession, history)}
          </ToolbarSection>
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
}

export default NavBar;
