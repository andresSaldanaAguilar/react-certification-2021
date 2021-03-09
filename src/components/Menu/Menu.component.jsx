import React from 'react';
import { IconButton, Typography, Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import {
  CustomAppBar,
  CustomInputBase,
  CustomToolbar,
  SearchContainer,
  SearchIconContainer,
  ThemeSwitch,
  ToolbarSection,
} from './Menu.styled';
import { useSearchDispatch } from '../../Hooks/SearchProvider';

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
  const handleChange = () => {
    setChecked(!checked);
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
            <ThemeSwitch
              data-testid="ThemeSwitch"
              checked={checked}
              onChange={handleChange}
              color="default"
            />
            <Button color="inherit">Login</Button>
          </ToolbarSection>
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
}

export default Menu;
