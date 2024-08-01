import React from 'react';
import Grid from '@mui/material/Grid';
import { Footer, Header } from '@shared-ui';
import { quizLoveFooterLinks } from '@constants';

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid sx={{ minHeight: '100vh' }} display="grid" gridTemplateRows="auto 1fr auto">
      <Header />
      <main>{children}</main>
      <Footer links={quizLoveFooterLinks} />
    </Grid>
  );
};

export default ContentWrapper;
