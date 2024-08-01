import * as React from 'react';
import Box from '@mui/material/Box';
import Copyright from './Copyright';
import LinkList, { type FooterLink } from './LinkList';

type FooterProps = {
  links: FooterLink[];
};

const Footer = ({ links }: FooterProps) => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1B234D',
        paddingY: '20px',
      }}
    >
      <LinkList links={links} />
      <Copyright />
    </Box>
  );
};

export default Footer;
