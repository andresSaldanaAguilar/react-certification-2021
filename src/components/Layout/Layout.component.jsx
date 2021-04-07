import React from 'react';
import NavBar from '../Menu/Menu.component';
import { ContentContainer } from './Layout.styled';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <ContentContainer data-testid="ContentContainer">{children}</ContentContainer>
    </>
  );
}

export default Layout;
