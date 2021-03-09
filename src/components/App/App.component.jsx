import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from '../../Hooks/SearchProvider';
import Layout from '../Layout';
import Routes from '../Routes/Routes.component';
import Theme from './App.styled';

function App() {
  return (
    <Theme>
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
