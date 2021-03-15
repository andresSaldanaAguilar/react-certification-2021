import React, { createContext, useContext, useState } from 'react';

const lightTheme = {
  palette: { normal: '#FFFFFF', dark: '#CCCCCC', light: '#FFFFFF' },
  fontColor: '#000000',
};

const darkTheme = {
  palette: { normal: '#263238', dark: '#000a12', light: '#4f5b62' },
  fontColor: '#FFFFFF',
};

const ThemeDispatchContext = createContext();

function ThemeProvider({ children }) {
  const [CurrentTheme, setCurrentTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={CurrentTheme}>
      <ThemeDispatchContext.Provider value={setCurrentTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeProvider>
  );
}
function useThemeDispatch() {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useThemeDispatch, darkTheme, lightTheme };
