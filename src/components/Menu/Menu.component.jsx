import React from 'react';
import { IconButton, Typography, Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useHistory, useLocation } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
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
import { useThemeDispatch } from '../../Hooks/Theme/Theme';

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

function SearchBar() {
  const setSearch = useSearchDispatch();
  return (
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
  );
}

function Menu() {
  const [checked, setChecked] = React.useState(false);
  const setTheme = useThemeDispatch();
  const handleChange = () => {
    setChecked(!checked);
    setTheme(checked ? 'light' : 'dark');
  };
  const location = useLocation();

  return (
    <>
      <CustomAppBar position="fixed" data-testid="CustomAppBar">
        <CustomToolbar>
          <ToolbarSection>
            {HomeButton()}
            {location.pathname === '/' && SearchBar()}
          </ToolbarSection>
          <ToolbarSection>
            <ThemeIcon fontSize="large" onClick={handleChange} />
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
