import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Search } from '../../Hooks/Search/Search';
import { Session } from '../../Hooks/Session/Session';
import { Theme } from '../../Hooks/Theme/Theme';
import Layout from '../Layout';
import Routes from '../Routes/Routes.component';
import { GlobalStyles } from './App.styled';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <Session>
          <Search>
            <Layout>
              <Routes />
            </Layout>
          </Search>
        </Session>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
