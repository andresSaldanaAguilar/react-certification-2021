import React from 'react';
import { IconButton, Typography, Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {
  CustomAppBar,
  CustomInputBase,
  CustomToolbar,
  SearchContainer,
  SearchIconContainer,
  ToolbarSection,
} from './Menu.styled';
import { useSearchDispatch } from '../../Hooks/SearchProvider/SearchProvider';
import { useThemeDispatch } from '../../Hooks/Theme/Theme';

function HomeButton() {
  const history = useHistory();
  return (
    <IconButton
      onClick={() => history.push('/')}
      className="title"
      edge="start"
      color="inherit"
      data-testid="HomeButton"
    >
      <YouTubeIcon />
      <Typography variant="body1" noWrap>
        MyTube
      </Typography>
    </IconButton>
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
            <Brightness4Icon fontSize="medium" onClick={handleChange} />
            <Button color="inherit">Login</Button>
          </ToolbarSection>
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
}

export default Menu;
