import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeState } from '../../Hooks/Theme/Theme';

const darkTheme = {
  palette: { normal: '#263238', dark: '#000a12', light: '#4f5b62' },
  fontColor: '#FFFFFF',
};

const lightTheme = {
  palette: { normal: '#FFFFFF', dark: '#CCCCCC', light: '#FFFFFF' },
  fontColor: '#000000',
};

const Theme = ({ children }) => {
  const currentTheme = useThemeState();
  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
