import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from '../../Hooks/SearchProvider/SearchProvider';
import { Theme } from '../../Hooks/Theme/Theme';
import Layout from '../Layout';
import Routes from '../Routes/Routes.component';
import { GlobalStyles } from './App.styled';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <SearchProvider>
          <Layout>
            <Routes />
          </Layout>
        </SearchProvider>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
