import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from '../../Hooks/SearchProvider/SearchProvider';
import { ThemeProvider } from '../../Hooks/Theme/Theme';
import Layout from '../Layout';
import Routes from '../Routes/Routes.component';
import Theme from './App.styled';

function App() {
  return (
    <ThemeProvider>
      <Theme>
        <BrowserRouter>
          <SearchProvider>
            <Layout>
              <Routes />
            </Layout>
          </SearchProvider>
        </BrowserRouter>
      </Theme>
    </ThemeProvider>
  );
}

export default App;
