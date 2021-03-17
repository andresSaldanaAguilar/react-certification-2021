import React from 'react';
import { Typography } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useHistory, useLocation } from 'react-router-dom';
import {
  CustomAppBar,
  CustomButton,
  CustomIconButton,
  CustomInputBase,
  CustomToolbar,
  SearchContainer,
  SearchIcon,
  SearchIconContainer,
  ThemeIcon,
  ToolbarSection,
} from './Menu.styled';
import { useSearchDispatch } from '../../Hooks/SearchProvider/SearchProvider';
import { useSwitchTheme } from '../../Hooks/Theme/Theme';

function HomeButton() {
  const history = useHistory();
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

function Menu() {
  const switchTheme = useSwitchTheme();
  const location = useLocation();
  return (
    <>
      <CustomAppBar position="fixed" data-testid="CustomAppBar">
        <CustomToolbar>
          <ToolbarSection>
            {HomeButton()}
            {SearchBar(location.pathname)}
          </ToolbarSection>
          <ToolbarSection>
            <ThemeIcon fontSize="default" onClick={switchTheme} />
            <CustomButton>
              <Typography variant="body1" noWrap>
                Login
              </Typography>
            </CustomButton>
          </ToolbarSection>
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
}

export default Menu;
