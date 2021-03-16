import { styled, Typography } from '@material-ui/core';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useThemeState } from '../../Hooks/Theme/Theme';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.palette.dark};
    color: ${(props) => props.theme.fontColor};
}`;

const darkTheme = {
  palette: { normal: '#263238', dark: '#000a12', light: '#4f5b62' },
  fontColor: '#FFFFFF',
};

const lightTheme = {
  palette: { normal: '#FFFFFF', dark: '#CCCCCC', light: '#FFFFFF' },
  fontColor: '#263238',
};

export const ThemedTypography = styled(Typography)`
  color: ${(props) => props.theme.fontColor} !important;
`;

const Theme = ({ children }) => {
  const currentTheme = useThemeState();
  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
