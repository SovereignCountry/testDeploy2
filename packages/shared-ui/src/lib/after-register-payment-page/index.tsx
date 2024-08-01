'use client';

import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import custom_values from '../custom_values';
import TotalPrice from './TotalPrice';
import WhatYouGet from './WhatYouGet';
import GuaranteeAndPolicy from './GuaranteeAndPolicy';
import FeaturedIn from './FeaturedIn';
import ButtonCustom from '../custom-components/ButtonCustom';
import SliderCustom from '../custom-components/SliderCustom';

const AfterRegisterPaymentPage = () => {
  return (
    <Container
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `0px ${custom_values.mobile_padding_x}px`,
        gap: {
          xs: '50px',
          md: '100px',
        },
        paddingBottom: {
          xs: '50px',
          md: '100px',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
            width: 'fit-content',
            color: custom_values.colors.blue_1,
            fontWeight: '500',
            fontSize: '12px',
            padding: '5px 20px',
            borderRadius: '333px',
            backgroundColor: custom_values.colors.blue_0,
          }}
        >
          Discount expires in{' '}
          <Typography
            variant="caption"
            component="span"
            sx={{
              fontSize: '12px',
              fontWeight: '700',
            }}
          >
            9 min 22 sec
          </Typography>
        </Typography>

        <Typography
          variant="h1"
          component="h1"
          sx={{
            width: 'fit-content',
            color: custom_values.colors.contrastText,
            fontWeight: '700',
            fontSize: {
              xs: '15px',
              md: '28px',
            },
            textAlign: 'center',
          }}
        >
          Get Instant Access to Test Results +<br /> Premium Report only for{' '}
          <Typography
            variant="caption"
            component="span"
            sx={{
              color: custom_values.colors.blue_1,
              fontWeight: '700',
              fontSize: {
                xs: '15px',
                md: '28px',
              },
            }}
          >
            $1.95
          </Typography>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            width: {
              xs: '100%',
              md: 'fit-content',
            },
          }}
        >
          <img alt="result image" src="./img/result_bulb.svg" height={'100%'} />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                lineHeight: '19px',
                fontSize: {
                  xs: '13px',
                  md: '16px',
                },
                fontWeight: '400',
                color: custom_values.colors.g_2,
              }}
            >
              Goal
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                lineHeight: '18px',
                fontSize: {
                  xs: '14px',
                  md: '18px',
                },
                fontWeight: '500',
                color: custom_values.colors.contrastText,
              }}
            >
              Improving Relationships
            </Typography>
          </Box>
        </Box>

        <WhatYouGet />

        <TotalPrice />

        <ButtonCustom text="Get my reading" width={290} onClick={() => {}} />

        <GuaranteeAndPolicy />
      </Box>

      <FeaturedIn />

      <SliderCustom title="What the users think?" />
    </Container>
  );
};

export default AfterRegisterPaymentPage;
