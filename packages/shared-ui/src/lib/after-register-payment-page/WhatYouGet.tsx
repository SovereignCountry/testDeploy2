import * as React from 'react';
import { Box, Typography } from '@mui/material';
import custom_values from '../custom_values';
import CheckIcon from '@mui/icons-material/Check';

const mockWhatYouGetList = [
  'Your personalised plan',
  '1:1 guidance from your trusted advisor',
  '1:1 guidance from your trusted advisor',
  'A better understanding of yourself',
];

const WhatYouGet = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        backgroundColor: custom_values.colors.g_1,
        borderRadius: '20px',
        padding: {
          xs: '16px 26px',
          md: '16px 35px',
        },
        width: '100%',
        maxWidth: custom_values.after_register_payment_container,
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: '700',
          fontSize: {
            xs: '12px',
            md: '16px',
          },
          color: custom_values.colors.contrastText,
          textAlign: 'center',
        }}
      >
        What you get
      </Typography>

      {mockWhatYouGetList.map((el: string, index: number) => (
        <Typography
          key={`MWYGL_${index}`}
          variant="h3"
          component="h3"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: '400',
            fontSize: {
              xs: '12px',
              md: '16px',
            },
            color: custom_values.colors.g_2,
            gap: '4px',
          }}
        >
          <CheckIcon sx={{ color: custom_values.colors.green_1, width: '18px' }} /> {el}
        </Typography>
      ))}
    </Box>
  );
};

export default WhatYouGet;
