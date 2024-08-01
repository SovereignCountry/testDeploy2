'use client';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';

export type FooterLink = {
  label: string;
  url: string;
};

const LinkList = ({ links }: { links: FooterLink[] }) => {
  // const isMediumScreen = useMediaQuery('(min-width:768px)');

  return (
    <List
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
      dense
    >
      {links.map((link, idx) => (
        <ListItem key={idx} sx={{ width: 'fit-content' }}>
          <Link
            sx={{
              whiteSpace: 'nowrap',
              fontSize: '16px',
              fontWeight: '700',
              color: 'white',
              textDecoration: 'none',
            }}
            href={link.url}
          >
            {link.label}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default LinkList;

{
  /* <List
style={{ gap: isMediumScreen ? '40px' : '15px' }}
sx={{
  flexDirection: isMediumScreen ? 'row' : 'column',
  marginInline: 'auto',
  width: 'fit-content',
}}
dense
>
{links.map((link, idx) => (
  <ListItem key={idx} alignItems="center" style={{ justifyContent: 'center' }}>
    <Link sx={{ whiteSpace: 'nowrap' }} href={link.url}>
      {link.label}
    </Link>
  </ListItem>
))}
</List> */
}
