'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import custom_values from '../custom_values';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const theme = useTheme();
  // const isXs = useMediaQuery(theme.breakpoints.up('md'));

  const handleClickLogin = () => {
    router.push('/login');
  };

  return (
    <Box
      sx={{
        zIndex: '2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: {
          xs: `15px ${custom_values.mobile_padding_x}px`,
          md: '15px 80px',
        },
        width: '100%',
      }}
    >
      <Box sx={{ width: '120px' }}>
        <img src="/img/logo.svg" alt="logo" />
      </Box>
      <Button
        onClick={handleClickLogin}
        variant="outlined"
        sx={{
          display: 'flex',
          gap: '8px',
          minWidth: '16px',
          outlineWidth: '2px',
          borderColor: custom_values.colors.green_1,
          color: custom_values.colors.contrastText,
          borderWidth: '2px',
          borderRadius: '333px',
          textTransform: 'capitalize',
          padding: {
            xs: '12px',
            sm: '12px',
            md: '12px 56px',
            lg: '12px 56px',
          },

          '&:hover': {
            borderWidth: '2px',
            borderColor: custom_values.colors.green_1,
            backgroundColor: custom_values.colors.green_0,
          },
          '&:active': {
            borderColor: custom_values.colors.green_1,
            backgroundColor: custom_values.colors.green_0,
          },
        }}
      >
        <img alt="user icon" src="/img/user_ico.svg" width={16} height={16} />
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '16px',
            display: {
              xs: 'none',
              md: 'block',
            },
          }}
        >
          Login
        </Typography>
      </Button>
    </Box>
  );
};

export default Header;
