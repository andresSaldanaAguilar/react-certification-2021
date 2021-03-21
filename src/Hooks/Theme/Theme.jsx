import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../utils/theme';

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
