import { AppBar, ButtonBase, IconButton, InputBase, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { fade } from '@material-ui/core/styles';
import Brightness4 from '@material-ui/icons/Brightness4';
import { Search } from '@material-ui/icons';

export const CustomAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.normal} !important;
`;

export const CustomToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const ToolbarSection = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: ${(props) => fade(props.theme.fontColor, 0.1)};
  margin-left: 1em;
`;

export const SearchIconContainer = styled.div`
  padding: 0.5em;
  position: absolute;
  pointer-events: none;
`;

export const CustomInputBase = styled(InputBase)`
  margin: 0.25em;
  padding-left: 2em;
  color: ${(props) => props.theme.fontColor} !important;
`;

export const CustomIconButton = styled(IconButton)`
  color: ${(props) => props.theme.fontColor} !important;
`;

export const CustomButton = styled(ButtonBase)`
  color: ${(props) => props.theme.fontColor} !important;
`;

export const ThemeIcon = styled(Brightness4)`
  color: ${(props) => props.theme.fontColor} !important;
  margin-right: 0.5em;
`;

export const SearchIcon = styled(Search)`
  color: ${(props) => fade(props.theme.fontColor, 0.15)} !important;
  margin-right: 0.5em;
`;
