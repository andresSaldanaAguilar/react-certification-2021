import { Typography } from '@material-ui/core';
import React from 'react';
import { NotFoundContainer } from './NotFound.styled';

function NotFoundPage() {
  return (
    <section>
      <NotFoundContainer data-testid="NotFound" maxWidth="sm">
        <Typography variant="h1">404 Nothing Found</Typography>
      </NotFoundContainer>
    </section>
  );
}

export default NotFoundPage;
