import * as React from 'react';
import { Box, Typography } from '@mui/material';
import custom_values from '../custom_values';

const TotalPrice = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: custom_values.after_register_payment_container,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 0px',
          borderBottom: `1px solid ${custom_values.colors.blue_3}`,
        }}
      >
        <Typography
          variant="caption"
          component="p"
          sx={{
            fontWeight: '700',
            fontSize: {
              xs: '12px',
              md: '16px',
            },
            color: custom_values.colors.contrastText,
          }}
        >
          Total today{' '}
          <Typography
            variant="caption"
            component="span"
            sx={{
              fontWeight: '400',
              fontSize: {
                xs: '12px',
                md: '16px',
              },
              color: custom_values.colors.contrastText,
            }}
          >
            for 7-day trial:
          </Typography>
        </Typography>

        <Typography
          variant="caption"
          component="p"
          sx={{
            fontWeight: '700',
            fontSize: {
              xs: '12px',
              md: '16px',
            },
            color: custom_values.colors.contrastText,
          }}
        >
          $1.95
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px' }}>
        <Typography
          variant="caption"
          component="span"
          sx={{
            fontWeight: '400',
            fontSize: {
              xs: '12px',
              md: '16px',
            },
            color: custom_values.colors.contrastText,
          }}
        >
          Your cost per month after trial:
        </Typography>

        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Typography
            variant="caption"
            component="p"
            sx={{
              textDecoration: 'line-through',
              fontWeight: '400',
              fontSize: {
                xs: '12px',
                md: '16px',
              },
              color: custom_values.colors.red_1,
            }}
          >
            $65
          </Typography>
          <Typography
            variant="caption"
            component="p"
            sx={{
              fontWeight: '400',
              fontSize: {
                xs: '12px',
                md: '16px',
              },
              color: custom_values.colors.contrastText,
            }}
          >
            $29.95
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TotalPrice;
