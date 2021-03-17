import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  palette: { normal: '#263238', dark: '#000a12', light: '#4f5b62' },
  fontColor: '#FFFFFF',
};

const lightTheme = {
  palette: { normal: '#FFFFFF', dark: '#CCCCCC', light: '#FFFFFF' },
  fontColor: '#263238',
};

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

function Theme({ children }) {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useSwitchTheme() {
  const setTheme = useContext(ThemeDispatchContext);
  const theme = useContext(ThemeStateContext);
  return () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
}
export { Theme, useSwitchTheme };
