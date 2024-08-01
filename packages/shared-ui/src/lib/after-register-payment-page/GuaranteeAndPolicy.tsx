import * as React from 'react';
import { Box, Link, Typography } from '@mui/material';
import custom_values from '../custom_values';
import LockIcon from '@mui/icons-material/LockSharp';

const GuaranteeAndPolicy = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        maxWidth: custom_values.after_register_payment_container,
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: '500',
          fontSize: {
            xs: '10px',
            md: '12px',
          },
          color: custom_values.colors.contrastText,
          gap: '4px',
        }}
      >
        <LockIcon sx={{ width: '18px', color: custom_values.colors.green_1 }} /> Guaranteed security
        payments
      </Typography>

      <Typography
        variant="h3"
        component="h3"
        sx={{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: {
            xs: '8px',
            md: '10px',
          },
          color: custom_values.colors.g_3,
        }}
      >
        You are enrolling in monthly subscription to NEBULA service. By continuing you agree that if
        you don’t cancel prior to the end of the 7-day trial for the $1 you will automatically be
        charged $45 every 30 days until you cancel in settings. The charge will appear on your bill
        apnebula.co. Learn more about cancellation and refund policy in .
        <Link href="#">Subscription policy</Link>
      </Typography>
    </Box>
  );
};

export default GuaranteeAndPolicy;
